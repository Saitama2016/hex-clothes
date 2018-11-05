export const OPEN_FORM = 'OPEN_FORM';
export const openForm = (text, showForm) => ({
    type: OPEN_FORM,
    text,
    showForm
});

export const SELECT_SKINTONE = 'SELECT_SKINTONE';
export const selectSkintone = skintone => ({
    type: SELECT_SKINTONE,
    skintone
});

export const CHANGE_SHIRT_COLOR = 'CHANGE_SHIRT_COLOR';
export const changeShirtColor = colorClothes => ({
    type: CHANGE_SHIRT_COLOR,
    colorClothes
});

export const CHANGE_SHIRT_TYPE = 'CHANGE_SHIRT_TYPE';
export const changeShirtType = (shirtType, showLongSleeve, showShortSleeve) => ({
    type: CHANGE_SHIRT_TYPE,
    shirtType,
    showLongSleeve,
    showShortSleeve
});

export const CHANGE_PANTS_COLOR = 'CHANGE_PANTS_COLOR';
export const changePantsColor = pantsColor => ({
    type: CHANGE_PANTS_COLOR,
    pantsColor
});

export const CHANGE_PANTS_TYPE = 'CHANGE_PANTS_TYPE';
export const changePantsType = pantsType => ({
    type: CHANGE_PANTS_TYPE,
    pantsType
});

export const HIDE_SHOES = 'HIDE_SHOES';
export const hideShoes = showShoes => ({
    type: HIDE_SHOES,
    showShoes
});

export const CHANGE_SHOES_COLOR = 'CHANGE_SHOES_COLOR';
export const changeShoesColor = shoesColor => ({
    type: CHANGE_SHOES_COLOR,
    shoesColor
});
