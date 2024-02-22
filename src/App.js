import { useState } from "react";
import FullGridIcons from "./components/FullGridIcons";
import GridIcons from "./components/GridIcons";
import PageDesign from "./components/PageDesign";

function App() {
  
const [valuetrue,setValuetrue] = useState(false)
const visible = ()=>{
 setValuetrue(prev=>!prev)
}
  return (
    <div className="flex min-h-screen">
      <div className="flex-none" onClick={visible}>
        {valuetrue ? <FullGridIcons/> : <GridIcons />}
      </div>
      <div className="flex-grow ">
        <PageDesign/>
      </div>
    </div>
  );
}

export default App;
