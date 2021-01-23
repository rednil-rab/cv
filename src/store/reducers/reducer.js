import * as actionTypes from '../action';
// import axios from 'axios';

const initialState = {
    sideMenu: false,

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                sideMenu: state.sideMenu ? false : true
            }

    }

    return state;
}

export default reducer