import React,{Component} from 'react';
import './index.css';

export default class Login extends Component{
    render(){
        return(
            <div className="login">
                用户名
                <input className="loginput1" type="text" name="username" />
                <br/>
                密码
                <input className="loginput2" type = "password" name="pwd" />
                <br/>
                <input onClick={()=>{this.props.history.push('/home')}} className="submit" type = "submit" name="login" value="登录"/>
            </div>
        )
    }
}