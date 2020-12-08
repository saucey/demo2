import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { createApi, getPersonas } from '../services/api/media-owner';

const createMedia = action$ => action$.pipe(
    ofType('CREATE_PERSONA'),
    mergeMap(
        action =>
            from(createApi(action.persona)).pipe(
                map(response => {
                    return action.personas;
                }),
                switchMap((personas) => [
                    {
                        type: 'SEND_MEDIA_CREATE',
                        createMedia: personas
                    },
                    {
                        type: 'PERSONA_SAVED',
                        personaSaved: true
                    },
                    {
                        type: 'PERSONA_SUCCESS',
                        personaSuccess: null
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);

const getPersona = action$ => action$.pipe(
    ofType('GET_PERSONAS'),
    mergeMap(
        action =>
            from(getPersonas()).pipe(
                map(response => {
                    const first10 = response.data.slice(0, 10)
                    first10.map(val => {
                        val.selected = false
                        return
                    })
                    console.log(first10, 'first10');
                    return first10;
                }),
                switchMap((response) => [
                    {
                        type: 'SET_PERSONAS',
                        personas: response
                    },
                    {
                        type: 'PERSONA_SUCCESS',
                        personaSuccess: true
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);

export const mediaOwnerEpic = combineEpics(
    createMedia, getPersona
);