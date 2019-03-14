import {
    NEW_SKINTONE,
    CHANGE_SHIRT_TYPE,
    CHANGE_SHIRT_COLOR,
    CHANGE_PANTS_TYPE,
    CHANGE_PANTS_COLOR,
    CHANGE_SHOES_COLOR
} from '../actions/createOutfits';

const initialState = {
    skintone: "#C68642",
    shirtColor: "#FFF",
    shirtType: "long-sleeve-shirt",
    longSleeveVisibility: "visible",
    shortSleeveVisibility: "hidden",
    pantsColor: "#1560BD",
    pantsType: "jeans",
    shoesColor: "#000"
};

export default function reducer(state = initialState, action) {
    if (action.type === NEW_SKINTONE) {
            return Object.assign({}, state, {
                skintone: action.payload
            })
    }
    if (action.type === CHANGE_SHIRT_TYPE){
        const newState = Object.assign({}, state)
        newState.shirtType = action.payload
        if (action.payload === "long-sleeve-shirt") {
            return Object.assign({}, newState, {
                shirtColor: newState.shirtColor,
                type: action.payload,
                shortSleeveVisibility: "hidden",
                longSleeveVisibility: "visible",
                pantsColor: newState.pantsColor,
                pantsType: newState.pantsType,
                shoesColor: newState.shoesColor
            })
        } else if (action.payload === "t-shirt") {
            return Object.assign({}, newState, {
                shirtColor: newState.shirtColor,
                type: action.payload,
                shortSleeveVisibility: "visible",
                longSleeveVisibility: "hidden",
                pantsColor: newState.pantsColor,
                pantsType: newState.pantsType,
                shoesColor: newState.shoesColor
            })
        } else if (action.payload === "tank-top") {
            return Object.assign({}, newState, {
                shirtColor: newState.shirtColor,
                type: action.payload,
                shortSleeveVisibility: "hidden",
                longSleeveVisibility: "hidden",
                pantsColor: newState.pantsColor,
                pantsType: newState.pantsType,
                shoesColor: newState.shoesColor
            })
        }
    }

    if (action.type === CHANGE_SHIRT_COLOR){
        const newState = Object.assign({}, state)
        newState.shirtColor = action.payload
        return Object.assign({}, newState, {
            shirtColor: action.payload,
            shirtType: newState.shirtType,
            shortSleeveVisibility: newState.shortSleeveVisibility,
            longSleeveVisibility: newState.longSleeveVisibility,
            pantsColor: newState.pantsColor,
            pantsType: newState.pantsType,
            shoesColor: newState.shoesColor
        })
    }

    if (action.type === CHANGE_PANTS_TYPE){
        const newState = Object.assign({}, state)
        newState.pantsType = action.payload
        return Object.assign({}, newState, {
            shirtColor: newState.shirtColor,
            shirtType: newState.shirtType,
            shortSleeveVisibility: newState.shortSleeveVisibility,
            longSleeveVisibility: newState.longSleeveVisibility,
            pantsColor: newState.pantsColor,
            pantsType: action.payload,
            shoesColor: newState.shoesColor
        })
    }

    if (action.type === CHANGE_PANTS_COLOR){
        const newState = Object.assign({}, state)
        newState.pantsColor = action.payload
        return Object.assign({}, newState, {
            shirtColor: newState.shirtColor,
            shirtType: newState.shirtType,
            shortSleeveVisibility: newState.shortSleeveVisibility,
            longSleeveVisibility: newState.longSleeveVisibility,
            pantsColor: action.payload,
            pantsType: newState.pantsType,
            shoesColor: newState.shoesColor
        })
    }

    if (action.type === CHANGE_SHOES_COLOR){
        const newState = Object.assign({}, state)
        newState.shoesColor = action.payload
        return Object.assign({}, newState, {
            shirtColor: newState.shirtColor,
            shirtType: newState.shirtType,
            shortSleeveVisibility: newState.shortSleeveVisibility,
            longSleeveVisibility: newState.longSleeveVisibility,
            pantsColor: newState.pantsColor,
            pantsType: newState.pantsType,
            shoesColor: action.payload
        })
    }

    return state
}