export const numberFormat = new Intl.NumberFormat();

export const percentFormat = (value) => Math.round( parseFloat(value) * 10000 ) / 100;