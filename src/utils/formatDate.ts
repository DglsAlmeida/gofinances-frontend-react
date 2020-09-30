const formatDate = (date: Date): string => {
  const formattedDate = date
    .toString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('/');

  return formattedDate;
};

export default formatDate;
