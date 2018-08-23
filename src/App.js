import React, { Component } from 'react';//引入react
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
//引入react-router-dom路由
// 页面
import Home from './pages/home/root/Index'
import Category from './pages/category/root/Index'
import Favorited from './pages/favorited/root/Index'
import Mine from './pages/mine/root/Index'

// tabs
import Tabs from './common/tabs/Tabs'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          {/* 重定向 */}
          {/* <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/> */}
          <Route path="/home" component={Home}/>
          <Route path="/category" component={Category}/>
          <Route path="/favorited" component={Favorited}/>
          <Route path="/mine" component={Mine}/>
          
          {/* 匹配所有 */}
          {/* <Route component={Tabs}/> */}
          {/* <Route path="/" component={Tabs}/> */}
          <Route children={({history})=>{
            return <Tabs history={history}/>
          }}/>

        </div>
      </Router>
    );
  }
}

export default App;
