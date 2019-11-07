import React, { Component } from 'react';
import Header from './components/Header';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/home/Home';
import Api from './Api';
import Start from './Start';
import About from './About';
import Login from './Login';


export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className='content'>
                            <Route path='/home' component={Home}/>
                            <Route path='/start' component={Start}/>
                            <Route path='/api' component={Api}/>
                            <Route path='/about' component={About}/>
                            <Route path='/login' component={Login}/>

                        </div>
                        <div className='sider'>
                            <div className="inner">
                                <p>CNode：Node.js专业中文社区</p>
                                <div>
                                    您可以 登录 或 注册，也可以
                                    <button>通 过 GitHub 登 录</button>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="inner ads">
                                    <a><img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/></a>
                                    <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                                    <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </Router>
            
        )
    }
}