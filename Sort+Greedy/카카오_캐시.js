function solution(cacheSize, cities) {
  const citiesCopy = cities.map((city) => city.toUpperCase());
  const cashes = [];
  let timer = 0;

  for (const city of citiesCopy) {
    if (cashes.includes(city)) {
      const idx = cashes.findIndex((cash) => cash === city);
      cashes.splice(idx, 1);
      timer += 1;
    } else {
      timer += 5;
    }
    cashes.push(city);

    if (cashes.length > cacheSize) {
      cashes.shift();
    }
  }

  return timer;
}
