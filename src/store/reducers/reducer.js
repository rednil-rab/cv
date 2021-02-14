import * as actionTypes from '../action';
// import axios from 'axios';

const initialState = {
    sideMenu: false,
    loading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                sideMenu: state.sideMenu ? false : true
            }
        case actionTypes.TOGGLE_LOADING:
            return {
                ...state,
                loading: state.loading ? false : true
            }
        default:
            return state;
    }
}

export default reducer