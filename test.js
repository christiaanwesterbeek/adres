const tape = require('tape');
const { printTable } = require('console-table-printer');
const splits = require('./');

tape('splits', t => {
    // prettier-ignore
    const adressen = [
        {input: `Dorpstraat 2`,                    straat: 'Dorpstraat', hnr: '2', ext: '' },
        {input: `Dorpstr. 2`,                      straat: 'Dorpstr.', hnr: '2', ext: '' },
        {input: `Laan 1933 2`,                     straat: 'Laan 1933', hnr: '2', ext: '' },
        {input: `18 Septemberplein 12`,            straat: '18 Septemberplein', hnr: '12', ext: '' },
        {input: `Kerkstraat 42-f3`,                straat: 'Kerkstraat', hnr: '42', ext: '-f3' },
        {input: `Kerk straat 2b`,                  straat: 'Kerk straat', hnr: '2', ext: 'b' },
        {input: `42nd street, 1337a`,              straat: '42nd street', hnr: '1337', ext: 'a' },
        {input: `1e Constantijn Huigensstraat 9b`, straat: '1e Constantijn Huigensstraat', hnr: '9', ext: 'b' },
        {input: `Maas-Waalweg 15`,                 straat: 'Maas-Waalweg', hnr: '15', ext: '' },
        {input: `De Dompelaar 1 B`,                straat: 'De Dompelaar', hnr: '1', ext: 'B' },
        {input: `Kümmersbrucker Straße 2`,         straat: 'Kümmersbrucker Straße', hnr: '2', ext: '' },
        {input: `Friedrichstädter Straße 42-46`,   straat: 'Friedrichstädter Straße', hnr: '42', ext: '-46' },
        {input: `Höhenstraße 5A`,                  straat: 'Höhenstraße', hnr: '5', ext: 'A' },
        {input: `Saturnusstraat 60-75`,            straat: 'Saturnusstraat', hnr: '60', ext: '-75' },
        {input: `Saturnusstraat 60 - 75`,          straat: 'Saturnusstraat', hnr: '75', ext: '- 75' },
        {input: `Plein '40-'45 10`,                straat: "Plein '40-'45", hnr: '10', ext: '' },
        {input: `Plein 1945 1`,                    straat: 'Plein 1945', hnr: '1', ext: '' },
        {input: `Steenkade t/o 56`,                straat: 'Steenkade t/o', hnr: '56', ext: '' },
        {input: `Steenkade a/b Twee Gezusters`,    straat: undefined, hnr: undefined, ext: undefined },
        {input: `1, rue de l'eglise`,              straat: undefined, hnr: undefined, ext: undefined },
        {input: `Nieuwe gracht 22zw /2`,           straat: 'Nieuwe gracht', hnr: '22', ext: 'zw /2' },
        {input: `Nieuwe gracht 224 2`,             straat: 'Nieuwe gracht', hnr: '224', ext: '2' },
        {input: `Joubertstraat 17, 2e verdieping`, straat: 'Joubertstraat', hnr: '17', ext: ', 2e verdieping' },
        {input: `Graaf FLorisstraat 20 4- hoog`,   straat: 'Graaf FLorisstraat', hnr: '20', ext: '4- hoog' },
        {input: `Jacob van Lennepkade 53- I"`,     straat: 'Jacob van Lennepkade', hnr: '53', ext: '- I' },
        {input: `1e Jan van der H.straat 77-2 A`,  straat: '1e Jan van der H.straat', hnr: '77', ext: '-2 A' },
        {input: `Lange Slachterijstraat 22 bus II`,straat: 'Lange Slachterijstraat', hnr: '22', ext: 'bus II' },
        {input: `Hoogte Kadijk 44 - C`,            straat: 'Hoogte Kadijk', hnr: '44', ext: '- C' },
        {input: `Grevelingenstr 116 (2)`,          straat: 'Grevelingenstr', hnr: '116', ext: '(2)' },
    ];

    adressen.forEach(adres => {
        const { straat, hnr, ext } = splits(adres.input);
        adres.expected =
            adres.straat === straat && adres.hnr === hnr && adres.ext === ext
                ? '✔'
                : `--> ${straat}*${hnr}*${ext}`;
    });
    // ${adres.straat}*${adres.hnr}*${adres.ext}
    printTable(adressen);

    // console.log(adressen);

    t.end();
});
