export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value => 
    value.trim() !== '' ? undefined : 'Cannot be empty';

export const isTrimmed = value => 
    value.trim() === value ? undefined : 'Cannot start or end with spaces';

export const length = length => value => {
    if (!value) {
        return;
    }
    if (length.min && value.length < length.min) {
        return `Must be ${length.min} characters or more long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be ${length.max} characters or less`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim() ? 
        undefined :
        'Does not match';

export const email = value => 
    value && !/^[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const number = value => value && isNaN(value) ? 'Must be a number' : undefined;

export const fileType = file => {
    if (file === null) {
        return 'No file selected'
    }

    const validFileTypes = ['image/jpg', 'image/png', 'image/gif'];
    if (validFileTypes.find(i => i === file.type) === undefined) {
        return 'Please choose a JPEG, PNG or GIF file'
    }
}