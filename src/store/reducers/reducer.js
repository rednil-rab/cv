// import * as actionTypes from '../action';
// import axios from 'axios';

const initialState = {
    city: '',
    current: null,
    forecastArray: null,
    celsius: false,
    tempFav: null,
    favorites: (localStorage.getItem('HeroloFavorites') === null) ? [] : JSON.parse(localStorage.getItem('HeroloFavorites'))

}

const reducer = (state = initialState, action) => {
    switch (action.type) {


    }

    return state;
}

export default reducer