import React, { useState } from 'react';
import useStore from "../store/Store";
import { useNavigate } from 'react-router-dom';

import './Create.css';

const Create = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateString = `${year}.${month}.${day}`


    const addAnnouncement = useStore((state) => state.addAnnouncement);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addAnnouncement(title, content, dateString);
        setTitle("");
        setContent("");
        navigate('/announce')

    }

    return (
        <>
        <h3 className='explanation'>공지사항 등록<font color="#c20c0c">.</font></h3>
        <form onSubmit={handleSubmit} className='announce'>
            <h4>제목<font color="#c20c0c">.</font></h4>
            <input className="title" placeholder="책 제목" value={title} onChange={(e) => setTitle(e.target.value)} />
            <h4>내용<font color="#c20c0c">.</font></h4>
            <input className="content" placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
            <div className='buttonPlace'><button className="submit" type='submit'>등록</button></div>
        </form>
        </>
    )
}

export default Create;