import './index.css'
import {Link} from 'react-router-dom'
import MeetupContext from '../../context/index'
import Header from '../Header/index'

const Home = () => (
  <MeetupContext.Consumer>
    {value => {
      const {name, text} = value
      return (
        <div>
          <Header />
          <div className="home-container">
            {name === '' ? (
              <div className="card">
                <h1 className="home-heading">Welcome to Meetup</h1>
                <p className="home-description">
                  Please register for the topic
                </p>
                <Link to="/register">
                  <button type="button" className="custom-button">
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div className="card">
                <h1 className="home-heading">Hello {name}</h1>
                <p className="home-description">Welcome to {text}</p>
              </div>
            )}
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
              className="meetup-image"
            />
          </div>
        </div>
      )
    }}
  </MeetupContext.Consumer>
)

export default Home
