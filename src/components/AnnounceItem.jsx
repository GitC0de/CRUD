import React from "react";
import { useNavigate } from 'react-router-dom';

import './AnnounceItem.css';

const AnnounceItem = ({ announcement }) => {
    const navigate = useNavigate();
    
    const handleDetail = () => {
        navigate(`/announce/detail/${announcement.id}`);

    }

  return (
    
    <div onClick={handleDetail} className="announcement">
      <div className="itemTitle">
        <span> {announcement.title} </span>
      </div>
      <div className="itemContent">
        <span>{announcement.date}</span>
      </div>     
    </div>
    
  );
};

export default AnnounceItem;