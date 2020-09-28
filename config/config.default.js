/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601000233539_3831';

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  // 添加 news 的配置项
  // config.news = {
  //   pageSize: 5,
  //   serverUrl: 'https://hacker-news.firebaseio.com/v0',
  // };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'liuxiangdong',
      database: 'egg',
    },
    app: true,   // 是否挂载在全局下
    agent: false,// 是否挂载到代理下
  }

  config.sequelize = {
    dialect: 'mysql', // 数据源
    host: '127.0.0.1',
    port: '3306',
    root: 'root',
    password: 'liuxiangdong',
    database: 'egg', 
    define: {
      timestamps: false,  // 是否自动添加时间戳createAt，updateAt
      freezeTableName: true, // 默认false修改表名为复数，true不修改表名，与数据库表名同步
    }
  };

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};


