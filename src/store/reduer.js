import { combineReducers } from 'redux'
import homeReducer from '../pages/home/root/store'
import categoryReducer from '../pages/category/root/store'
import favoritedReducer from '../pages/favorited/root/store'
import mineReducer from '../pages/mine/root/store'

export default combineReducers({
    home: homeReducer,
    category: categoryReducer,
    favorited: favoritedReducer,
    mine: mineReducer
});