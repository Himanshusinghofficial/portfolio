import React, { useReducer } from 'react'

import CommentContext from './CommentContext'
import CommentReducer from './CommentReducer'
import {
    ADD_VALUE,
    DELETE_VALUE,
    UPDATE_VALUE
} from '../types'

const CommentState = () => {
    const initialState = () => {
        name = '',
            email = '',
            website = '',
            message = ''
    }

    const [state, dispatch] = useReducer(CommentReducer, initialState);

    //ADD_VALUE
    const addvalue = (value) => {
        dispatch({
            type: ADD_VALUE,
            payload: value
        })
    }

    //DELETE_VALUE
    const deletevalue = (id) => {
        dispatch({
            type: DELETE_VALUE,
            payload: id
        })
    }

    //UPDATE_VALUE
    const updatevalue = (id) => {
        dispatch({
            type: UPDATE_VALUE,
            payload: id
        })
    }

    return (
        <CommentContext.Provider
            value={{
                name: state.name,
                email: state.email,
                website: state.website,
                message: state.message,
                addvalue,
                deletevalue,
                updatevalue
            }}>
            {props.children}
        </CommentContext.Provider>
    )

}

export default CommentState;
