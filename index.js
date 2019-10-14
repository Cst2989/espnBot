const cron = require("node-cron");
let shell = require("shelljs");

cron.schedule("0 30 9-19 * * *", function() {
    console.log("---------------------");
    console.log("Running Cron Job");
    if (shell.exec("npm run cy:run -- --spec 'cypress/integration/change_waiver_hour.js'").code !== 0) {
        shell.exit(1);
    }
    else{
        shell.echo("Waiver was changed");
    }
});