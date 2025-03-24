// import Scrimba from "./assets/components/scrimba";
import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import { useState } from "react";

function App() {
  const [color, setColor] = useState(true);

  function toggleStated(){
    setColor(prevState => !prevState)
  }
  return (
    <>
      <div className="contain">
        <Header colorr={color} toggleState={toggleStated} />
        <Main colorr={color} />
      </div>
    </>
  )
}
export default App