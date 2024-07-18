import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./petlist.css";
import { axiosInstance } from "../api";

export function PetList(){
    const [pets, setPets] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const memberId = location.state.id;

    const fetchMember=async(memberId)=>{
        try{
            const response=await axiosInstance.get(`/users/?login_id=${memberId}`);
            setPets(response.data.pets);
            console.log(response);
        }
        catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchMember(memberId)
    },[]);

    return(
    // <div>
    //   <h1>나의 펫 관리</h1>
    //   <button onClick={() => navigate('/pets/new')}>펫 추가</button>
    //   <ul>
    //     {pets.map((pet, index) => (
    //       <li key={index} onClick={() => navigate("/mypage/petdetail",{ state: { pet_id: pet.pet_id } })}>
    //         {pet.pet_name} ({pet.pet_type}, {pet.pet_age}살)
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="pet-list-container">
      <h1 className="pet-list-title">나의 펫 관리</h1>
      <div className="pet-list">
        {pets.map((pet, index) => (
          <div key={index} className="pet-item" onClick={() => navigate("/mypage/petdetail", { state: { pet_id: pet.pet_id } })}>
            {/*<img src={samplePetImage} alt={`${pet.pet_name}`} className="pet-image" />*/}
            <p className="pet-name">{pet.pet_name}</p>
          </div>
        ))}
        <div className="pet-item" onClick={() => navigate('/pets/new')}>
          <div className="add-pet">+</div>
        </div>
      </div>
    </div>
    );
}