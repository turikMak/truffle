const { execSync } = require("child_process");

const getPkgPermissions = userOrOrg => {
  const bufferResponse = execSync(`npm access ls-packages ${userOrOrg}`);
  const stringResponse = bufferResponse.toString();
  return JSON.parse(stringResponse);
};

const getMonorepoPackages = () => {
  const pkgs = execSync('lerna ls')
    .toString()
    .split("\n")
    .filter(ln => !/^lerna/.test(ln));
  return new Set(pkgs);
}

const orgs = ["truffle"];

for (let org of orgs) {
  const permissions = getPkgPermissions(org);
