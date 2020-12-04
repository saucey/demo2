import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { from, of, Observable } from 'rxjs';
import { loginApi, registerApi, createApi } from '../services/api/media-owner';

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

                    const loginSession = { role: action.login.role, secret: response.data.secret, redirect }

                    return {
                        type: 'LOGGED_IN_SESSION',
                        loggedInSession: loginSession
                    }
                }),
                catchError(error => {
                    return of({ type: 'ERROR',  error  })
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


const createMedia = action$ => action$.pipe(
    ofType('SEND_MEDIA_API'),
    mergeMap(
        action =>
            from(createApi(action.createMediaMap)).pipe(
                map(response => {
                    console.log(response, 'response')
                    return action.createMediaMap;
                }),
                switchMap((createMediaMap) => [
                    {
                        type: 'SEND_MEDIA_CREATE',
                        createMedia: createMediaMap
                    },
                    {
                        type: 'PERSONA_SAVED',
                        personaSaved: true
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);


export const rootEpic = combineEpics(
    login, regitser, createMedia
);