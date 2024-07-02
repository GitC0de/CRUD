import React from "react";
import useStore from "../store/Store";
import { useNavigate } from 'react-router-dom';
import AnnounceItem from "../components/AnnounceItem";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Announce.css';

const Announce = ({ announce }) => {
  const announces = useStore((state) => state.announce);
  const navigate = useNavigate();

  const handleCreate = () => navigate('/announce/register')

  return (
    <div className="announce">
      <div className="announceHeader">
        <h3>공지사항<font color="#c20c0c">.</font></h3>
        <button className="create" onClick={handleCreate}>새 글 등록</button>
      </div>
      
      <div className="boardSearchPlace">
        <input className="boardSearch" placeholder="검색어를 입력하세요"></input>
        <FontAwesomeIcon icon={faSearch} className="boardSearchIcon" />
      </div>

      <div className="board">
        <div className="boardHeader">
          <div>제목</div> 
          <div>날짜</div>
        </div>
        
        {announces.map((announcement) => (
          <AnnounceItem key={announcement.id} announcement={announcement} />
         ))}
        
      </div>

      <span className="indexChanger"> {'<'}&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp;&nbsp;{'>'} </span>

        

        
    </div>
  );
};

export default Announce;