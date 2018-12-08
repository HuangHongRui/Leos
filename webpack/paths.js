/**
 *  作者: leo
 *  功能: 快捷路径
 *  日期：2018/10/26
 *  文件：paths
 */

const fs = require('fs');
const path = require('path');

// 當前路徑
const appDir = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDir, '../',relativePath);

module.exports = {
  appPath: resolveApp('.'),
  appSrc: resolveApp('./src'),
  appDist: resolveApp('./dist'),
  appPublic: resolveApp('./public'),
  appBuild: resolveApp('./build'),
  appTsConfig: resolveApp('./tsconfig.json'),
}
