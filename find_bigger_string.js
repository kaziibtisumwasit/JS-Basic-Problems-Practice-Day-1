const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];


const checkFan=(array)=>{
      let bigFan=array[0];//assume the first element is biggest
      for(let i=0;i<array.length;i++){
            let element=array[i];
            if(element>bigFan){
            bigFan=element;
            }
      }
     return bigFan;
};


console.log(checkFan(friends));