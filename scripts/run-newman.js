#!/usr/bin/env node

const newman = require('newman');
const path = require('path');
const fs = require('fs');

const config = {
    collection: path.resolve(__dirname, '../postman/collections/EnergiDataService.postman_collection.json'),
    environment: path.resolve(__dirname, '../postman/environments/energi.test.postman_environment.json'),
    reporters: ['cli', 'htmlextra'],
    reporterHtmlextraExport: path.resolve(__dirname, '../reports/newman/report.html'),
    reporterHtmlextraTitle: 'Energi Data Service API Test Report',
    reporterHtmlextraShowOnlyFails: false,
    reporterHtmlextraLogs: true,
    reporterHtmlextraShowEnvironmentData: true,
    timeoutRequest: 30000,
    insecure: false,
    bail: false
};

const reportsDir = path.resolve(__dirname, '../reports/newman');
if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
}

console.log('===========================================');
console.log('Energi API Test Framework - Newman Runner');
console.log('===========================================\n');
console.log(`Collection: ${config.collection}`);
console.log(`Environment: ${config.environment}`);
console.log(`Report: ${config.reporterHtmlextraExport}\n`);

newman.run(config, function(err, summary) {
    if (err) {
        console.error('Newman run failed:', err);
        process.exit(1);
    }

    console.log('\n===========================================');
    console.log('Test Execution Summary');
    console.log('===========================================');
    console.log(`Total Requests: ${summary.run.stats.requests.total}`);
    console.log(`Passed: ${summary.run.stats.requests.total - summary.run.stats.requests.failed}`);
    console.log(`Failed: ${summary.run.stats.requests.failed}`);
    console.log(`Total Assertions: ${summary.run.stats.assertions.total}`);
    console.log(`Passed Assertions: ${summary.run.stats.assertions.total - summary.run.stats.assertions.failed}`);
    console.log(`Failed Assertions: ${summary.run.stats.assertions.failed}`);
    console.log(`Average Response Time: ${summary.run.timings.responseAverage.toFixed(2)}ms`);
    console.log('===========================================\n');

    if (summary.run.stats.assertions.failed > 0 || summary.run.stats.requests.failed > 0) {
        console.error('❌ Tests failed. See report for details.');
        process.exit(1);
    } else {
        console.log('✅ All tests passed!');
        process.exit(0);
    }
});
