const PATTERN_FOR_NAME = /^[a-zA-Z\s]*$/;
const PATTER_FOR_URL = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
module.exports = {PATTERN_FOR_NAME, PATTER_FOR_URL};