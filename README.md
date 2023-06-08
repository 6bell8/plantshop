```
**2023-Prk plant-shop project **
```
#### https://plantshop-git-master-6bell8.vercel.app/

<br/>

![Group 137](https://github.com/6bell8/plantshop/assets/98573471/73fecbea-7e5f-4431-953a-5311f0da471e)





## 화분과 식물을 커스텀하여, 결제할 수 있는 쇼핑몰 개인 프로젝트입니다.



> #### Project nickname : Plant-shop
> #### Project Hosting : 박진성 (개인 사이드 프로젝트)


<br/>


## 프로젝트 계획 이유

##### 이전에 prk-shop 이라는 신발샵을 주제로 처음 배포를 하였다면, 이전에 부족했던 부분을 보완해서 부가서비스를 지원하도록 설계 해 보다 소비자입장에서 다채로움을 느낄 수 있도록, 계획하고 배포하였습니다.
<br/>

## 프로젝트 기능 소개

##### 식물(원예)라는 상품을보다 생동감 넘치게 경험하고 stripe 결제연동을 통해 쉽게 주문할 수 있습니다. 식물과 화분이 떼어 낼 수 없는 관계인 것 처럼 스와이퍼를 통해 상품을 직접 기획하고 만나 볼 수 있습니다.

<br/>

## 프로젝트 구성 및 화면설계 (클라이언트)

<br/>


https://github.com/6bell8/plantshop/assets/98573471/2f32ffe8-072d-4704-bc22-96670c7d2ea0

<br/>

##### 홈 화면

<br/>



https://github.com/6bell8/plantshop/assets/98573471/a49e2aff-a264-4243-ac8e-4ca7b947b909

<br/>
<br/>
##### 회원가입 및 로그인 서비스
+ 별도 node js 서버를 구축하여, mongoDB로 데이터를 연결. 해당되는 데이터를 대조하여 로그인하도록 설계하였습니다.
+ 방문자 계정을 전역변수로 설정하여, 로그인 직후 방문자의 계정이 전역변수에 보관 되도록 하였습니다.
+ 로컬 스토리지에 토큰을 보관하여, 로그인 시 토큰 생성, 로그아웃 시 토큰 삭제 기능을 활성화 하였습니다.
+ jwt 토큰을 활용하여, 회원계정 전송 시 서버에서 토큰 서명을 통해 위변조 여부를 검증하게끔 하였습니다.


<br/>
<br/>

https://github.com/6bell8/plantshop/assets/98573471/004455a2-525b-4586-a1de-7acb90824000

##### 장바구니 활용 및 결제
+ 전역변수를 통해서 장바구니에 해당하는 물건을 선택하고 Navbar에서 장바구니 아이콘을통해 결제 할 수 있도록 하였습니다.
+ 이전 상품 조회 기록을 로컬 스토리지에 저장하고, 해당 데이터를 토대로 클릭 시 링크로 연결 할 수 있도록 하였습니다.  

<br/>
<br/>

https://github.com/6bell8/plantshop/assets/98573471/c53172d6-e795-4a89-a949-2d213f45803f

##### chart 및 부가서비스
+ syncfusion 라이브러리를 기반으로 chart 서비스를 제공하였습니다.    
+ 더미데이터를 통하여 직원 및 주문 명단을 개설 하였고, pagination을 통해서 원하는 페이지 이동 및 표본개수를 마음대로 조절 할 수 있습니다.
+ 검색 기능을 통해 객체에 맞는 대상을 찾아 볼 수 있도록 설계하였습니다. 

<br/>
<br/>


https://github.com/6bell8/plantshop/assets/98573471/19d20584-69fe-4dff-bd32-cab09948ecba

##### crud 게시판
+ 게시글 수정, 삭제, 생성, 더보기 기능을 탑재하였습니다.
+ json 파일을 직접 생성하여, 서버에 업로드 하였습니다.
+ fetch 함수를 통하여 rest api 데이터를 내려받아, 게시물을 구성하였습니다. 

<br/>
<br/>

------------------

<br/>

## 프로젝트 구성 및 화면설계 (서버)

https://github.com/6bell8/plantshop/assets/98573471/f0f40cb3-c8b6-4365-adbf-33ea7f193fb3

<br/>

##### 웹사이트 데이터 관리 서버
+ sanity 라는 서버 관리 라이브러리를 사용하여, 스케마를 구성, 이미지 및 메인 서브, 메인 타이틀을 한 곳에서 관리 할 수 있도록 하였습니다.




<br/>

<br/>

------------------

<br/><br/>

## 프로젝트에 사용 된 툴

+ Fronted
  + javascript(ES6)
  + react(context api)
  + scss


<br/>

+ Backend 
  + next.js 
  + node.js (express.js)
  + json server(gist 및 다른 도메인 활용)
  + mongoDB
  
  
<br/>

+ Server 
  + vercel  
  + fly.io를 통한 배포 
  
  
<br/>  
  
## 아쉬운 점

<br/>


+ 
  
<br/>  






