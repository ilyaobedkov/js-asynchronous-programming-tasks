import fs from 'fs';
export default function write(filepath, data, callback) {
  fs.writeFile(filepath, data, 'utf8', (err) => { // Асинхронная запись в файл
    if (err) {
      console.error(err); // Вывод ошибки в консоль
      return;
    }
    callback(); // Вызов колбэка после успешной записи
  });
}
