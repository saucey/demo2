
const initState = {
  loggedInSession: null,
  error: null,
  createMedia: null,
  personaSaved: false
}

const Reducer = (state = initState, action) => {

  console.log(state, 'the state')
  console.log(action, 'the action')

  switch (action.type) {
    case 'LOGGED_IN_SESSION':
      return {
        ...state,
        loggedInSession: action.loggedInSession
      }
    case 'ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'SEND_MEDIA_CREATE':
      return {
        ...state,
        createMedia: action.createMedia
      }
    case 'PERSONA_SAVED':
      return {
        ...state,
        personaSaved: action.personaSaved
      }
    // you can have as many case statements as you need
    default:
      return state
  }



}

export default Reducer
