const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let bigger=numbers[0];
for(let i=1;i<numbers.length;i++){
      if(numbers[i]>bigger){
            bigger=numbers[i];
      }
};
console.log(bigger);