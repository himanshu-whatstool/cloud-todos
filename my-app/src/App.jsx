import './App.css'
import { MyBtnComp } from './components/myBtn'
import GlobalState from './context/globalState'

function App() {

  return (
    <GlobalState>
      <MyBtnComp />
    </GlobalState>
  )
}

export default App




