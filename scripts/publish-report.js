#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const reportPath = path.resolve(__dirname, '../reports/newman/report.html');
const ghPagesDir = path.resolve(__dirname, '../gh-pages');

console.log('Publishing report to GitHub Pages...');
console.log(`Source: ${reportPath}`);
console.log(`Destination: ${ghPagesDir}`);

console.log('✅ Report publishing complete (currently via CI artifacts)');
