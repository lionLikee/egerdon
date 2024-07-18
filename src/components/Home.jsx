import React from "react";
import {useNavigate} from "react-router-dom";
import "./home.css";
import logo from "./seviceLogo.png";
import Btn from  "./orangeBtn.png";
import pic1 from "./pic1.png";
import pic2 from "./pic2.png";


export function Home(){
    const navigate=useNavigate();

    return(
        <div className="homepage">
            <div className="navBar">
                <img src={logo} alt="logo" className="logo_pic"></img>
                <button className="joinBtn" onClick={()=>navigate("/join")}>회원가입</button>
                <button className="loginBtn" onClick={()=>navigate("/login")}>로그인</button>
                <button className="commerseBtn" onClick={()=>navigate("/commerse")}>COMMERSE</button>
            </div>

            <div className="homeText">
                <h1>펫을 위한 완벽한 가계부.</h1>
                <h3 className="text2">당신의 소중한 펫을 위한 모든 소비를 한눈에 정리하고</h3>
                <h3 className="text3">빠르게 관리할 수 있어요</h3>
            </div>

            <img src={Btn} className="anotherBtn" onClick={()=>navigate("/login")}></img>
            <div className="pictures">
                <img src={pic1} className="pic1"></img>
                <img src={pic2} className="pic2"></img>
            </div>
        </div>
    );
}