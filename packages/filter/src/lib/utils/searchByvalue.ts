export function searchByValue(items: string[], value: string) {
  return items.filter((item) => item.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
}
