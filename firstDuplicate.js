function firstDuplicate(arrNum){
  var seen=[]
  for(var i=0; i<arrNum.length; i++){
    //if element is already in seen, it's a duplicate (return duplicate), 
    //if not, then it's brand new to me, and I want to push it into seen

    if(seen.includes(arrNum[i])){
      return arrNum[i]
    }else seen.push(arrNum[i])
  }
}

console.log(firstDuplicate([5,3,2,1,4,7,6,3,2]))
