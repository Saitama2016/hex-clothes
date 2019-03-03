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
    clothes: {
        shirt: {
            color: "#FFF",
            type: "long-sleeve-shirt",
            longSleeveVisibility: "visible",
            shortSleeveVisibility: "hidden"
        },
        pants: {
            color: "#1560BD",
            type: "jeans"
        },
        shoes: {
            color: "#000",
        }
    },
};

export default function outfitReducer(state = initialState, action) {
    if (action.type === NEW_SKINTONE) {
            return Object.assign({}, state, {
                skintone: action.payload
            })
    }

    if (action.type === CHANGE_SHIRT_TYPE){
        const newState = Object.assign({}, state)
        newState.clothes.shirt.type = action.payload
        if (action.payload === "long-sleeve-shirt") {
            return Object.assign({}, newState, {
                clothes: {
                    shirt: {
                        color: newState.clothes.shirt.color,
                        type: action.payload,
                        shortSleeveVisibility: "hidden",
                        longSleeveVisibility: "visible"
                    },
                    pants: newState.clothes.pants,
                    shoes: newState.clothes.shoes
                }
            })
        } else if (action.payload === "t-shirt") {
            return Object.assign({}, newState, {
                clothes: {
                    shirt: {
                        color: newState.clothes.shirt.color,
                        type: action.payload,
                        shortSleeveVisibility: "visible",
                        longSleeveVisibility: "hidden"
                    },
                    pants: newState.clothes.pants,
                    shoes: newState.clothes.shoes
                }
            })
        } else if (action.payload === "tank-top") {
            return Object.assign({}, newState, {
                clothes: {
                    shirt: {
                        color: newState.clothes.shirt.color,
                        type: action.payload,
                        shortSleeveVisibility: "hidden",
                        longSleeveVisibility: "hidden"
                    },
                    pants: newState.clothes.pants,
                    shoes: newState.clothes.shoes
                }
            })
        }
    }

    if (action.type === CHANGE_SHIRT_COLOR){
        const newState = Object.assign({}, state)
        newState.clothes.shirt.color = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: {
                    color: newState.clothes.shirt.color,
                    type: newState.clothes.shirt.type,
                    shortSleeveVisibility: newState.clothes.shirt.shortSleeveVisibility,
                    longSleeveVisibility: newState.clothes.shirt.longSleeveVisibility
                },
                pants: newState.clothes.pants,
                shoes: newState.clothes.shoes
            }
        })
    }

    if (action.type === CHANGE_PANTS_TYPE){
        const newState = Object.assign({}, state)
        newState.clothes.pants.type = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: newState.clothes.shirt,
                pants: {
                    color: newState.clothes.pants.type,
                    type: action.payload
                },
                shoes: newState.clothes.shoes
            }
        })
    }

    if (action.type === CHANGE_PANTS_COLOR){
        const newState = Object.assign({}, state)
        newState.clothes.pants.color = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: newState.clothes.shirt,
                pants: {
                    color: action.payload,
                    type: newState.clothes.pants.type
                },
                shoes: newState.clothes.shoes
            }
        })
    }

    if (action.type === CHANGE_SHOES_COLOR){
        const newState = Object.assign({}, state)
        newState.clothes.shoes.color = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: newState.clothes.shirt,
                pants: newState.clothes.pants,
                shoes: {
                    color: newState.clothes.shoes.color
                }
            }
        })
    }

    return state
}