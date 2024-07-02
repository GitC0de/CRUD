import React, { useState } from 'react';
import useStore from "../store/Store";
import { useNavigate, useParams } from 'react-router-dom';

import './Update.css';

const Update = () => {
    const announces = useStore((state) => state.announce);
    const { id } = useParams();
    const detailItem = announces.find(e => e.id == id);

    const [title, setTitle] = useState(detailItem.title);
    const [content, setContent] = useState(detailItem.content);
    
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateString = `${year}.${month}.${day}`


    const addAnnouncement = useStore((state) => state.addAnnouncement);
    const removeAnnouncement = useStore((state) => state.removeAnnouncement);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addAnnouncement(title, content, dateString);
        removeAnnouncement(id);
        setTitle("");
        setContent("");
        navigate('/announce');
    }

    return (
        <>
            <h3>수정하기<font color="#c20c0c">.</font></h3>
            <form onSubmit={handleSubmit} className='announce'>
                <h4>제목<font color="#c20c0c">.</font></h4>
                <input className="title" placeholder='책 제목' value={title} onChange={(e) => setTitle(e.target.value)} />
                <h4>내용<font color="#c20c0c">.</font></h4>
                <input className="content" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
                <div className='buttonPlace'>
                <button className="submit" type='submit'>수정하기</button>
                </div>
            </form>
        </>
    )
}

export default Update;