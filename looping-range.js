function range(start,end,step){
  let array = [start];
  if((start||end||step) === undefined ||start > end || step <= 0){
    return [];
  }else{
    for(let num=start;num<end;num+=step){
     start += step;
     array.push(start);
    }
   return array;
 }
}

console.log(range(-9,3,3));
