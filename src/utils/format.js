export const numberFormat = new Intl.NumberFormat();

export const percentFormat = (value) => Math.floor( parseFloat(value) * 1000 ) / 10;