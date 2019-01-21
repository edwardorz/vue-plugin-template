const path = require('path')

const {
  sortDependencies,
  installDependencies,
  runLintFix,
  printMessage,
} = require('./utils')

function kebabToCamel (name) {
  name = name.replace(/\-(\w)/g, (match, p1) => p1.toUpperCase())
  name = name.replace(/^\w/, (match) => match.toUpperCase())
  return name
}

module.exports = {
  helpers: {
    if_eq (v1, v2, options) {
      if (v1 == v2) {
        return options.fn(this)
      }

      return options.inverse(this)
    }
  },
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '插件名称[Plugin Name]'
    },
    library: {
      type: 'string',
      required: true,
      message: '库名称[Library name】',
      default (answers) {
        return answers.name ? kebabToCamel(answers.name) : null
      }
    },
    description: {
      type: 'string',
      required: true,
      message: '描述[Description]',
      default: 'A Vue.js Plugin'
    },
    version: {
      type: 'string',
      required: false,
      message: '当前版本号[Current Version]',
      default: '0.0.1'
    },
    author: {
      type: 'string',
      message: '作者[Author]',
    },
    type: {
      type: 'list',
      message: '插件类型[Plugin Type]',
      choices: [
        {
          name: '组件[Component]',
          value: 'component',
          short: 'component'
        },
        {
          name: '实例方法[Instance Method]',
          value: 'instance',
          short: 'instance'
        },
        {
          name: '全局资源[Directive]',
          value: 'directive',
          short: 'directive'
        },
        {
          name: '注入组件[Mixin]',
          value: 'mixin',
          short: 'mixin'
        },
        {
          name: '全局方法或者属性[Global Method or Prop]',
          value: 'global',
          short: 'global'
        }
      ]
    }
  },
  complete: function(data, { chalk }) {
    const color = chalk.green

    sortDependencies(data, color)

    const cwd = path.join(process.cwd(), data.inPlace ? '' : data.destDirName)

    installDependencies(cwd, 'yarn', color)
      .then(() => {
        return runLintFix(cwd, data, color)
      })
      .then(() => {
        printMessage(data, color)
      })
      .catch(e => {
        console.log(chalk.red('Error:'), e)
      })
  }
}
