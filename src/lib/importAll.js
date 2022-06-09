export default function importAll(r) {
  const images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}
