import React, { Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import All from './ALL';
import Content from '../../components/Content';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    render() {
        let url = this.props.match.url;
        return (
            <div >
                <div className='header1'>
                    <Link to={url+'/all'}>全部</Link>
                    <Link to={url+'/good'}>精华</Link>
                    <Link to={url+'/share'}>分享</Link>
                    <Link to={url+'/ask'}>问答</Link>
                    <Link to={url+'/job'}>招聘</Link>
                </div>
                <div>
                    
                    {/* 获取页面内的内容 */}
                    <Route exect path={`${url}/show/:id`} component={Content}/>
                    
                    <Route exect path= {`${url}/:kind`} component={All}/>

                </div>
            </div>
            
        )
    }
}
