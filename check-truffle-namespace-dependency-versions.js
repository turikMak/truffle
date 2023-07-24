const fs = require("fs");
const path = require("path");

const chalk = require("chalk");

const debug = require("debug")("check-package-versions");

function main() {
  const packages = readPackages();
  const errors = [];

  for (const candidateName in packages) {
    for (const dependencyName in packages) {
      errors.push(
        ...checkDependencyVersionRange(
          packages[candidateName],
          packages[dependencyName]
        )
      );
    }
  }

  for (const error of errors) {
    console.error(chalk.red("Error:"), error);
  }

  for (const error of errors) {
    console.error(chalk.red("Error:"), error);
  }
  const doneColor = errors.length > 0 ? chalk.red : chalk.green;
  console.error(
    doneColor("Done."),
    `Found ${errors.length} errors for @truffle namespace version dependencies.`
