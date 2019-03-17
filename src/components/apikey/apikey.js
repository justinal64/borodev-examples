export const randomApiKey = Math.floor(Math.random() * 100);

export function Person(first, last, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = Math.floor(Math.random() * 100);
  this.eyeColor = eye;
}
