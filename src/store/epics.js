import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { getLogin, getRegister } from '../api/mediaRegisteredApi'

const login = action$ => action$.pipe(
    ofType('LOGIN'),
    switchMap(
        action =>
            from(getLogin(action.login)).pipe(
                map(response => {
                    const redirect = ((role) => {
                        switch (role) {
                            case 'media_owner':
                                return '/media-owner'
                            case 'media_agency':
                                return '/media-planner'
                            case 'admin':
                                return '/admin'
                            default:
                        }
                    })(action.login.role);

                    const loginSession = { role: action.login.role, secret: response.data.secret, redirect }

                    return {
                        type: 'LOGGED_IN_SESSION',
                        loggedInSession: loginSession
                    }
                }),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);

const regitser = action$ => action$.pipe(
    ofType('REGISTER'),
    switchMap(
        action =>
            from(getRegister(action.register)).pipe(
                map(response => {
                    const redirect = ((role) => {
                        switch (role) {
                            case 'media_owner':
                                return '/media-owner'
                            case 'media_agency':
                                return '/media-planner'
                            case 'admin':
                                return '/admin'
                            default:
                        }
                    })(action.register.role);

                    const loginSession = { role: action.register.role, secret: response.data.secret, redirect }

                    return {
                        type: 'LOGGED_IN_SESSION',
                        loggedInSession: loginSession
                    }
                }),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);


export const rootEpic = combineEpics(
    login, regitser
);