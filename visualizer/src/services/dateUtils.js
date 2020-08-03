export function dateTimeString(timestamp) {
  const date = new Date(timestamp);

  return `${date.getDate()}-${(date.getMonth() + 1 + '').padStart(2, '0')}-${(
    date.getFullYear() + ''
  ).padStart(4, '0')} ${date.toLocaleTimeString()}`;
}
