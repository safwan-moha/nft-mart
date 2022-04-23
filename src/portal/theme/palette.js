import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const main = '#1d1d1d';
const light = '#444444'
const alpha = 'rgba(69, 135, 182, 0.25)' // alpha is 0.25 of light color
const dark = 'rgba(69, 135, 182, 0.25)'
const green = '#43a047';
const greenRgb = 'rgb(67, 160, 71)';
const red = '#f32013';

export default {
    black,
    white,
    transparent: 'rgba(0, 0, 0, 0)',
    tableHeader: {
        background: 'rgb(220, 231, 239)',
        color: 'rgb(0, 72, 128)'
    },
    boxShadow: {
        default: '16px 16px 16px rgb(0,0,0, 0.10)'
    },
    primary: {
        contrastText: white,
        dark,
        main,
        light: colors.indigo[100]
    },
    shades: {
        main,
        light,
        alpha,
        bg: '#fef4ff',
        green,
        red,
        greenRgb
    },
    text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
        link: colors.blue[600]
    },
    background: {
        default: white,
        paper: white
    },
    icon: colors.blueGrey[600],
    divider: colors.grey[200],
};
