import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  CartPageContainer,
  Table,
  Thead,
  TableRow,
  TableData,
  ProductWrap,
  ProductThumb,
  ProductTitle,
  RemoveBtn,
  ThumbImg,
  OrderCalculator,
  PaymentButton,
  TotalPrice,
  CheckBoxInput,
  EmptyBox,
  EmptyProduct,
  Content,
} from "./CartPageElements";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import moment from "moment";

const API_URL = process.env["REACT_APP_API_URL"];

const CartPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user);
  const { userData } = user;
  const [cartProducts, setCartProducts] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  console.log(checkedItems);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      showLoader();
      const res = await axios.post("/api/cart/getCartItems", {
        userId: userData._id,
      });
      if (res.data.success) {
        console.log(res.data);
        hideLoader();
        setCartProducts(res.data.cart);
      }
    };
    getCartItems();
  }, []);

  const handleToggle = (item) => {
    const checked = checkedItems.includes(item);

    const newChecked = checked
      ? checkedItems.filter((checkedItem) => checkedItem !== item)
      : [...checkedItems, item];
    setCheckedItems(newChecked);
    calculate(newChecked);
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      calculate(cartProducts);
      setCheckedItems(cartProducts);
    } else {
      calculate([]);
      setCheckedItems([]);
    }
  };

  const calculate = (items) => {
    let price = 0;
    items.forEach(({ quantity, productDetail }) => {
      price += quantity * productDetail.price;
    });
    setTotalPrice(price);
  };

  const handleRemoveItems = async (userId, productId) => {
    showLoader();
    const res = await axios.post("/api/cart/removeCartItems", {
      userId: userData._id,
      productId,
    });
    if (res.data.success) {
      setCartProducts(res.data.cart);
      setCheckedItems([]);
      calculate([]);
      hideLoader();
    }
  };

  const handlePaymentBtn = async () => {
    const date = moment().format("YYYY.MM");
    const data = {
      user: user.userData._id,
      products: checkedItems,
      date,
    };
    const res = await axios.post("/api/payment/successBuy?type=array", data);
    console.log(res.data.payment);
  };

  return (
    <CartPageContainer>
      <Table>
        <Thead>
          <tr>
            <th style={{ textAlign: "center" }} width="60">
              <div>
                <CheckBoxInput
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  type="checkbox"
                  checked={
                    checkedItems.length === cartProducts.length &&
                    checkedItems.length > 0
                  }
                />
              </div>
            </th>
            <th width="380">상품정보</th>
            <th width="230">주문갯수</th>
            <th width="230">상품금액</th>
          </tr>
        </Thead>
        <tbody>
          {cartProducts.map((product) => (
            <TableRow key={product._id}>
              <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                <div>
                  <CheckBoxInput
                    onChange={() => handleToggle(product)}
                    type="checkbox"
                    checked={checkedItems.includes(product)}
                  />
                </div>
              </td>
              <TableData>
                <ProductWrap>
                  <ProductThumb>
                    <ThumbImg
                      src={`${API_URL}${product.productDetail.images[0]}`}
                      alt={product.productDetail.title}
                    />
                  </ProductThumb>
                  <ProductTitle>{product.productDetail.title}</ProductTitle>
                  <RemoveBtn
                    onClick={() => handleRemoveItems(product.user, product.id)}
                  >
                    삭제
                  </RemoveBtn>
                </ProductWrap>
              </TableData>
              <TableData data-th="주문갯수">
                <span>{product.quantity}</span>
              </TableData>
              <TableData data-th="상품금액">
                <span>{product.productDetail.price}원</span>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      {cartProducts.length > 0 ? (
        <OrderCalculator>
          <TotalPrice>
            총 주문금액 <span>{totalPrice}원</span>
          </TotalPrice>
          <div>
            <PaymentButton onClick={handlePaymentBtn}>주문하기</PaymentButton>
          </div>
        </OrderCalculator>
      ) : (
        <EmptyBox>
          <EmptyProduct />
          <Content>장바구니가 비었습니다</Content>
        </EmptyBox>
      )}
      {loader}
    </CartPageContainer>
  );
};

export default CartPage;
