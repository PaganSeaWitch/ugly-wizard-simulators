import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WizardJousting from './components/WizardJousting/WizardJousting';
function App() {
  return (
    <Router>  
      <Routes>
      <Route
        element={<WizardJousting/>}
        path="jousting"
        
      />
      </Routes>
    </Router>
  );
}

export default App;
