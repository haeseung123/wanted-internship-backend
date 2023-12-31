<br>
<br>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>
<p align="center">Nest.js / TypeORM / MYSQL</p>

<br>

#### 원티드 프리온보딩 인턴쉽 백엔드
과제 제출용 X, 연습용 O

#### 게시판을 관리하는 RESTful API

1. 사용자 회원가입 엔드포인트
이메일과 비밀번호로 회원가입 할 수 있는 엔드포인트 구현하기

<유효성 검사>
- 이메일 조건 : @포함
- 비밀번호 조건 : 8자 이상
- 비밀번호는 반드시 암호화하여 저장

<br>

2. 사용자 로그인 엔드포인트

로그인 시 사용자 인증 거친 후 JWT 생성하여 사용자에게 반환
1번과 동일하게 이메일 비밀번호 유효성 검사

<br>

3. 새로운 게시글 생성 엔드포인트

<br>

4. 게시글 목록 조회 엔드포인트

pagination 기능 구현 (1-5)

<br>

5. 특정 게시글 조회 엔드포인트

게시글의 ID를 받아 해당 게시글 조회

<br>

6. 특정 게시글 수정 엔드포인트

게시글의 ID를 받아 해당 게시글 수정
게시글을 수정할 수 있는 사용자는 게시글 작성자여야만 함

<br>

7. 특정 게시글 삭제 엔드포인트


게시글의 ID를 받아 해당 게시글 삭제
게시글을 삭제할 수 있는 사용자는 게시글 작성자여야만 함

<br>

#### ERD
![nest-api](https://github.com/haeseung123/wanted-internship-backend/assets/106800437/477c2bef-5494-47f7-bd02-1ce41c77c413)


#### Running the app

```bash
# watch mode
$ npm run start:dev
```

