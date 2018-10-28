export const OPEN_FORM = 'OPEN_FORM';
export const openForm = () => ({
    type: OPEN_FORM,
    text: 'Select Skintone'
});

export const SELECT_SKINTONE = 'SELECT_SKINTONE';
export const selectSkintone = () => ({
    type: SELECT_SKINTONE,
    skintone: '#C68642'
});

export const CHANGE_SHIRT_COLOR = 'CHANGE_SHIRT_COLOR';
export const changeShirtColor = () => ({
    type: CHANGE_SHIRT_COLOR,
    colorClothes: "#FFF"
});

export const CHANGE_SHIRT_TYPE = 'CHANGE_SHIRT_TYPE';
export const changeShirtType = () => ({
    type: CHANGE_SHIRT_TYPE,
    shirtType: 'long-sleeve-shirt'
});

export const CHANGE_PANTS_COLOR = 'CHANGE_PANTS_COLOR';
export const changePantsColor = () => ({
    type: CHANGE_PANTS_COLOR,
    pantsColor: '#1560BD'
});

export const CHANGE_PANTS_TYPE = 'CHANGE_PANTS_TYPE';
export const changePantsType = () => ({
    type: CHANGE_PANTS_TYPE,
    pantsType: 'jeans'
});

export const HIDE_SHOES = 'HIDE_SHOES';
export const hideShoes = () => ({
    type: HIDE_SHOES,
    showShoes: true
});

export const CHANGE_SHOES_COLOR = 'CHANGE_SHOES_COLOR';
export const changeShoesColor = () => ({
    type: CHANGE_SHOES_COLOR
});
