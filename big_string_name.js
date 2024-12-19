const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

const bigName=(array)=>{
      let big=array[0].length;//assume the 1st index name string size is big
      let name=array[0];
      for(let i=1;i<array.length;i++){
            let elements=array[i].length;

            if(big<elements){
                  big=elements;
                  name=array[i];
            }
      }
      return `Big name string is : ${name}\n&\nName Size : ${big}`;
}

console.log(bigName(friends));