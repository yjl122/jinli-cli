const templatesJson = require('./templateJson.js');

const createTemplate = async({template})=> {
    let pro = templatesJson.find((r)=> r.name === template);
    let proTemplate = pro ? pro.value : null;
    if(!proTemplate) {
            const { template } = await inquirer.prompt({
            type: 'list',
            name: 'template',
            message: '请选择模版：',
            choices: templatesJson // 模版列表
        })
        proTemplate = template;
    }
    return proTemplate;
}

module.exports = createTemplate;