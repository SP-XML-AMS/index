const fs = require('fs');

const repoFullName = process.env.REPO_NAME; // "SP-XML-AMS/ams-wrapper"
const tagName = process.env.TAG_NAME;       // "v0.0.1"

console.log(`${repoFullName} with ${tagName}`);

// const repoName = repoFullName.split('/')[1];
// const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
// const indexPath = 'index.json';

// // Читаем существующий index.json или создаем новый
// let index = { packages: {} };
// if (fs.existsSync(indexPath)) {
//   index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
// }

// // Убеждаемся, что объект для данного репозитория существует
// if (!index.packages[repoName]) {
//   index.packages[repoName] = {};
// }

// // Добавляем/обновляем информацию о версии
// index.packages[repoName][tagName] = {
//   name: repoName,
//   version: tagName,
//   ...config // добавляем все поля из config.json
// };

// // Сохраняем обновленный index.json
// fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));