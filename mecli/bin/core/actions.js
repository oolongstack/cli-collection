const { promisify } = require("util");
const download = promisify(require("download-git-repo"));

const { VUE_REPO } = require("../config/repo");
const { execCommand } = require("../utils/exec-command");

async function createProjectAction(project) {
  // 1. 下载模板 https://github.com/coderwhy/vue3_template.git
  try {
    await download(VUE_REPO, project, { clone: true });

    console.log(`cd ${project}`);
    console.log("npm install");
    console.log("npm run dev");

    // 启动子进程 做其他操作
    const platform = process.platform;
    const commandName = platform == "win32" ? "npm.cmd" : "npm";
    await execCommand(commandName, ["install"], {
      cwd: `./${project}`,
    });
    await execCommand(commandName, ["run", "dev"], {
      cwd: `./${project}`,
    });
  } catch (error) {
    console.error("github连接失败，请稍后重试～");
  }
}

module.exports = {
  createProjectAction,
};
