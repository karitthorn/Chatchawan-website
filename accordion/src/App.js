import data from "./data";
import "./App.css";
import { useState } from "react";
import SingleContent from "./components/SingleContents";
import Navbar from "./components/NavBar";
import logo from "./components/logo.png";

function App() {
  const [context, setContent] = useState(data);
  return (
    <>
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <main>
        <div className="App">
          <div className="container">
            <h1>นโยบาย <span>ชัชวาลย์</span></h1>
            <p className="ptitle">
            คัดสรรกลั่นกรองจากปัญหาจริงของนักเรียน
            คิดสร้างสรรค์เพื่อหานโยบายในการเเก้ปัญหา
            และพร้อมที่จะลงมือดำเนินการได้ทันทีด้วยฝีมือของผู้บริหารคุณภาพ
          </p>
            <section>
              {context.map((data) => {
                return <SingleContent key={data.id} {...data} />;
              })}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
