export default function randomImage(prop:{}) {
  const keys = Object.keys(prop);
  const randomNumber = Math.floor(Math.random() * keys.length);


  return  keys[randomNumber];
}