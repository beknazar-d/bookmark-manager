import { Provider } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import './App.css'
import './styles/variables.scss';
import store from './store/store';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
function App() {


  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={
          <div className='App'>
          <Sidebar/>
          <Main/>
        </div>
        }/>
      </Routes>
    </Provider>
  )
}

export default App
