const sort = (type) => {
  if (a[type] === b[type]) return 0;
  return a[type] > b[type] ? 1 : -1;
} 

export default sort;