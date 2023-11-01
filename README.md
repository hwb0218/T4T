# 📌 Thanks for traveling
__`여행패키지 쇼핑몰`__
        
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
- Mongoose
- Heroku
- Third-party-library (jwt, bcrypt 등)

</br>

## 3. ERD 설계
![t4t_erd](https://user-images.githubusercontent.com/52212226/120163016-fbe2d680-c233-11eb-93ce-543d9a336687.PNG)

</br>

## 4. 주요 기능
캐러셀 슬라이더, 페이지네이션, 검색기능, 반응형 웹 디자인을 하였으며       
옵션에 따른 상품출력, 상품 장바구니에 담기, 주문 및 구매확정, 평점 및 리뷰작성, Q&A, 이미지 업로드 및 상품 생성입니다.

<details>
<summary><b>🎞주요 기능 영상 펼치기</b></summary>
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
- historyPage, CartPage 컴포넌트에서 useEffect hooks를 사용해 컴포넌트가 렌더링 될 때 비동기 처리를 하고 있습니다. 

- 이 때, post 요청 데이터로 리덕스 store의 user state를 이용해 이용자의 주문정보와, 장바구니 상품을 가져오고 있고              
  성공적으로 비동기 처리가 되고있습니다.
  
- 하지만 페이지 새로고침을 할 경우 리덕스 store의 state가 초기화 되어버리기 때문에,                  
  user state를 이용한 DB 데이터를 가져 올 수 없었습니다.

- 때문에 redux state 초기화에 대해 구글링 하였으며, 해결방법으로 __redux-persist__ 라이브러리를 사용했습니다.

- redux-persist를 사용하여 redux state를 웹 스토리지에 저장하고, 새로고침 시에도 저장공간에 있는 데이터를 redux에 불러와             
  state를 정상적으로 유지하게 됐습니다.
  
### 5.2 MongoDB 배열 필드 내림차순 정렬
- 상품 주문 페이지를 보면 일반적으로 가장 최근의 주문이 리스트 맨 위에 올라와 있습니다.

- MongoDB에서 select 한 데이터를 오름차순이나 내림차순으로 정렬 할 경우 sort() 메소드를 사용하면 되기 때문에                 
  배열 필드에도 똑같이 적용하면 될 것이라 생각했습니다.

- 하지만 sort()는 document를 정렬하는 메소드이기 때문에 배열 타입 필드에서의 사용이 불가능 했습니다. 
   
- 다른 해결방법을 찾기위해 구글링을 하였고, aggregate() 메소드를 통해 배열 필드를 가공할 수 있다는 것을 알아냈습니다.
  
  <details>
  <summary><b>해결한 코드</b></summary>
  <div markdown="1">

  ~~~javascript
  const history = await Payment.aggregate([
  {
    $match: { user: ObjectId(userId) },
  }
  { $unwind: "$products" },
  { $sort: { "products.createdAt": -1 } },
  {
    $lookup: {
      from: "products",
      localField: "products.productDetail",
      foreignField: "_id",
      as: "products.productDetail",
    },
  },
  { $unwind: "$products.productDetail" },
  {
    $group: {
      products: { $push: "$products" },
      _id: "$_id",
      user: { $first: "$user" },
      createdMonth: { $first: "$createdMonth" },
    },
  },
  ]).sort({ createdMonth: -1 });
  ~~~

  </div>
  </details>

- $sort를 사용하여 내림차순 정렬, aggregate() 메소드를 사용하면 Mongoose의 populate() 메소드로                 
  products 컬렉션 document를 참조할 수 없어 $lookup을 사용해 payments 컬렉션 필드에 products 컬렉션 필드를 조인,                  
  $group으로 특정 필드 그룹핑을 수행했습니다.
  
  <details>
  <summary><b>aggregate 결과</b></summary>      
  <div markdown="1">
  
  ![aggregate](https://user-images.githubusercontent.com/52212226/120635348-56379d80-c4a7-11eb-9598-639bd0c7f88d.PNG)        
  
  </div>
  </details>        
          
</br>

## 6. 마치며
이번 프로젝트에서는 리액트를 처음 사용하려고 하면서 초기에는 낯설었고, 이를 위한 사용법과 동작 원리를 이해하기 위해 노력하였습니다. state와 props에 대한 개념, DOM 이벤트 핸들링 방법, 그리고 Redux를 사용한 상태 전역 상태 관리 등 다양한 개념과 기술을 접하게 되었는데, 처음에는 생소하고 이해하기 어려웠습니다.

그러나, 계속해서 구글링, 책, 동영상 강의를 참고하면서 끊임없이 노력하고 시도함으로써, 점차적으로 리액트를 익숙하게 다룰 수 있게 되었습니다. 이 과정을 통해, 리액트에 대한 이해와 숙련도가 증가하면서, 순수 자바스크립트 작업이 조금 어색하게 느껴질 정도로 리액트에 더 익숙해졌습니다.

이번 리액트 프로젝트에서는 1차 프로젝트와는 다르게 다양한 기능을 적용하였는데, 캐러셀 슬라이더, 페이지네이션, 반응형 페이지 등 여러 가지 기능을 추가하였습니다. 다양한 기능을 적용하고자 했지만, 프로젝트를 혼자서 진행하다 보니 시간이 오래 걸릴 것 같았기 때문에 선택과 집중이 필요했습니다. 그래서 초기에 로드되는 랜딩 페이지에 주로 기능을 집중하고 개발을 진행했습니다.

이런 노력과 경험을 통해 리액트와 관련 기술을 숙달하고, 다양한 기능을 구현할 수 있는 능력을 키워나가고 있습니다. 이러한 경험은 앞으로의 프로젝트에서도 큰 도움이 될 것으로 기대됩니다.    
