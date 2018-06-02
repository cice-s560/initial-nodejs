const isPorn = require("is-porn");
const url = "http://pornhub.com";

isPorn(url, (err, status) => console.log(`¿El site ${url} es porno?: ${status ? 'Sí' : 'No'}`))
