import { useState } from "react";
import "./join.css";
import { axiosInstance } from "../api";
import { useNavigate } from "react-router-dom";

export function Joinpage(){
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[id,setId]=useState("");
    const[password,setPassword]=useState("");



    const registerMember=async()=>{
        try{
            const newMember={
                login_id:id,
                login_pw:password,
                user_nickname:name
            }
            const response=await axiosInstance.post('/signup/',newMember);
            navigate('/home/login');
            console.log(response);
        }
        catch(e){
            console.log(e);
        }
    }

    const handleNameChange=(e)=>{
        setName(e.target.value);
    }

    const handleIdChange=(e)=>{
        setId(e.target.value);
    }
    
    const handlePassChange=(e)=>{
        setPassword(e.target.value);
    }
    
    const handleRegisterClick=()=>{
        registerMember();
    }

    return(
        <div className="joinpage">
            <div className="joinBox">
                <h2 className="textJoin">회원가입</h2>
            
                <div className="inputJoinBox">
                    <h3 className="textName">닉네임</h3>
                    <input type="text" className="nameRegister" placeholder="닉네임" value={name} onChange={handleNameChange}></input>
                    <h3 className="textId">아이디</h3>
                    <input type="text" className="idRegister" placeholder="아이디" value={id} onChange={handleIdChange}></input>
                    <h3 className="textPassword">비밀번호</h3>
                    <input type="text" className="passwordRegister" placeholder="비밀번호" value={password} onChange={handlePassChange}></input>
                    <button className="registerBtn" onClick={handleRegisterClick}>회원가입</button>
                </div>
            </div>
            
        </div>
       
    );
}