import data from "./data";
import "./App.css";
import { useState } from "react";
import SingleContent from "./components/SingleContents";
import Navbar from "./components/NavBar";
import logo from "./components/logo.png";
import React, { Component } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Helmet } from "react-helmet";

function App() {
  const [context, setContent] = useState(data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>นโยบายเบอร์ 1</title>
        <link rel="เบอร์ 1 ชัชวาลย์" href="http://mysite.com/example" />
        <meta name="description" content="คัดสรรกลั่นกรองจากปัญหาจริงของนักเรียน
              คิดสร้างสรรค์เพื่อหานโยบายในการเเก้ปัญหา" />
      </Helmet>
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <main>
        <div className="App">
          <div className="container">
            <h1>
              นโยบาย <span>ชัชวาลย์</span>
            </h1>
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
      <div className="footer">
        <h1>"Chase the Impossible"</h1>
        <br></br>
        <div className="github">
          <a href="https://github.com/karitthorn/Chatchawan-website">
            <AiFillGithub />
          </a>
        </div>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScU2cd3P0p2Eo-8CKNcDZtyk8kBz4ZhsfywScCTAx5FllB1fQ/viewform?usp=sf_link">ข้อเสนอเเนะ หรือ เสนอนโยบาย(คลิ้ก)</a></p>
      </div>
    </>
  );
}

export default App;
