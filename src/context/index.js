import React from 'react'

const MeetupContext = React.createContext({
  name: '',
  topic: 'ARTS_AND_CULTURE',
  text: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  submitForm: () => {},
})

export default MeetupContext
