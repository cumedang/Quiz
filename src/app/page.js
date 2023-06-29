import Nav from "./Nav";


export default function Home() {
  return (
    <main>
      <Nav/>
      <div id="main_cicle">

        <div>
          <h1>퀴즈풀기</h1>
          <img src='img/quiz.png'></img>
          <p>여러코딩에 관한<br></br> 퀴즈를 풀 수 있습니다.</p>
        </div>

        <div>
          <h1>코드에러</h1>
          <img src='img/error.png'></img>
          <p>코드에 에러가 날 때<br></br> 도움을 받을 수 있습니다.</p>
        </div>

        <div>
          <h1>퀴즈순위</h1>
          <img src="img/rank.png"></img>
          <p>
            여러사람들의 <br></br>순위를 볼 수 있습니다.
          </p>
        </div>

        <div>
          <h1>로그인</h1>
          <img src="img/login.png"></img>
          <p>로그인을 하여 기능을<br></br> 사용할 수 있습니다.</p>
        </div>

        <div>
          <h1>회원가입</h1>
          <img src="img/signup.png"></img>
          <p>회원가입을 하여 <br></br>여러 정보를 얻어가세요.</p>
        </div>

      </div>
    </main>
  )
}
