import React from 'react';
// import { Link } from 'react-router-dom'
// import tt from './tt.js';
// import 'antd/dist/antd.css';
// import xx from '../public/Home.html'
import './css/body.css';
import './css/aside.css'
import Aside from './Aside.js';
import Section from './Section.js';

import { loadProject } from "./axios/api";

class Home extends React.Component {
    componentDidMount(){
        loadProject().then(res => {
            this.setState({
              isLoaded: true,
              pageInfo: res
            })
            console.log(res["mThor"])
          },(error) =>{
            this.setState({
              isLoaded: true,
              pageInfo: null
            });
          })
      }
    render() {
        return (
            <div>
            <Aside />
            <Section />
            </div>
    
    );
    }
}

export default Home