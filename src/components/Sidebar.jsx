import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='menu'>
                <h4>책 관리<font color="#c20c0c">.</font></h4>
                <span>책 목록</span>
                <span>대출 목록</span>
                <h4>사용자 관리<font color="#c20c0c">.</font></h4>
                <span>사용자 목록</span>
                <h4>게시판 관리<font color="#c20c0c">.</font></h4>
                <span>공지사항</span>
            </div>
        </div>
    )
}

export default Sidebar;