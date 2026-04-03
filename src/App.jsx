import { Provider } from 'react-redux';
import './App.css'
import './styles/variables.scss';
import store from './store/store';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
function App() {


  return (
    <Provider store={store}>
    <div className='App'>
        <Sidebar/>
        <Main/>
    </div>
    </Provider>
  )
}

export default App
