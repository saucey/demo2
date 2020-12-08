
const initState = {
  loggedInSession: null,
  error: null,
  createMedia: null,
  mediaOwner: {},
  personaSaved: false,
  personas: [],
  personaSuccess: null
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
    case 'CREATE_MEDIA_OWNER':
      return {
        ...state,
        mediaOwner: action.mediaOwner
      }
    case 'ADD_INVENTORY':
      return {
        ...state,
        createMedia: action.createMedia
      }
    case 'SET_PERSONAS':
      return {
        ...state,
        personas: action.personas
      }

    case 'PERSONA_SUCCESS':
      return {
        ...state,
        personaSuccess: action.personaSuccess
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
