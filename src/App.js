import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [selectedPage, setSelectedPage] = useState('About');

  // Toggle page function
  function pageToggle() {
    let page = '';

    switch(selectedPage) {
      case 'Portfolio':
        page = (<Portfolio></Portfolio>);
        break;
      case 'Contact':
        page = (<Contact></Contact>);
        break;
      case 'Resume':
        page = (<Resume></Resume>);
        break;
      default:
        page = (<About></About>);
    }
    return page;
  }

  return (
    <div>
      <Header
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <main>
        <div>
          {pageToggle()}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
