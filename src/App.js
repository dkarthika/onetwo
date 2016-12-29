import React, { Component } from 'react';
import './App.css';
import Example from './Example';



class App extends Component {
  constructor() {
    // In a constructor, call `super` first if the class extends another class
    super();

    // Initialize state in the constructor; this is the only place you
    // can set the state directly without using this.setState
    this.state = { text: 'bus car plane hello world'
  };

    this.updateText=this.updateText.bind(this);

  }
  updateText(ev)
  {
    const value=ev.currentTarget.value;
  //  console.log("hey, updated",value);
    this.setState({text:value});
  }

  handleChange(ev)
  {
    this.setState({
      value:ev.target.value,
    });
  }


  render() {
    return (
      <div className="App">
        <div className="form-group">
          <textarea
            className="form-control"
            value={this.state.text}
          onChange={this.updateText}
 ref={(el)=>el && el.focus()}/>
          <p onChange = {this.updateText}> {this.state.text}</p>
          <Example text={this.state.text} foo="bar"/>
      </div>
    </div>
    );
  }
}


export default App;
