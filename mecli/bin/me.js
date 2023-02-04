#!/usr/bin/env node
const { program } = require("commander");
const { createProjectAction } = require("./core/actions");
const helpOptions = require("./core/options");
const cliName = "me";
// 1. 注册options
helpOptions(program);

// 2. 注册command

program
  .command("create <project_name> [...others]")
  .description(
    `create a vue project into a folder, for example: ${cliName} create vue_demo`
  )
  .action(createProjectAction);

program.parse(process.arv);
