import React from "react";
import {useNavigate} from "react-router-dom";


export function Home(){
    const navigate=useNavigate();

    return(
        <div className="homepage">
            <button className="joinBtn" onClick={()=>navigate("/join")}>회원가입</button>
            <button className="loginBtn" onClick={()=>navigate("/login")}>로그인</button>
            <button className="commerseBtn" onClick={()=>navigate("/commerse")}>commerse</button>
        </div>
    );
}