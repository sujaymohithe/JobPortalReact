import React from 'react';
import MainRouter from './MainRouter';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainRouter/>
      </div>
    );
  }
}

export default App;

