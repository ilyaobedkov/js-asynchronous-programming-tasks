import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';
export const getDirectorySize = (dirPath, callback) => {
  fs.readdir(dirPath, (err, files) => { // Читаем содержимое директории
    if (err) {
      callback(err); // Передаем ошибку чтения
      return;
    }
    const filePaths = files.map(file => path.join(dirPath, file)); // Формируем полные пути к файлам
    async.map(filePaths, fs.stat, (err, stats) => { // Параллельно получаем информацию о каждом файле
      if (err) {
        callback(err); // Передаем ошибку
        return;
      }
      const sizes = stats.filter(stat => stat.isFile()).map(stat => stat.size); // Берем размеры только файлов (исключаем поддиректории)
      const totalSize = _.sumBy(sizes); // Суммируем размеры
      callback(null, totalSize); // Передаем результат
    });
  });
};
