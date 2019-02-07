import {
    NEW_SKINTONE,
    newSkintone,
    CHANGE_SHIRT_COLOR,
    changeShirtColor,
    CHANGE_SHIRT_TYPE,
    changeShirtType,
    CHANGE_PANTS_COLOR,
    changePantsColor,
    CHANGE_PANTS_TYPE,
    changePantsType,
    CHANGE_SHOES_COLOR,
    changeShoesColor
} from './createOutfits';

describe('newSkintone', () => {
    it('Should return the action', () => {
        const skintone = "#C68642";
        const action = newSkintone(skintone);
        expect(action.type).toEqual(NEW_SKINTONE);
        expect(action.payload).toEqual(skintone);
    })
})

describe('changeShirtColor', () => {
    it('Should return the action', () => {
        const shirtColor = "#FFF";
        const action = changeShirtColor(shirtColor);
        expect(action.type).toEqual(CHANGE_SHIRT_COLOR);
        expect(action.payload).toEqual(shirtColor);
    })
})

describe('changeShirtType', () => {
    it('Should return the action', () => {
        const shirtType = "long-sleeve-shirt";
        const action = changeShirtType(shirtType);
        expect(action.type).toEqual(CHANGE_SHIRT_TYPE);
        expect(action.payload).toEqual(shirtType);
    })
})

describe('changePantsColor', () => {
    it('Should return the action', () => {
        const pantsColor = "#1560BD";
        const action = changePantsColor(pantsColor);
        expect(action.type).toEqual(CHANGE_PANTS_COLOR);
        expect(action.payload).toEqual(pantsColor);
    })
})

describe('changePantsType', () => {
    it('Should return the action', () => {
        const pantsType = "jeans";
        const action = changePantsType(pantsType);
        expect(action.type).toEqual(CHANGE_PANTS_TYPE);
        expect(action.payload).toEqual(pantsType);
    })
})

describe('changeShoesColor', () => {
    it('Should return the action', () => {
        const shoesColor = "#000";
        const action = changeShoesColor(shoesColor);
        expect(action.type).toEqual(CHANGE_SHOES_COLOR);
        expect(action.payload).toEqual(shoesColor);
    })
})