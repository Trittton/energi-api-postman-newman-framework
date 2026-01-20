# Energi Data Service API Testing Framework

[![API Tests](https://github.com/Trittton/energi-api-postman-newman-framework/actions/workflows/api-tests.yml/badge.svg)](https://github.com/Trittton/energi-api-postman-newman-framework/actions)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Newman](https://img.shields.io/badge/Newman-6.2.1-orange)](https://www.npmjs.com/package/newman)
[![Live Report](https://img.shields.io/badge/Report-Live-green)](https://trittton.github.io/energi-api-postman-newman-framework/report.html)

Production-grade API testing framework for the Danish Energi Data Service using **Postman + Newman**.

## 📊 Live Test Report

View the latest automated test results: [**Live Report →**](https://trittton.github.io/energi-api-postman-newman-framework/report.html)

*Reports auto-update on every main branch push*

---

## Overview

This framework validates two datasets from the [Energi Data Service API](https://api.energidataservice.dk/dataset/):
- **Elspotprices**: Electricity spot prices across Danish bidding zones (DK1, DK2, DE, NO2, SE3, SE4)
- **CO2Emis**: 5-minute CO2 emission data (DK1, DK2)

### Features
- Contract validation using JSON Schema
- Data-driven testing via CSV files
- Boundary, negative, and filter testing
- CI/CD integration with GitHub Actions
- Rich HTML reports with newman-reporter-htmlextra
- Environment-based configuration
- Modular collection design (DRY principles)

## 🎯 Test Metrics

- **20 Assertions** across 4 test requests
- **100% Pass Rate** on latest run
- **Response Time SLA**: < 5000ms
- **Automated Execution**: Daily at 6 AM UTC + on every PR
- **Coverage**: 2 datasets (Elspotprices, CO2Emis), 5 test scenarios

## 🛠 Technology Stack

- **Test Runner**: Newman 6.2.1
- **Reporter**: newman-reporter-htmlextra 1.23.1
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages
- **Validation**: JSON Schema Draft 07
- **Data-Driven**: CSV iteration

---
