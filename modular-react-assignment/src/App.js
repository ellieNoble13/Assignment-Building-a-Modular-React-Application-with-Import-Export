import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB'



function App() {
  return (
      <div className="App">
        <Header />
        <main style={{ padding: '20px' }}>
          <ContentA />
          <ContentB />
        </main>
        <Footer />
      </div>
  );
}

export default App;