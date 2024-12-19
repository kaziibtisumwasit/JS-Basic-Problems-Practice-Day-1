//inputs

let m1 = [1000, 2000, 3000], m2 = [1000, 2000, 2500], m3 = [900, 2700, 3400], m4 = [10];
leavingCost = 1000;


//function to calculate monthly savings
function monthlySavings(array, cost) {
      if (!Array.isArray(array)  && typeof cost !='number') {
            return "Invalid Data";
      }


      for (let i = 0; i < array.length; i++) {
            if (array[i] >= 3000) {

                  //find after percentage=main_value*percentage_value/100
                  tex = array[i]*20 / 100;//20% tex
                  array[i] = array[i] - tex;
            }
      }
      let sum = 0;
      //array er upor loop choltese,array er element ghula element variable e ashtese 
      array.forEach(element => {
            sum += element;
      });

      if (sum < cost) {
            return  "Earn More";
      }
      return `Total Savings : ${sum - cost}`;

}

//call function and print output
console.log(monthlySavings(m1,leavingCost));