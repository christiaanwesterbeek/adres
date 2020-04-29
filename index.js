const re = /^(\d*[\wäöüß\d '\/\\\-\.]+)[,\s]+(\d+)\s*([\wäöüß\d\-\/]*)$/i;

const splits = adres => {
    const [, straat, hnr, ext] = adres.match(re) || [];
    return { straat, hnr, ext };
};

module.exports = splits;
