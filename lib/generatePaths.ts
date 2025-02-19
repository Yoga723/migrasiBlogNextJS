export const generatePaths = (data: any[], key: string) => {
  return data.map((item, index) => {
    // Pastikan item memiliki properti yang diharapkan
    if (!item[key]) {
      throw new Error(`Item pada indeks ${index} tidak memiliki properti "${key}": ${JSON.stringify(item)}`);
    }
    // Karena idArticle sudah string, cukup return nilainya
    return { [key]: item[key] };
  });
};
