import * as actions from './actions';

const initialState = {
    text: "Select Skintone",
    showForm: false,
    skintone: "#C68642",
    colorClothes: "#FFF",
    shirtType: "long-sleeve-shirt",
    showLongSleeve: "visible",
    showShortSleeve: "visible",
    pantsColor: "#1560BD",
    pantsType: "jeans",
    showShoes: true,
    shoesColor: "#000"
};

export default (state = initialState, action) => {
    if (action.type === actions.SELECT_SKINTONE) {
        
    }
}