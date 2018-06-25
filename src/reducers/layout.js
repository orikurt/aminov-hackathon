import { SET_LAYOUT } from '../actions/actionNames';

const layout = (state='VLO', action) => {
    if (action.type == SET_LAYOUT){
        return action.payload;
    }
    return state;
};

export default layout;