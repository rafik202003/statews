import React, { Component } from 'react'

export default class App extends Component {
  state = {
    Person: {
      fullName : "rafik",
      bio : "touti",
      imgSrc : "",
      profession : "DSI",
      
    },
    show : false,
    count:0
    
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  incrment=()=>this.setState({count:this.state.count+1})
componentDidMount(){
  setInterval(() => {
    this.incrment()
  }, 1000);
}

  render() {
    return (
      <>
        {this.state.show && (
          <>
          <h1>{this.state.count}</h1>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            <img src={this.state.Person.imgSrc} alt="rafik"></img>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
