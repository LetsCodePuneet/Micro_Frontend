import React, { lazy, Suspense } from 'react';
import './App.css';

// Lazy load the Header component from MicroFrontendTwo
const Header = lazy(() => import('MicroFrontendTwo/Mf'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <div>Demo home page</div>
    </div>
  );
}

export default App;
