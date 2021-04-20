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
} from "./CartPageElements";
import useFullPageLoader from "../../../hooks/useFullPageLoader";

const API_URL = process.env["REACT_APP_API_URL"];

const CartPage = () => {
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const user = useSelector((state) => state.user);
  const { userData } = user;

  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      showLoader();
      const res = await axios.post("/api/cart/getCartItems", {
        userId: userData._id,
      });
      hideLoader();
      setCartItems(res.data.cart);
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
      calculate(cartItems);
      setCheckedItems(cartItems);
    } else {
      calculate([]);
      setCheckedItems([]);
    }
  };

  const calculate = (items) => {
    let price = 0;
    items.forEach(({ quantity, productId }) => {
      price += quantity * productId.price;
    });
    setTotalPrice(price);
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
                  checked={checkedItems.length === cartItems.length}
                />
              </div>
            </th>
            <th>상품정보</th>
            <th>주문갯수</th>
            <th>상품금액</th>
          </tr>
        </Thead>
        <tbody>
          {cartItems.map((item) => (
            <TableRow key={item._id}>
              <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                <div>
                  <CheckBoxInput
                    onChange={() => handleToggle(item)}
                    type="checkbox"
                    checked={checkedItems.includes(item)}
                  />
                </div>
              </td>
              <TableData>
                <ProductWrap>
                  <ProductThumb>
                    <ThumbImg
                      src={`${API_URL}${item.productId.images[0]}`}
                      alt={item.productId.title}
                    />
                  </ProductThumb>
                  <ProductTitle>{item.productId.title}</ProductTitle>
                  <RemoveBtn>삭제</RemoveBtn>
                </ProductWrap>
              </TableData>
              <TableData data-th="주문갯수">
                <span>{item.quantity}</span>
              </TableData>
              <TableData data-th="상품금액">
                <span>{item.productId.price}원</span>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
      <OrderCalculator>
        <TotalPrice>
          총 주문금액 <span>{totalPrice}원</span>
        </TotalPrice>
        <div>
          <PaymentButton>결제하기</PaymentButton>
        </div>
      </OrderCalculator>
      {loader}
    </CartPageContainer>
  );
};

export default CartPage;
