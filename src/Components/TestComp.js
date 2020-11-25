import React from "react"
export default class TextComp extends React.Component {
  
    constructor(){
      super()
      this.state = {
        name: 'hello'
      }
    }
    
    xyz = () => {
      this.setState({
        name: 'new name'
      }, () => {alert('after state changed')})
    }

    
    render() {
    alert('render callled')
      return (
        <div>
        <span>{this.state.name}</span>
        <button onClick={this.xyz}>Click me</button>
        </div>
      );
    }
  }
  
