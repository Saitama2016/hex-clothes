import * as actions from './actions';

const initialState = {
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
};

export default (state = initialState, action) => {
    if (action.type === actions.PICK_A_SKINTONE) {
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
                skintone: state.skintone,
            })
        }
    }

    return state
}