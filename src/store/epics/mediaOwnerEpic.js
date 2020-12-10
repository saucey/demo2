import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { map, catchError, switchMap, mergeMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { postPersonas, postInventory, getPersonas, uploadAvatar } from '../../services/api/media-owner';
import { UPLOAD_AVATAR } from '../../store/actions/index';

const createPersona = action$ => action$.pipe(
    ofType('CREATE_PERSONA'),
    mergeMap(
        action =>
            from(postPersonas(action.persona)).pipe(
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

const createInventory = action$ => action$.pipe(
    ofType('CREATE_INVENTORY'),
    mergeMap(
        action =>
            from(postInventory(action.mediaOwner)).pipe(
                map(response => {
                    console.log(action.mediaOwner, 'mediaOwner')
                    return action.personas;
                }),
                switchMap((personas) => [
                    {
                        type: 'SEND_MEDIA_CREATESSS',
                        createMedia: personas
                    },
                    {
                        type: 'INVENTORY_SAVED',
                        inventorySaved: true
                    },
                    {
                        type: 'INVENTORY_SUCCESS',
                        inventorySuccess: null
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
                    const sortedActivities = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    const first10 = sortedActivities.slice(0, 10)
                    first10.map(val => {
                        val.selected = false
                        return
                    })
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

const uploadAvatarEpic = action$ => action$.pipe(
    ofType(UPLOAD_AVATAR),
    mergeMap(
        action =>
            from(uploadAvatar(action.avatar)).pipe(
                map(response => {
                    return response.data.avatarUrl;
                }),
                switchMap((avatarUrl) => [
                    {
                        type: 'UPLOAD_AVATAR_SUCCESS',
                        uploadAvatarSuccess: true
                    },
                    {
                        type: 'AVATAR_URL',
                        avatarUrl
                    }
                ]),
                catchError(error => {
                    return of({ type: 'ERROR', error: error.response.data.error })
                })
            )
    )
);

export const mediaOwnerEpic = combineEpics(
    createPersona, getPersona, createInventory, uploadAvatarEpic
);