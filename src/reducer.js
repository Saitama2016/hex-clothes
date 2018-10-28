import * as actions from './actions';

const initialState = {
    skintone: "#C68642",
    colorClothes: "#FFF",
    pantsColor: "#1560BD",
    showLongSleeve: "visible",
    showShortSleeve: "visible"
};

export default (state = initialState, action) => {
    if (action.type === actions.SELECT_SKINTONE) {
        
    }
}