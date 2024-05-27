export function taskFirst() {
  const task = 'I really like const';
  return task;
}

export function getLast() {
  return ' it is fine';
}

export function taskNext() {
  let combination = 'Also come over.';
  combination += getLast();
  return combination;
}
