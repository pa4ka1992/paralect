export const getIdsParam = (ids: number[]) => {
  return ids.reduce((param, id, i) => {
    return param.concat(`ids[${i}]=${id}&`);
  }, '');
};
