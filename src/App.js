import React, { Component } from 'react';
import Profile from './Components/Profile/Profile';
import mokk from './Components/Profile/mok.jpg';
import './App.css';
export default class App extends Component {
   
    constructor() {
        super();
        this.state = {
            fullName : "Mokrani Akrem",
            bio : "IT",
            profession : "Web Developper",
            imgi : mokk,
            show: false
        };
      }
      compShow = () => {
        this.setState({
          show: !this.state.show
        });
      };
   
   
   
    render() {
        return (
            <div>
                 <button onClick={this.compShow}>
                     Click
                     </button>
          {!this.state.show ? (
                <div>
               <Profile
               fullName={this.state.fullName}
               bio={this.state.bio}
               profession={this.state.profession}
               imgi = {this.state.imgi}>
               
                   </Profile> </div>) : null
            
            }
        
            
          
        
               
                 
            </div>
        )
    }
}
