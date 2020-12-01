
const initState = {
  loggedInSession: null,
  error: null
}

const Reducer = (state = initState, action) => {

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
    // you can have as many case statements as you need

    default:
      return state
  }


}

export default Reducer
