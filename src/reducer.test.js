import reducer from './reducer';
import { newSkintone, changeShirtType, changeShirtColor, changePantsType, changePantsColor, changeShoesColor } from './actions/createOutfits';

describe('Reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '___UNKNOWN'});

        expect(state.skintone).toEqual("#C68642");
        expect(state.clothes.shirt.color).toEqual("#FFF");
        expect(state.clothes.shirt.type).toEqual("long-sleeve-shirt");
        expect(state.clothes.shirt.longSleeveVisibility).toEqual("visible");
        expect(state.clothes.shirt.shortSleeveVisibility).toEqual("hidden");
        expect(state.clothes.pants.color).toEqual("#1560BD");
        expect(state.clothes.pants.type).toEqual("jeans");
        expect(state.clothes.shoes.color).toEqual("#000");
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

    describe('changeShirtType', () => {
        it('Should change the type of shirt when selected', () => {
            let state = {
                clothes: {
                    shirt: {
                        type: "long-sleeve-shirt",
                        longSleeveVisibility: "visible",
                        shortSleeveVisibility: "hidden"
                    }
                }
            };
            const clothesShirtType = "t-shirt";
            const clothesLongSleeveVisibility = "hidden";
            const clothesShortSleeveVisibility = "visible";
            state = reducer(state, changeShirtType(clothesShirtType, clothesLongSleeveVisibility, clothesShortSleeveVisibility));
            expect(state.clothes.shirt.type).toEqual(clothesShirtType);
            expect(state.clothes.shirt.longSleeveVisibility).toEqual(clothesLongSleeveVisibility);
            expect(state.clothes.shirt.shortSleeveVisibility).toEqual(clothesShortSleeveVisibility);
        });
    });

    describe('changeShirtColor', () => {
        it('Should change color of shirt when selected', () => {
            let state = {
                clothes: {
                    shirt: {
                        color: "#FFF"
                    }
                }
            };
            const clothesShirtColor = "#000";
            state = reducer(state, changeShirtColor(clothesShirtColor));
            expect(state.clothes.shirt.color).toEqual(clothesShirtColor);
        });
    });

    describe('changePantsType', () => {
        it('Should change type of pants', () => {
            let state = {
                clothes: {
                    pants: {
                        type: "jeans"
                    }
                }
            };
            const clothesPantsType = "khaki";
            state = reducer(state, changePantsType(clothesPantsType));
            expect(state.clothes.pants.type).toEqual(clothesPantsType);
        });
    });

    describe('changePantsColor', () => {
        it('Should change the color of pants', () => {
            let state = {
                clothes: {
                    pants: {
                        color: "#1560BD"
                    }
                }
            };
            const clothesPantsColor = "#000";
            state = reducer(state, changePantsColor(clothesPantsColor));
            expect(state.clothes.pants.color).toEqual(clothesPantsColor);
        });
    });

    describe('changeShoesColor', () => {
        it('Should change the color of pants', () => {
            let state = {
                clothes: {
                    shoes: {
                        color: "#000"
                    }
                }
            };
            const clothesShoesColor = "#FFF";
            state = reducer(state, changeShoesColor(clothesShoesColor));
            expect(state.clothes.shoes.color).toEqual(clothesShoesColor);
        });
    });
});