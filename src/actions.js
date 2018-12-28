export const OPEN_FORM = 'OPEN_FORM';
export const openForm = (showForm) => ({
    type: OPEN_FORM,
    payload: showForm
});

export const NEW_SKINTONE = 'NEW_SKINTONE';
export const newSkintone = (skintone) => ({
    type: NEW_SKINTONE,
    payload: skintone
});

export const CHANGE_SHIRT_COLOR = 'CHANGE_SHIRT_COLOR';
export const changeShirtColor = (clothes) => ({
    type: CHANGE_SHIRT_COLOR,
    payload: clothes
});

export const CHANGE_SHIRT_TYPE = 'CHANGE_SHIRT_TYPE';
export const changeShirtType = (clothes) => ({
    type: CHANGE_SHIRT_TYPE,
    payload: clothes
});

export const CHANGE_PANTS_COLOR = 'CHANGE_PANTS_COLOR';
export const changePantsColor = (clothes) => ({
    type: CHANGE_PANTS_COLOR,
    payload: clothes
});

export const CHANGE_PANTS_TYPE = 'CHANGE_PANTS_TYPE';
export const changePantsType = (clothes) => ({
    type: CHANGE_PANTS_TYPE,
    payload: clothes
});

export const HIDE_SHOES = 'HIDE_SHOES';
export const hideShoes = (clothes) => ({
    type: HIDE_SHOES,
    payload: clothes
});

export const CHANGE_SHOES_COLOR = 'CHANGE_SHOES_COLOR';
export const changeShoesColor = (clothes) => ({
    type: CHANGE_SHOES_COLOR,
    payload: clothes
});
