const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];
const metric = 'redness';
console.log(vegetables[1][metric]);
/*function to dtermine the name of the person
 who submited of the highest score in redness or plumpness*/
const judgeVegetable = function(vegetables,metric){
  if(vegetables[0][metric] > vegetables[1][metric] ){
    if(vegetables[0][metric] > vegetables[2][metric]){
    return vegetables[0].submitter;
    }else{
       return vegetables[2].submitter;
    }
  }else if(vegetables[1][metric] > vegetables[0][metric]){
    if(vegetables[1][metric] > vegetables[2][metric]){
      return vegetables[1].submitter;
    }else{
      return vegetables[2].submitter;
    }
  }
};

console.log(judgeVegetable(vegetables, metric));

