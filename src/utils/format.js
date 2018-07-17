export const numberFormat = new Intl.NumberFormat().format;

export const dateFormat = new Intl.DateTimeFormat('en-US').format;

export const percentFormat = (value) => Math.round( parseFloat(value) * 10000 ) / 100;

export const rankFormat = (value) => {
    const lastone = parseInt(value.toString().split('').pop(), 10);
    let extention = null;
    switch (lastone){
        case 1:
            extention = 'st';
            break;
        case 2:
            extention = 'nd';
            break;
        case 3:
            extention = 'rd';
            break;
        default:
            extention = 'th';               
    }
    return value + extention;
}

