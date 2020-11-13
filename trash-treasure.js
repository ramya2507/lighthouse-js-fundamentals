//create a function called smartGarbage(trash, bins)
const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  const values = Object.values(bins);
  for(const key of keys){
    let index = 0;
    if(key === trash){
      index = keys.indexOf(key);
      values[index] += 1;
    }
  }
  bins.waste = values[0];
  bins.recycling = values[1];
  bins.compost = values[2];
  return bins;
};
  

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/*expected output{
  waste: 4,
  recycling: 3,
  compost: 5
}
 */