import Button from './ui/Button/Button'
import './App.css'
import './styles/variables.scss';
import add from '../src/assets/images/icon-add.svg';
import NaviItem from './ui/NaviItem/NaviItem';
function App() {


  return (
    <div className='App'>
      <Button icon={add} text={'Button'} variant={'primary'} size={'md'} />
      <Button icon={add} text={'Button'} variant={'secondary'} size={'md'} />
      <Button icon={add} text={'Button'} variant={'destructive'} size={'md'} />
      <Button icon={add} isonlyIcon={true} />
      <NaviItem number={'6'}/>
    </div>
  )
}

export default App
