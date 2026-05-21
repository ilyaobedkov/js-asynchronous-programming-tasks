import fs from 'fs';
export const move = (source, destination, callback) => {
  fs.readFile(source, 'utf8', (err, data) => { // Читаем исходный файл
    if (err) {
      callback(err); // Передаем ошибку чтения
      return;
    }
    fs.writeFile(destination, data, 'utf8', (err) => { // Записываем данные в новый файл
      if (err) {
        callback(err); // Передаем ошибку записи
        return;
      }
      fs.unlink(source, (err) => { // Удаляем исходный файл
        if (err) {
          callback(err); // Передаем ошибку удаления
          return;
        }
        callback(null); // Успешное завершение (ошибки нет)
      });
    });
  });
};
