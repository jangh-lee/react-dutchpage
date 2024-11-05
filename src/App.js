import './App.css';
import {ExpenseMain} from "./components/ExpenseMain";
import {AddMembers} from "./components/AddMembers";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddMembers />} />
        <Route path="/expense" element={<ExpenseMain />} />
      </Routes>
    </BrowserRouter>
)

export default App