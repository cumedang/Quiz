import './nav.css';
import Link from "next/link";


export default function Nav(){
  return(
    <nav>
    <Link href="/" id='home'>  <img src="img/문제.png"></img></Link>
      <Link href="">
        <img src="img/quiz.png"></img>
        퀴즈풀기</Link>

      <Link href="">
        <img src="img/error.png"></img>
        코드에러</Link>

      <Link href="">
        <img src="img/rank.png"></img>
        퀴즈순위</Link>

      <Link href="/login">
        <img src="img/login.png"></img>
        로그인</Link>

      <Link href="">
        <img src="img/signup.png"></img>
        회원가입</Link>

    </nav>

  )
}