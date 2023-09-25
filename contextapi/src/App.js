import React, { Component } from 'react';
import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider, ChannelProvider } from './components/userContext'; // Update this line

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserProvider value="Vysakh">
          <ChannelProvider value="Context API">
            <ComponentC />
          </ChannelProvider>
        </UserProvider>
      </div>
    );
  }
}

export default App;