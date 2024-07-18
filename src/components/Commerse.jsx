
import commerse_pic1 from "./commerse1.png";
import commerse_pic2 from "./commerse2.png";
import commerse_pic3 from "./commerse3.png";
import "./commerse.css"


export function Commerse(){
    return(
        <div className="picBox">
            <a href="https://smartstore.naver.com/royalcanin/category/ace2fe8316bb42489b6fe18c108b94cd?cp=1&NaPm=ct%3Dlyqy0d5c|ci%3D0zq0001UKDvA9mx501nH|tr%3Dsa|hk%3D58933b4707bb22e1223f6f6af0553daf3ccd3db7|nacn%3Dc6SKBMg1dilZ" target="_blank" rel="noopener noreferrer">
                <img src={commerse_pic1} className="commerse_pics" alt="Commerse 1" />
            </a>
            <a href="https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1470991_115157.jsp" target="_blank" rel="noopener noreferrer">
                <img src={commerse_pic2} className="commerse_pics" alt="Commerse 2" />
            </a>
            <a href="https://www.kbinsure.co.kr/CG313010001.ec" target="_blank" rel="noopener noreferrer">
                <img src={commerse_pic3}  className="commerse_pics" alt="Commerse 3" />
            </a>
        </div>
        
    );
}