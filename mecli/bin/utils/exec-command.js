const { spawn } = require("child_process");
function execCommand(...args) {
  return new Promise((resolve) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
    childProcess.on("close", () => {
      resolve();
    });
  });
}

module.exports = {
  execCommand,
};
