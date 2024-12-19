const ar=[12, 5, 19, 1, 14, 6, 3, 20, 8, 7, 18, 10, 16, 2, 4, 15, 13, 17, 9, 11];

const result=ar.sort((a,b)=>a-b);
//in sort function we use arrow function so 

for(let i=0;i<result.length;i++){
      console.log(result[i])
}