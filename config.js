const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU2XLiOBT9F71CGm94oSpV4w0CZrcNDlP9IGwZC6+RZMCk+PcpQ1Kdh+mejJ9UknXu0Tnn3ndQlJgiBzVg8A4qgk+QoXbJmgqBATDqOEYEdEEEGQQDUI8nE1eaX/RxlI99Nc/VF39cOX2b1w5umDRv00tqoXklc/QZ3LqgqvcZDv8AuEqHzlEqNQajTkCtl9I7uaJtskMm8iVv+zk7Su5uL3Ir6RncWkSICS4OdpWgHBGYOahZQky+R7/jnGERJp0GusthWERDocBVYmmdJFDg9OCIcO3i3qspcuX36CcWwz3hVA31bZRIcxSW9VZ2pN182kuVDppg9kLkIzwRcfWgT/GhQNE4QgXDrPm27vp0zlbHo3ZZds5CbnOT+YLnmcGIufB7hbp6a5Y62htXGujfI676bEyXnmoH/EFMj1XjSjFfkMxLyaXZja2l6KkTObAn3Owr8SX5zEr6f3Sv9enYTPYn/9rxIzcg89U1nVRR2R+Zq9OoSdDmrC5WZLN6Ub9HX7KdsUk8hauOha05mSeMMn7jOPueNxXlHcX81NHVVee8/aI7ZDX5E8u+dpZ2UgW1RN5fORfym3QnB0qTCZFiVRvqJRwXJbSPJBZk+/3sfNUUQbbOW0vQpoFs+JbGPHfHqfI+C6FY11eiGufn+4tS1IwjMOBvXUDQAVNGIMNlcd+TugBGJxeFBLG7uiDnnSB1DNQ79eFFTNg0uva4k33Got0/BG89RaTT1dAfJb79DLqgImWIKEXRC6asJM0MUQoPiILB3z+7oEAX9vCtrSbyXRBjQplf1FVWwujT1M9DGIZlXTC3KUKzXSACBtyvbcQYLg60lbEuIAkTfEJmAhkFgxhmFN26IEInHKIWD8x3vrY0N477hlDgGeOFA9crvaWclMXjF03iZCTJ8RMvhvBJCkX+SdtL/ScuFsJYUeJYU/agC/BHy7R3fusgSoiiW6OZFoh9SVc3XjnzLEiddCfdXXhIjwiKwICRGnXBHoZpXXllioo/4JKZSPMspvvRjrHXep3WOaePjD6r1C+4D0vB4P3XmDLLqMVzppbkCWsZdEF+TyC+v5zXOFHhRYHjhIEk/EV/nFshYVX9KBBrcT9Eb29EiEGcUTAA5qRAuURf7MVS6yh0NNL9g24eWlU/TfoM+yNNU2F+Lq8JTjrLjVosxhT1HX7qmVDEk9fm1c7D3si/NNjbHp7/BQQMQIB6MafBILIWJ90/a2tFf8WzA4HzjWBujm6VcvKwb9icFijOy5VuzdRNzL3CrVfSMFDWQl+VBE6d8I29cY1Fh+1XkaE/t9UeYflazLpQtVif5GRSs2Y0d3vp7m2Y6tWCzusQrry0Y4yvVm4kZXgxmZYNjay/nmtcyS2POh5yHHH5YUP4YBra23Vzmp+GC1N/tOF9DGQf4xffO+T9I1oxRvdpVsDWov8y52vKuVv3C8bHfPxNkgxXO4bOTHot4yMfT654+lK7zOXOOZPwdpYbk2J5yWZhmfIluN1+dkGVQRaXJAcDAIuIlDgCXZBByvRfjerhHFEG8woMeEWURUXmJKUL8kavKpdB9tnfQG+/kX4At38AbBX17PoHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "popkid",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " popkid",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'POPKID_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/L9sXPpR/1680857115-752-x-1584.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
