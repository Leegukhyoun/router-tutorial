import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                <li><NavLink to='/' className={({isActive})=>isActive?"okay":""}>메인페이지</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=>"green " + (isActive?"okay":"")}>상품페이지</NavLink></li>
                <li><NavLink to="/detail" className={({isActive})=>isActive?"okay":""}>상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>isActive?"okay":""}>1번 상품자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>isActive?"okay":""}>2번 상품자세히보기</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>isActive?"okay":""}>정보</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;