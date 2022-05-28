import {useState} from "react"
import { AiFillCaretLeft,AiFillCaretDown } from "react-icons/ai";
import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import './SingleContent.css'

const SingleContent = ({title, description}) => {
    const [showContent,setShowContent] = useState(false)
  return (
    <>
    <article className="content">
      <header>
        <h4><div dangerouslySetInnerHTML={{ __html: title, }} /></h4>
        <button className="exampleClass" onClick={()=>setShowContent(!showContent)}>
            {showContent ? <AiFillCaretDown/> : <AiFillCaretLeft/>}
        </button>
      </header>
      <p>{showContent && <p><div dangerouslySetInnerHTML={{ __html: description, }} /></p>}</p>
    </article>
    </>
  );
};

export default SingleContent;
