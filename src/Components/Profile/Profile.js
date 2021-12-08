import React, { Component } from 'react'

export default class Profile extends Component {
  constructor(props){
      super(props)
      this.state={
          counter : 0,
          intervall : null ,
      }
  }

  
  componentDidMount() {
    this.setState({
        intervall: setInterval(() => {
            this.setState({ counter: this.state.counter+ 1 });
        }, 1000)
    });
}
componentWillUnmount() {
    clearInterval(this.state.intervall);
}
  
    render() {
        return (
            <div style={{ backgroundColor: "black"}}>
                <h1 
                        style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "40px",
                        }}>{this.props.fullName}</h1>
                <h1 
                        style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "40px",
                        }}>{this.props.bio}</h1>
               <h1 
                        style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "40px",
                        }}>{this.props.profession}</h1>
               <h1 
                        style={{
                            color: "red",
                            textAlign: "center",
                            fontSize: "40px",
                        }}>{this.state.counter}</h1>
               <img src={this.props.imgi}/>        
                  </div>
        )
    }
}
