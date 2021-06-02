# 📌 Thanks for traveling
__`여행패키지 쇼핑몰`__
> [Thanks for traveling](http://t4t-node.herokuapp.com/)
        
</br>

## 1. 제작 기간
- 2021년 3월 ~ 2021년 5월
- 개인 프로젝트

</br>

## 2. 사용 기술
#### `Front-end`
- React / Hooks
- Redux
- Styled-components
- Javascript ES6+
- Third-party-library (axios, react-hook-form 등)
#### `Back-end`
- Node.js
- Express
- MongoDB
- Heroku
- Third-party-library (jwt, bcrypt 등)

</br>

## 3. ERD 설계
![t4t_erd](https://user-images.githubusercontent.com/52212226/120163016-fbe2d680-c233-11eb-93ce-543d9a336687.PNG)

</br>

## 4. 주요 기능
캐러셀 슬라이더, 페이지네이션, 검색기능, 반응형 웹 디자인을 하였으며       
옵션에 따른 상품출력, 상품 장바구니에 담기, 주문 및 구매확정, 평점 및 리뷰작성, Q&A, 상품 업로드입니다.

<details>
<summary><b>주요 기능 영상 펼치기</b></summary>
<div markdown="1">

### 4.1 옵션 및 검색에 따른 상품 출력 
![](https://user-images.githubusercontent.com/52212226/120294979-aecd3600-c301-11eb-9b25-28f1588298da.gif)
### 4.2 장바구니 담기
![](https://user-images.githubusercontent.com/52212226/120295838-81cd5300-c302-11eb-9473-238813dedef4.gif)
### 4.3 주문 및 구매 확정
![](https://user-images.githubusercontent.com/52212226/120296117-c3f69480-c302-11eb-8905-e83ae5f0d210.gif)
### 4.4 평점 및 리뷰 작성
![](https://user-images.githubusercontent.com/52212226/120296479-2059b400-c303-11eb-8177-62d841152240.gif)
### 4.5 Q&A 
![](https://user-images.githubusercontent.com/52212226/120297973-9874a980-c304-11eb-9470-49d5a7d2cbdd.gif)
### 4.6 상품 업로드
![](https://user-images.githubusercontent.com/52212226/120298619-3799a100-c305-11eb-8a41-2ee2579ac327.gif)

</div>
</details>

</br>

## 5. 트러블 슈팅
### 5.1 새로고침 시 리덕스 store의 state 초기화
- history page, Cart page에서 useEffect hooks를 사용해 컴포넌트가 렌더링 될 때 비동기 처리를 하고 있습니다. 

- 이 때, post 요청 데이터로 리덕스 store의 user state를 이용해 이용자의 주문정보와, 장바구니 상품을 가져오고 있고              
  성공적으로 비동기 처리가 되고있습니다.
  
- 하지만 페이지 새로고침을 할 경우 리덕스의 store는 state가 초기화 되고, user state가 날아가버려 DB의 데이터를 가져오지 못합니다. 
