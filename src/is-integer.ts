export function isInteger(value: any): boolean {
  const int = parseInt(value, 10);
  return !isNaN(int) && int === parseFloat(value);
}