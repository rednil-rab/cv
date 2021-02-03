import * as actionTypes from '../action';
// import axios from 'axios';

const initialState = {
    sideMenu: false,
    portfolioObj: {
        name: null,
        campaign: null,
        image: null,
        image2: null,
        link: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MENU:
            return {
                ...state,
                sideMenu: state.sideMenu ? false : true
            }
        case actionTypes.SET_PORTFOLIO_OBJECT:
            return {
                ...state,
                portfolioObj: action.value
            }
    }

    return state;
}

export default reducer