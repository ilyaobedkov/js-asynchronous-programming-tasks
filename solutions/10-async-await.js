import fsp from 'fs/promises';
export const exchange = async (filepath1, filepath2) => {
  const data1 = await fsp.readFile(filepath1, 'utf8'); // Читаем первый файл
  const data2 = await fsp.readFile(filepath2, 'utf8'); // Читаем второй файл
  await fsp.writeFile(filepath1, data2, 'utf8'); // Записываем данные второго в первый
  await fsp.writeFile(filepath2, data1, 'utf8'); // Записываем данные первого во второй
};
