import React from 'react';
import { Link } from 'react-router-dom'
const Main = (props) => {
    return (
        <div>
            메인 페이지입니다.
            <ul>
                <li><Link to="/product/1/abc?search=productName&q=demo#test">1번 상품</Link></li>
                <li><Link to="/product/2/ccc?search=greengrenn&q=abco#2번test">2번 상품</Link></li>
                <li><Link to="/product/3/피콜로더듬이">3번 상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;