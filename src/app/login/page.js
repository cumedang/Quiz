import '../login/login.css';
import Nav from "../Nav";



export default function Login(){
    return(
       <main>
         <Nav/>
        <form>
            <h1>로그인</h1>
            <input type='text' placeholder='아이디'></input>
            <input type='password' placeholder='비밀번호'></input>
            <input type='submit' value="보내기"></input>
        </form>
       </main>
    )
}