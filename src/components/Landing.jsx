
import React from "react";
import {useNavigate} from "react-router-dom";

export function Landing(){
    const navigate=useNavigate();
    const goToHome = () => {
        navigate("/home");
      };
    return(
        <>
            <p>랜딩페이지</p>
            <button className="homeBtn" onClick={goToHome}>홈으로 가기</button>
        </>
    );
}