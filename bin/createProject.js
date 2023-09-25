const inquirer = require('inquirer');
const fs = require('fs-extra'); 
const path = require('path');

const createProject = async (obj)=> {
    const {projectName, force} = obj;
    if(projectName) {
        const dest = path.join(process.cwd(), projectName);
        if(fs.existsSync(dest)) {
            if(force){
                fs.removeSync(dest);
            }else{
                const { force } = await inquirer.prompt({
                    type: 'confirm',
                    name: 'force',
                    message: '目录已存在，是否覆盖？',
                })
                // 如果覆盖就删除文件夹继续往下执行，否的话就退出进程
                force ? fs.removeSync(dest) : process.exit(1)
            }
        }
    }else{
        const { name } = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: '请输入项目名称：'
        });
        projectName = name;
    }
    return projectName;
}
module.exports = createProject;