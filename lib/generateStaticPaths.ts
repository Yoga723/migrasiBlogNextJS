export const generatePaths = (data: any[], key: string) => {
    return data.map((item) => ({
      [key]: item.id.toString(),
    }));
  };
  