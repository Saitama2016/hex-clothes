export const NEW_SKINTONE = 'NEW_SKINTONE';
export const newSkintone = (skintone) => ({
    type: NEW_SKINTONE,
    payload: skintone
});

export const CHANGE_SHIRT_COLOR = 'CHANGE_SHIRT_COLOR';
export const changeShirtColor = (shirtColor) => ({
    type: CHANGE_SHIRT_COLOR,
    payload: shirtColor
});

export const CHANGE_SHIRT_TYPE = 'CHANGE_SHIRT_TYPE';
export const changeShirtType = (shirtType) => ({
    type: CHANGE_SHIRT_TYPE,
    payload: shirtType
});

export const CHANGE_PANTS_COLOR = 'CHANGE_PANTS_COLOR';
export const changePantsColor = (pantsColor) => ({
    type: CHANGE_PANTS_COLOR,
    payload: pantsColor
});

export const CHANGE_PANTS_TYPE = 'CHANGE_PANTS_TYPE';
export const changePantsType = (pantsType) => ({
    type: CHANGE_PANTS_TYPE,
    payload: pantsType
});

export const CHANGE_SHOES_COLOR = 'CHANGE_SHOES_COLOR';
export const changeShoesColor = (shoesColor) => ({
    type: CHANGE_SHOES_COLOR,
    payload: shoesColor
});