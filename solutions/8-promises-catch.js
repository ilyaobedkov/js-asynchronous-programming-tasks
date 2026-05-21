import fsp from 'fs/promises';
export const touch = async (filepath) => {
  try {
    await fsp.access(filepath); // Проверяем существование файла
  } catch (err) {
    if (err.code === 'ENOENT') { // Файл не существует
      await fsp.writeFile(filepath, ''); // Создаем пустой файл
    } else {
      throw err; // Другая ошибка - идём дальше
    }
  }
};
