export function moveArrayItem(arr: any[], from: number, to: number) {
  if (from < 0 || from > arr.length - 1) return;
  if (to < 0 || to > arr.length - 1) return;

  arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
}
