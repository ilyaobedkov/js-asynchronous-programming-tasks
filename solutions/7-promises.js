import fsp from 'fs/promises';
export const reverse = async (filepath) => {
  const data = await fsp.readFile(filepath, 'utf8');
  const lines = data.split('\n'); // Разбиваем на строки
  const lastLineEmpty = lines[lines.length - 1] === ''; // Проверяем, была ли последняя строка пустой
  if (lastLineEmpty) lines.pop(); // Удаляем последнюю пустую строку, если была
  lines.reverse(); // Меняем порядок строк
  let reversedData = lines.join('\n');
  if (lastLineEmpty) reversedData += '\n'; // Добавляем перенос в конце, если он был
  await fsp.writeFile(filepath, reversedData, 'utf8');
};
