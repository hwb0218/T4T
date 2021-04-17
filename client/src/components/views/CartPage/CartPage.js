import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const API_URL = process.env["REACT_APP_API_URL"];

const CartPageContainer = styled.main`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.tablet`
    max-width: 700px;
    width: 100%;
    padding: 0 25px;
  `};
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

const Thead = styled.thead`
  background: #f7f7f7;
  border-bottom: 1px solid #e2e2e2;
  line-height: 48px;
  font-size: 15px;
  font-weight: bold;
`;

const TableRow = styled.tr`
  & + & {
    border-top: 1px solid #e2e2e2;
  }

  &:last-child {
    border-bottom: 2px solid #383d4a;
  }
`;

const ProductWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 55px 0 115px;
  margin: 5px 0;
  min-height: 100px;
`;

const ProductThumb = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const RemoveBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const ThumbImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const ProductDescription = styled.div``;

const CartPage = () => {
  const user = useSelector((state) => state.user);
  const { userData } = user;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      const res = await axios.post("/api/cart/getCartItems", {
        userId: userData._id,
      });
      setCartItems(res.data.cart);
    };
    getCartItems();
  }, []);

  return (
    <CartPageContainer>
      <Table>
        <Thead>
          <tr>
            <th align="center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
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
            <TableRow>
              <td style={{ verticalAlign: "middle" }} align="center" width="50">
                <div>
                  <input type="checkbox" />
                </div>
              </td>
              <td width="300">
                <ProductWrap>
                  <ProductDescription>
                    <ProductThumb>
                      <ThumbImg
                        src={`http://localhost:5000/${item.productId.images[0]}`}
                        alt={item.productId.title}
                      />
                    </ProductThumb>
                    <span style={{ display: "inline-block" }}>
                      {item.productId.title}
                    </span>
                  </ProductDescription>
                  <RemoveBtn>삭제</RemoveBtn>
                </ProductWrap>
              </td>
              <td align="center">
                <span>{item.quantity}</span>
              </td>
              <td align="center">
                <span>{item.productId.price}</span>
              </td>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </CartPageContainer>
  );
};

export default CartPage;
