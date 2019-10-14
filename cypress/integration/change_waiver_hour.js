describe('Automated ESPN Script', function() {
    it('Changes waiver time to next hour!', function() {
        cy.visit('https://fantasy.espn.com/basketball/team?leagueId=292959&teamId=1&seasonId=2020');

        cy.get('.btn.btn--custom.ml4')
        .click();
        cy.wait(3000);

        cy.get('#disneyid-iframe')
        .iframeLoaded()
        .its('document')
        .getInDocument("[type='email']")
        .type('',{force: true})

        cy.get('#disneyid-iframe')
        .iframeLoaded()
        .its('document')
        .getInDocument("[type='password']")
        .type('',{force: true})

        cy.get('#disneyid-iframe')
        .iframeLoaded()
        .its('document')
        .getInDocument(".btn.btn-primary.btn-submit")
        .click({force: true})

        cy.wait(3000);

        cy.visit('https://fantasy.espn.com/basketball/league/settings?leagueId=292959&view=transactions');

        cy.wait(3000);

        cy.get('.waiver-process-days').find('select').find(':selected').invoke('text').then((val1) => {
            if (val1 === '4 AM') {
                cy.get('.waiver-process-days').find('select').select('5');
            } else if (val1 === '5 AM') {
                cy.get('.waiver-process-days').find('select').select('6');
            } else if (val1 === '6 AM') {
                cy.get('.waiver-process-days').find('select').select('7');
            } else if (val1 === '7 AM') {
                cy.get('.waiver-process-days').find('select').select('8');
            } else if (val1 === '8 AM') {
                cy.get('.waiver-process-days').find('select').select('9');
            } else if (val1 === '9 AM') {
                cy.get('.waiver-process-days').find('select').select('10');
            } else if (val1 === '10 AM') {
                cy.get('.waiver-process-days').find('select').select('11');
            } else if (val1 === '11 AM') {
                cy.get('.waiver-process-days').find('select').select('12');
            } else if (val1 === '12 PM') {
                cy.get('.waiver-process-days').find('select').select('13');
            } else if (val1 === '1 PM') {
                cy.get('.waiver-process-days').find('select').select('14');
            } else if (val1 === '2 PM') {
                cy.get('.waiver-process-days').find('select').select('15');
            } else if (val1 === '3 PM') {
                cy.get('.waiver-process-days').find('select').select('4');
            }
        })
        cy.wait(3000);

        cy.get('.save--button').click();
    });
})