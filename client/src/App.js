import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Secured from './pages/secured'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/secured' component={Secured} />
      </Switch>
    </Router>
  )
}

export default App
