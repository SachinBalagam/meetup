import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import MeetupContext from './context/index'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {name: '', topic: 'ARTS_AND_CULTURE', text: 'Arts and Culture'}

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  submitForm = text => {
    this.setState({text})
  }

  render() {
    const {name, topic, text} = this.state
    return (
      <MeetupContext.Provider
        value={{
          name,
          topic,
          text,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          submitForm: this.submitForm,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Login} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </MeetupContext.Provider>
    )
  }
}

export default App
