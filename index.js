const re = /^(\d*[\p{L}\d '\/\\\-\.]+)[,\s]+(\d+)\s*([\p{L} \d\-\/"\(\)]*)$/iu;

const splits = adres => {
    const [, straat, hnr, ext] = adres.match(re) || [];
    return { straat, hnr, ext };
};

module.exports = splits;
