import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Clock from './components/clock/clock';
import Layout from './components/layouts/layout';
import reportWebVitals from './reportWebVitals';
import Footer from './components/layouts/footer/Footer';
import Hearder from './components/layouts/hearder/Hearder';
import Sider from './components/layouts/sider/Sider';
import Content from './components/layouts/content/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Clock /> */}
    {/* <Hearder>hearder</Hearder>
    <Layout>
        <Sider>aside</Sider>
        <Layout>
          <Content>main</Content>
          <Footer>footer</Footer>
        </Layout>
    </Layout> */}
    <Layout>
      <Sider style={{height:'100%!important',backgroundColor:'#fff'}}>aside</Sider>
      <Layout>
        <Hearder>hearder</Hearder>
        <Content>main</Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
    {/* <Hearder>hearder</Hearder>
      <Layout>
        <Sider>aside</Sider>
        <Content>main</Content>
      </Layout>
    <Footer>footer</Footer>
    <Layout>
        <Sider>aside</Sider>
        <Layout>
          <Hearder>hearder</Hearder>
          <Content>main</Content>
        </Layout>
    </Layout>
    <Footer>footer</Footer>
    <Layout>
        <Layout>
          <Hearder>hearder</Hearder>
          <Content>main</Content>
        </Layout>
        <Sider>aside</Sider>
    </Layout>
    <Footer>footer</Footer>

    <Hearder>hearder</Hearder>
    <Content>main</Content>
    <Footer>footer</Footer> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
