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
        {input: `Saturnusstraat 60 - 75`,          straat: 'Saturnusstraat 60 -', hnr: '75', ext: '' },
        {input: `Plein '40-'45 10`,                straat: "Plein '40-'45", hnr: '10', ext: '' },
        {input: `Plein 1945 1`,                    straat: 'Plein 1945', hnr: '1', ext: '' },
        {input: `Steenkade t/o 56`,                straat: 'Steenkade t/o', hnr: '56', ext: '' },
        {input: `Steenkade a/b Twee Gezusters`,    straat: undefined, hnr: undefined, ext: undefined },
        {input: `1, rue de l'eglise`,              straat: undefined, hnr: undefined, ext: undefined },
    ];

    adressen.forEach(adres => {
        const { straat, hnr, ext } = splits(adres.input);
        adres.expected =
            adres.straat === straat && adres.hnr === hnr && adres.ext === ext
                ? '✔'
                : '-';
    });

    printTable(adressen);

    t.end();
});
