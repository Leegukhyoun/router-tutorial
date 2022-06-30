import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Product from './component/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailProduct from './component/DetailProduct';
import NotFound from './component/NotFound';
import Detail1 from './component/Detail1';
import Detail2 from './component/Detail2';
import Info from './component/Info';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header/>                                                  {/* Routes 컴포넌트는 여러 Route를 감싸서 그 중 url이 일치하는 라우트 단 하나만 렌더링 */}
          <Routes>                                                   {/* Route는 path속성에 경로, element속성에 컴포넌트를 넣어줌 */}
            <Route path="/" element={<Main/>} />
            <Route path="/product/:productId/:productName" element={<Product/>} />
            <Route path="/detail" element={<DetailProduct/>}>
              <Route path="detail1" element={<Detail1/>}/>
              <Route path="detail2" element={<Detail2/>}/>
            </Route>
            <Route path="Info/*" element={<Info/>}/>
            <Route path="*" element={<NotFound/>} />                 {/* 상단에 위치하는 경로를 모두 확인, 일치하는 경우가 없는 경우 처리 */}
          </Routes>
        </div>
    </BrowserRouter>
  );  
}

export default App;
