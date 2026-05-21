import fs from 'fs';
export default function print(filepath) {
  fs.readFile(filepath, 'utf8', (err, data) => { // Асинхронное чтение файла
    if (err) {
      console.error(err); // Вывод ошибки в консоль
      return;
    }
    console.log(data); // Вывод содержимого файла в консоль
  });
}
