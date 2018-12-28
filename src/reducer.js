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
        if (action.payload === "Long Sleeve Shirt") {
            console.log("It works")
        } else if (action.payload === "T-shirt") {
            console.log("It works too")
        } else if (action.payload === "Tank Top") {
            console.log("ME too")
        }
    }

    if (action.type === actions.CHANGE_SHIRT_COLOR){
        const newState = Object.assign({}, state)
        console.log(newState, action)
        newState.clothes.shirt.color = action.payload
        return Object.assign({}, newState) 
    }

    if (action.type === actions.CHANGE_PANTS_TYPE){}
    if (action.type === actions.CHANGE_PANTS_COLOR){}
    if (action.type === actions.HIDE_SHOES){}
    if (action.type === actions.CHANGE_SHOES_COLOR){}

    return state
}