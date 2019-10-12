# vue-plugin-template

![](https://img.shields.io/npm/dt/@edwardorz/vue-plugin-template?style=flat-square)
![](https://img.shields.io/github/license/edwardorz/vue-plugin-template.svg?style=flat-square)
![](https://img.shields.io/npm/v/@edwardorz/vue-plugin-template.svg?style=flat-square)

> A template for generating vue plugin use Vue CLI 3 .


## Usage

```sh
# init
$ vue init @edwardorz/vue-plugin-template my-lovely-plugin
$ cd my-lovely-plugin

# dev
$ yarn serve

# build
$ yarn build

# build with report
$ yarn build:report

# generate docs
yarn docs
```


## Features

+ 使用 `vue-cli-service build --target lib` 进行编译
+ 支持多种vue plugin形式: SFC/实例方法/全局属性、方法/directives/mixins
+ generate docs
+ less + pug


## Change Logs

+ 2019-01-22 useBuiltIns设置成false来进一步压缩编译包的大小，具体请参考Vue-CLI [#ISSUE199](https://github.com/vuejs/vue-cli/issues/1919)


## License

This is a open-source software licensed under the [MIT license](http://opensource.org/licenses/MIT)
