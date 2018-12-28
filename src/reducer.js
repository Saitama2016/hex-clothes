import * as actions from './actions';

const initialState = {
    showForm: false,
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
        if (state.skintone === null) {
            return Object.assign({}, state, {
                showForm: false,
                skintone: "#C68642",
                clothes: {
                    shirt: {
                        color: "#FFF",
                        type: "long-sleeve-shirt",
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
            })
        }
        else {
            return Object.assign({}, state, {
                showForm: true,
                skintone: action.payload,
            })
        }
    }

    if (action.type === actions.CHANGE_SHIRT_TYPE){
        console.log(action)
        if (action.payload === "long-sleeve-shirt") {
            console.log("It works")
        } else if (action.payload === "t-shirt") {
            console.log("It works too")
        } else if (action.payload === "tank-top") {
            console.log("ME too")
        }
    }

    if (action.type === actions.CHANGE_SHIRT_COLOR){
        const newState = Object.assign({}, state)
        console.log(newState, action)
        newState.clothes.shirt.color = action.payload
        return Object.assign({}, newState, {
            clothes: {
                shirt: {
                    color: newState.clothes.shirt.color
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
                    color: newState.clothes.pants.color 
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