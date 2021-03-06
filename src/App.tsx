import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { view as MenuList } from './components/SideMenu/';
import { view as DragBar } from './components/DragBar/';
import { view as Editor } from './pages/Editor/';
import { view as About } from './pages/About';
import './App.css';

const { Sider, Content } = Layout;

class App extends Component {
  render() {
    const menuItems = [
      {
        iconType: "user",
        routePath: "/",
        text: "Editor",
        key: "Editor"
      },
      {
        iconType: "user",
        routePath: "/about",
        text: "about",
        key: "about"
      },
      {
        iconType: "user",
        routePath: "/test2",
        text: "test2",
        key: "test2"
      }
    ]

    return (
      <Router>
        <Layout>
          <div className="App">
            <Sider collapsible>
              <DragBar height={30}></DragBar>
              <MenuList menuItems={menuItems}></MenuList>
            </Sider>
          </div>
          <Layout>
            <Content>
              <Route exact path="/" component={Editor}></Route>
              <Route path="/about" component={About}></Route>
            </Content>
          </Layout>
        </Layout>
        
      </Router>
    );
  }
}

export default App;
