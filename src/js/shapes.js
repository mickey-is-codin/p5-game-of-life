export const toShape1 = ([x, y]) => {
  return [
    [x, y],
    [x + 1, y],
    [x + 2, y],
    [x + 1, y + 1],
  ];
};

export const toShape2 = ([x, y]) => {
  return [
    [x + 1, y],
    [x + 2, y],
    [x + 3, y],
    [x + 4, y + 1],
    [x + 4, y + 2],
    [x + 4, y + 3],
    [x + 3, y + 4],
    [x + 2, y + 4],
    [x + 1, y + 4],
    [x, y + 3],
    [x, y + 2],
    [x, y + 1],
  ];
};

export const toShape3 = ([x, y]) => {
  return [
    [x + 1, y],
    [x + 2, y],
    [x + 3, y + 1],
    [x + 3, y + 2],
    [x + 2, y + 3],
    [x + 1, y + 3],
    [x, y + 2],
    [x, y + 1],
  ];
};