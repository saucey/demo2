import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { createApi } from '../services/api/media-owner';

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
                    },
                    {
                        type: 'SET_CREATED_PERSONA',
                        setCreatePersona: false
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);

export const mediaOwnerEpic = combineEpics(
    createMedia
);