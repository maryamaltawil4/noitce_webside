
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Show from './components/Show';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import CompletedTodo from './components/CompletedTodo';
import FormWrapper from './components/FormWrapper';

function App() {
  return (
   
      <div>
        <Navbar />
        <Routes>
            <Route path="" element={<FormWrapper />} /> 
            <Route path="show" element={<FormWrapper />} />
            <Route path="about" element={<About />} />
            <Route path="CompletedTodo" element={<CompletedTodo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
   
  );
}

export default App;
