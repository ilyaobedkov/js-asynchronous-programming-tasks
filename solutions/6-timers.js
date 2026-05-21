import fs from 'fs';
export default function watch(filepath, interval, callback) {
  let lastCheckTime = Date.now(); // Запоминаем время начала отслеживания
  let lastModTime = null; // Время последнего изменения файла
  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId); // Останавливаем таймер при ошибке
        callback(err); // Вызываем колбэк с ошибкой
        return;
      }
      const currentModTime = stats.mtimeMs; // Получаем время последнего изменения файла
      if (lastModTime === null) {
        lastModTime = currentModTime; // Первая проверка - запоминаем время
      } else if (currentModTime > lastModTime) {
        lastModTime = currentModTime; // Обновляем время изменения
        callback(null); // Вызываем колбэк без ошибки (файл изменен)
      }
    });
  }, interval);
  return timerId; // Возвращаем идентификатор таймера для возможности остановки
}
