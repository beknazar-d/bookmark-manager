import { Provider } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import './styles/variables.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import StartPage from './pages/StartPage';
import AddModal from './ui/addModal/addModal';
function App() {


  return (

      <Routes>
        <Route path='/home' element={
          <div className='App'>
          <Sidebar/>
          <Main/>
          {/* <AddModal/> */}
        </div>
        }/>
        <Route path='/' element={<StartPage/>}/>
      </Routes>

  )
}

export default App
