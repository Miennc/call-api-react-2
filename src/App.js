import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Menu from './components/Menu'
import Content from './components/Content';
export default function App() {
  return (
    <div>
    <Menu></Menu>
    <Content></Content>
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />} >

          </Route>

        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>

    </div>
  )
}
