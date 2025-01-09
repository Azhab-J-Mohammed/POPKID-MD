const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOiOBT9L3ltewQCIlZ11QIifn+gDerWPEQIkAYBQwBhyv++hXZX98PObC9PqYSce3LOufcXSFKS4xmuweAXyCgpEcPtktUZBgOgFb6PKegADzEEBiA1ioxKMIn2xpBx68sKX6nBqrIf+am5PcxrZUhRuC6P8PUF3DogK04xcf8AqF69or9RcyM9sv0C2wa8XEphN7/YTlrF0+jJ7dmOx8Gx0H8BtxYREUqSwMhCfMYUxTNcrxGh36NfGatYk7GQFPIyDfUdlaS9UsRWUl922VXdhrJtm0/RSEjS79GvD9lYX/qKrEe7iT3itzWUreWTftLPGSkIK+SZdHpaVAafP+jnJEiwN/Fwwgirv637ShWK1yU386fQkLtLZCUZvYT5EB5Pnj0tRXG4DPeT5bU6H75HnPr60nH9uAt1J1yhMltz6/0+3PIqX1ly1yltuSu6J8jC6ivxNf3ISvR/dJ+sj6QfjOvmbbbZ2qrl9sc9OQjJG507VVCPluOr5inOtoir79FPnsyRx8zMWOTGHPXPij5ZXkZ93pDfdoWlZaNy1tiwL58E9ZM+YgX9E8vITl7j9Zs1KtXpaZfz17fRm8O6Ajov1hNzigWp7ItMakJzIlmjJoyvB59sMO+EUbALRLbinQk+6ll5oAcvhGUsFboWvNxfFOF64oEBf+sAigOSM4oYSZP7Xk/pAOSVW+xSzO7ygkukbuI5X8KrtjYNNj6WTUZloqWNFF42Si5oVmQdmMlJ7gvogIymLs5z7I1JzlJaL3CeowDnYPD3zw5I8JU9jGvLQb4DfEJz9poUWZwi78PVj0PkummRsG2duHq7wBQMuM9tzBhJgrzVsUgQdUNSYj1ELAcDH8U5vnWAh0vi4hYPcHRfLxRjbcXP6pSsNNiI0N20lMM0efzi9SBSJOQ99yDHP4u+Ap9PIvKeedkVFNGTOAHKoAPIe8+0d35r4XmSVfbu2Ig1c440dXtVrzdzLLExgrsND+0xxR4YMFrgDjghNyqyXRrh5A+4bmO4ZtO19xWmiSX0l0NF2VTSoUHRF9yHp2Dw63NO6anX4kmaNLREpw864HyPIGlfrvAKB2UeChwnDET4V/6jaoVEWfYjwazFfRe9veFhhkicgwHQpwk+i/nYmJti95SbpnoIVD1QwadJH2l/pGkuLKu0CUn4tLb7yWqSY2nGz3c6gmR6qA/G2e2ar9ea7Jzg5V9AwACw2Y7B9Wq7MrVu8XraFFiPleIqaE7XSITjPOCcjaIkr9aIy93tte6OebbcBJkFU2ZJJZrKa67HarTSfTfYqjDw7ZFevbTVHmH5WgzaPF8oI8odI3Wnp47bXVTacr+EIwFKMXZmSHBsnl2n/eGQ7IoITvS42afEoQ1x9b0kmKXbl3uuW+4vo5CVdO+qWvXow/sciN/nL7l3yK/3aPkE38dZglqL/sucrynnbp0vGO8D8jdJ0rbKmztbiIfUf+P9aUPm42LLtlx1ZiJxFmdtmqyv8cJNIz4Ft9vPDshixPyUnsEAoMSjKfFAB8QoZ+pno+7IGecMnTMw4GXYg4qiQLEDzrWaZVuG2Ed/A7X9TDUAt38AH08pCvsHAAA=',
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
