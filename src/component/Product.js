import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

const Product = (props) => {
   
    const { productId, productName } = useParams();     //useParams() 파라미터값을 가지고있는 객체를 반환
    const location = useLocation();                     //useLocation() 쿼리스트링 값을 가지고있는 객체 반환
    console.log(location);
    return (
        <div>
            { productId }상품 페이지입니다.
            <div>{productName} 페이지입니다.</div>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>key : {location.key}</li>
            </ul>
        </div>
    );
};

export default Product;