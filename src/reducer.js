import * as actions from './actions';

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
            show: true,
            color: "#000",
            type: "leather"
        }
    },
};

export default (state = initialState, action) => {
    if (action.type === actions.NEW_SKINTONE) {
            return Object.assign({}, state, {
                skintone: action.payload
            })
    }

    if (action.type === actions.CHANGE_SHIRT_TYPE){
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

    if (action.type === actions.CHANGE_SHIRT_COLOR){
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

    if (action.type === actions.CHANGE_PANTS_TYPE){}

    if (action.type === actions.CHANGE_PANTS_COLOR){
        const newState = Object.assign({}, state)
        newState.clothes.pants.color = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: newState.clothes.shirt,
                pants: {
                    color: newState.clothes.pants.color,
                    type: newState.clothes.pants.type
                },
                shoes: newState.clothes.shoes
            }
        })
    }

    if (action.type === actions.HIDE_SHOES){}

    if (action.type === actions.CHANGE_SHOES_COLOR){
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