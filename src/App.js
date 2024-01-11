import './App.css';
import Header from './components/layout/Header';
import ProjectSection from './components/section/projectssection/ProjecSection';

import TourSection from './components/section/toursSection/ToursSection';

function App() {
  return (
    <div className='App'>
      <Header />
      <TourSection />
      <ProjectSection />
    </div>
  );
}

export default App;
