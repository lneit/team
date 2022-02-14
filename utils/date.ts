export const humanReadableDate = (date: string | Date) => {
  let dateDate: Date = typeof date === 'string' ? new Date(date) : date;
  return dateDate.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
