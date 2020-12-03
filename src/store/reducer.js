
const initState = {
  loggedInSession: null,
  error: null,
  createMedia: null
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
    case 'SEND_ABOUT':
      return {
        ...state,
        createMedia: action.createMedia
      }

    case 'SEND_PERSONA':
      return {
        ...state,
        createMedia: { ...state.createMedia, persona: action.persona.persona }
      }
    // you can have as many case statements as you need

    default:
      return state
  }


}

export default Reducer
