import fs from 'fs';
export const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (err1, stats1) => { // Получаем информацию о первом файле
    if (err1) {
      callback(err1); // Передаем ошибку в колбэк
      return;
    }
    fs.stat(filepath2, (err2, stats2) => { // Получаем информацию о втором файле
      if (err2) {
        callback(err2); // Передаем ошибку в колбэк
        return;
      }
      const result = Math.sign(stats1.size - stats2.size); // Сравниваем размеры: 1, 0 или -1
      callback(null, result); // Передаем результат в колбэк (первый аргумент - ошибка)
    });
  });
};
