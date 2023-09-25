const gitClone = require('git-clone');
const ora = require('ora');
const path = require('path');

const download = ({proTemplate, projectName})=> {
    const loading = ora('正在下载模版...');
    //目标文件夹
    const dest = path.join(process.cwd(), projectName);
    loading.start();
    gitClone(proTemplate, dest, null, (err)=> {
        if (err) {
            loading.fail('创建模版失败：' + err.message) // 失败loading
        } else {
            loading.succeed('创建模版成功!') // 成功loading
        }
    });
}

module.exports = download;