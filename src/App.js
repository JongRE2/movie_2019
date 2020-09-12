import React from 'react';

import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component{
 
  state={
  
    isloading: true
  };//state
  
  getMovies=async()=>{
    const {data:{data:{movies}}} =await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({movies,isloading:false});
    
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const {isloading}=this.state;     
      return (
      <div>
      {this.state.isloading? "Loading...":"We are ready"}
      </div>
      );
  }
}

export default App;
