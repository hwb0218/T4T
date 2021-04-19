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
} from "./CartPageElements";

const API_URL = process.env["REACT_APP_API_URL"];

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const { userData } = user;
  const [cartItems, setCartItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getCartItems = async () => {
      const res = await axios.post("/api/cart/getCartItems", {
        userId: userData._id,
      });
      setCartItems(res.data.cart);
    };
    getCartItems();
  }, []);

  const handleToggle = (id) => {
    console.log(id);
    const checked = cartItems.filter(({ _id }) => _id === id);
  };

  return (
    <CartPageContainer>
      <Table>
        <Thead>
          <tr>
            <th style={{ textAlign: "center" }}>
              <div>
                <input type="checkbox" />
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
                  <input
                    onChange={() => handleToggle(item._id)}
                    type="checkbox"
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
    </CartPageContainer>
  );
};

export default CartPage;
