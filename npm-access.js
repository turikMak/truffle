const { execSync } = require("child_process");

const getPkgPermissions = userOrOrg => {
  const bufferResponse = execSync(`npm access ls-packages ${userOrOrg}`);
