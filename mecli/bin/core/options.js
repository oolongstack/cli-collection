const package = require("../../package.json");

function helpOptions(program) {
  // 处理 --version
  program.version(package.version, "--version -v");

  // 其他的option
  program.option("-w", "a description for -w");
  program.option(
    "-d --dest <dest>",
    "a destination folder, for example: -d src/components"
  );
}

module.exports = helpOptions;
