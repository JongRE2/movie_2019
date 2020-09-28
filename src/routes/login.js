import React from "react";
import Home from "./home";
import Store from "./store";
import {HashRouter,Route} from "react-router-dom";
import { Link  } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Busking from "./busking";
import entre from "./entre";


class Login extends React.Component{
    onSubmit(){

    
        return (
          <HashRouter>
              <Navigation />
              <Route path="/main" component={Home}/>
              <Route path="/store" component={Store}/>
              <Route path="/busking" component={Busking}/>
              <Route path="/enroll" component={entre}/>
            
          </HashRouter>
        )
      }

    render(){
        return (

            
                <div id="login">
                    <h4>Log In</h4>

                    아이디
                    <input type="text"/><br/>
                    패스워드
                    <input type="password"/><br/>
                    <button onClick={this.onSubmit.bind(this)}>Login</button>
                    <input type="reset" value="초기화"/><br/>
                    <a href="/main" target="_blank">회원가입</a>
                    <a>비밀번호 분실</a>
                </div>

        )
    }
}
export default Login;