import React, { useState, useEffect } from "react";
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
  EmptyMessage,
  QuantityWrap,
  EditBtn,
} from "./CartPageElements";
import useFullPageLoader from "../../../hooks/useFullPageLoader";
import moment from "moment";
import Modal from "./Modal/Modal";

const API_URL = process.env["REACT_APP_API_URL"];

const CartPage = ({ user }) => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [cartProducts, setCartProducts] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [productId, setProductId] = useState("");

  const { _id } = user.userData;

  useEffect(() => {
    const getCartItems = async () => {
      showLoader();
      const res = await axios.post("/api/cart/getCartItems", { userId: _id });
      hideLoader();
      setCartProducts(res.data.cart);
      setCheckedItems(res.data.cart);
      calculate(res.data.cart);
    };
    getCartItems();
    return () => hideLoader();
  }, [_id]);

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

  const handleRemoveItems = async (productId) => {
    const res = await axios.post("/api/cart/removeCartItems", {
      userId: _id,
      productId,
    });
    setCartProducts(res.data.cart);
    setCheckedItems([]);
    calculate([]);
  };

  const handlePaymentBtn = async () => {
    if (checkedItems.length === 0) {
      return alert("주문하실 상품을 선택하세요.");
    }

    const date = moment().format("YYYY.MM");
    const data = {
      user: _id,
      products: checkedItems,
      date,
    };

    const res = await axios.post("/api/payment/buyProducts", data);
    setCartProducts(res.data.cart.products);
  };

  const openEditBtn = (quantity, productId) => {
    setProductId(productId);
    setQuantity(quantity);
    setShowModal((prev) => !prev);
  };

  const handleCntBtn = (direction) => {
    if (direction === "left") {
      setQuantity(quantity > 1 ? quantity - 1 : 1);
    }
    if (direction === "right") {
      setQuantity(quantity < 10 ? quantity + 1 : 10);
    }
  };

  return (
    <>
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
              <th width="230">주문수량</th>
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
                    <RemoveBtn onClick={() => handleRemoveItems(product.id)}>
                      삭제
                    </RemoveBtn>
                  </ProductWrap>
                </TableData>
                <TableData data-th="주문수량">
                  <QuantityWrap>
                    <span>{product.quantity}</span>
                    <EditBtn
                      onClick={() => openEditBtn(product.quantity, product.id)}
                    >
                      수정
                    </EditBtn>
                  </QuantityWrap>
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
            <EmptyMessage>장바구니가 비었습니다</EmptyMessage>
          </EmptyBox>
        )}
        {loader}
      </CartPageContainer>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        quantity={quantity}
        handleCntBtn={handleCntBtn}
        productId={productId}
        setCartProducts={setCartProducts}
        calculate={calculate}
        setCheckedItems={setCheckedItems}
      />
    </>
  );
};

export default CartPage;
