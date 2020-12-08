import { ofType } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { loginApi, registerApi } from '../../services/api/user';

const login = action$ => action$.pipe(
    ofType('LOGIN'),
    switchMap(
        action =>
            from(loginApi(action.login)).pipe(
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

                    const loginSession = { user: response, redirect }

                    return {
                        type: 'LOGGED_IN_SESSION',
                        loggedInSession: loginSession
                    }
                }),
                catchError(error => {
                    return of({ type: 'ERROR', error })
                })
            )
    )
);

const regitser = action$ => action$.pipe(
    ofType('REGISTER'),
    switchMap(
        action =>
            from(registerApi(action.register)).pipe(
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
                    return of({ type: 'ERROR', error })
                })
            )
    )
);

export const userEpic = combineEpics(
    login, regitser
);