import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import ExampleListPage from './pages/ExampleListPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<ExampleListPage />} />
        {/* EXAMPLE ROUTE FOR SPECIFIC ID */}
        {/* <Route exact path="example/:id" element={<ExamplePage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
