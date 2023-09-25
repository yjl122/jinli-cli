#! /usr/bin/env node

const path = require('path');
const program = require('commander');
const package = require('../package.json');
const createProject = require('./createProject.js');
const createTemplate = require('./createTemplate.js');
const download = require('./download');

// 定义当前版本
program.version(`v${package.version}`);

program.command('create [projectName]') // projectName] 可选，<projectName>必选
    .option('-t, --template <template>, 模版名称')
    .option("-f, --force", "覆盖当前已有的文件")
    .description('创建模版').action(async(projectName, options)=> {
        // 生成文件夹
        projectName = await createProject({...options, projectName});
        // 生成模版文件
        const proTemplate = await createTemplate(options);
        // 下载模版
        download({proTemplate, projectName});
})
program.parse(process.argv);