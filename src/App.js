import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">

        <header>
          <Header />
        </header>

        <footer>
          <Footer />
        </footer>

      </div>
    )
  }
}


export default App;
