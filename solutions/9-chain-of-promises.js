import fsp from 'fs/promises';
export const getTypes = (paths) => {
  const promises = paths.map((path) =>
    fsp.stat(path)
      .then((stats) => stats.isDirectory() ? 'directory' : 'file') // Определяем тип
      .catch(() => null) // При ошибке возвращаем null
  );
  return Promise.all(promises); // Ждем выполнения всех промисов
};
