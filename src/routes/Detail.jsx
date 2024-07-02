import React from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store/Store';
import { useNavigate } from 'react-router-dom';

import './Detail.css';


const Detail = () => {
    const announces = useStore((state) => state.announce);
    const removeAnnouncement = useStore((state) => state.removeAnnouncement);
    
    const { id } = useParams();
    const navigate = useNavigate();
    const detailItem = announces.find(e => e.id == id);

    const handleDelete = () => {
        removeAnnouncement(id);
        navigate(`/announce`);
        console.log(announces);
    }

    return (
        <>
            <h4>제목</h4>
            <input className="title" value={detailItem.title} />
            <h4>내용</h4>
            <input className="content"  value={detailItem.content} />
            <div className='buttonsPlace'>
            <button onClick={() => navigate(`/announce/register/${id}`)}>수정하기</button>
            <button onClick={handleDelete}>삭제하기</button>
            <button onClick={() => navigate(`/announce`)} >목록으로</button>
            </div>
        </>
    )
}

export default Detail;
