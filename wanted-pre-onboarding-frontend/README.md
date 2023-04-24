# wanted-pre-onboarding-frontend

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 과제를 제출하기 위해 만들어졌습니다.

## 스택
- React 
- React Router 
- styled-components
- Axios

## 폴더구조
```
wanted-pre-onboarding-frontend
├─ src
│  ├─ components
│  │  ├─ PageLayout.jsx
│  │  ├─ SmallButton.jsx
│  │  └─ TodoItem.jsx
│  ├─ hooks
│  │  ├─ useRedirect.js
│  │  └─ useRouter.js
│  ├─ page
│  │  ├─ Home.jsx
│  │  ├─ SignIn.jsx
│  │  ├─ SignUp.jsx
│  │  └─ ToDo.jsx
│  ├─ routes
│  │  └─ index.js
│  ├─ services
│  │  ├─ auth.js
│  │  ├─ axios.js
│  │  └─ todo.js
│  ├─ styles
│  │  ├─ globalStyle.js
│  │  └─ palette.js
│  ├─ util
│     ├─ localStorage.js
│     └─ regex.js  
├─ App.js
└─ index.js
```
## 구현 기능
1) 회원가입, 로그인 페이지 기능 구현
2) 회원가입, 로그인 페이지에 이메일과 비밀번호의 유효성 검사기능 구현
3) 로그인 여부에 따른 리다이렉트 처리 구현
4) 투두리스트의 작성/수정/삭제 기능 구현

  > 주의사항 : 로그인 이후 localstorage의 access_token삭제 해주셔야 투두리스트의 redirect 테스트를 할수 있습니다.

## 베포링크
- https://wanted-pre-onboarding-frontend-self.vercel.app/

## 데모 영상
| 회원가입 & 로그인 | 리다이렉트 | 투두리스트 |
|:---:|:---:|:---:|
|![회원가입 & 로그인](https://user-images.githubusercontent.com/115159126/232050063-2bc6380e-8b5b-42bc-ba11-70976d862640.gif)|![리다이렉트](https://user-images.githubusercontent.com/115159126/232050209-744d96c9-b043-4161-a8c4-ccede7140fdf.gif)|![투두리스트](https://user-images.githubusercontent.com/115159126/232050190-8efb7859-82b9-442c-8b79-67479a2480a3.gif)


## 프로젝트 실행 방법
``` bash
# 레포지토리 클론
git clone https://github.com/ssori0421/wanted-pre-onboarding-frontend.git

# 패키지 설치
npm install

# 실행
npm start
```


