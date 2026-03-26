import Button from './ui/Button/Button'
import './App.css'
import './styles/variables.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
function App() {


  return (
    <div className='App'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default App
