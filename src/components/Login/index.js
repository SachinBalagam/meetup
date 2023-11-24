import {Component} from 'react'
import MeetupContext from '../../context/index'
import './index.css'
import Header from '../Header'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Login extends Component {
  state = {showError: false}

  render() {
    const {showError} = this.state
    return (
      <MeetupContext.Consumer>
        {value => {
          const {name, topic, changeName, changeTopic, submitForm} = value

          const onChangeName = event => {
            changeName(event.target.value)
          }

          const onChangeTopic = event => {
            changeTopic(event.target.value)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name !== '' && topic !== '') {
              const findItem = topicsList.find(each => each.id === topic)
              submitForm(findItem.displayText)
              const {history} = this.props
              history.replace('/')
            } else {
              this.setState({showError: true})
            }
          }

          return (
            <div>
              <Header />
              <div className="login-container">
                <div className="login-card">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <div>
                    <h1 className="heading">Let us join</h1>
                    <form className="form-container" onSubmit={onSubmitForm}>
                      <label htmlFor="name" className="label">
                        NAME
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="input"
                        onChange={onChangeName}
                        value={name}
                      />
                      <label htmlFor="topics" className="label">
                        TOPICS
                      </label>
                      <select
                        id="topics"
                        className="input"
                        onChange={onChangeTopic}
                        value={topic}
                      >
                        {topicsList.map(each => (
                          <option key={each.id} value={each.id}>
                            {each.displayText}
                          </option>
                        ))}
                      </select>
                      <button type="submit" className="register-button">
                        Register Now
                      </button>
                    </form>
                    {showError && (
                      <p className="error">Please enter your name</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </MeetupContext.Consumer>
    )
  }
}

export default Login
