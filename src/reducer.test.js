import reducer from './reducer';
import { newSkintone } from './actions/createOutfits';

describe.only('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '___UNKNOWN'});

        expect(state.skintone).toEqual("#C68642");
        expect(state.clothes.shirt.color).toEqual("#FFF");
        expect(state.clothes.shirt.type).toEqual("long-sleeve-shirt");
        expect(state.clothes.shirt.longSleeveVisibility).toEqual("visible");
        expect(state.clothes.shirt.shortSleeveVisibility).toEqual("hidden");
        expect(state.clothes.pants.color).toEqual("#1560BD");
        expect(state.clothes.pants.type).toEqual("jeans");
        expect(state.clothes.shoes.show).toEqual(true);
        expect(state.clothes.shoes.color).toEqual("#000");
        expect(state.clothes.shoes.type).toEqual("leather");
    });

    it('Should return the current state on an unknown action', () =>{
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('newSkintone', () => {
        it('Should change to selected skintone', () => {
            let state = {
                skintone: "#C68642"
            };
            const skintone = "#AF6E51";
            state = reducer(state, newSkintone(skintone));
            expect(state.skintone).toEqual(skintone);
        });
    });
})