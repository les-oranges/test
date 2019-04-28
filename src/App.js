import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// 引用组件
import Test from './components/test'

export default class App extends Component {

  const User = {
    name: 'Anna',
    hobbies: ['Sports', 'Reading']
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        // 使用组件
        <Test name={'max'} age={12} user={User}/>
      </div>
    );
  }
}
