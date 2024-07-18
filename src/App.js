
import {Routes,Route} from "react-router-dom";
import { Home } from "./components/Home";
import { Loginpage } from "./components/Loginpage";
import { Joinpage } from "./components/Joinpage";
import { Community } from "./components/Community";
import { Commerse } from "./components/Commerse";
import { Landing } from "./components/Landing";
import { PetList } from "./components/PetList";
import { PetDetail } from "./components/PetDetail";

function App() {
  return (
  <Routes>
    <Route path="/" element={<Landing />}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/home/join" element={<Joinpage/>}/>
    <Route path="/home/login" element={<Loginpage/>}/>
    <Route path="/home/community" element={<Community/>}/>
    <Route path="/home/commerse" element={<Commerse/>}/>
    <Route path="/mypage" element={<PetList/>}/>
    <Route path="/mypage/petdetail" element={<PetDetail />} />
    
  </Routes>
  );
}
export default App;
