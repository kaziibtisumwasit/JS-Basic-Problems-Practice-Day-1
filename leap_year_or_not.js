function isleapYear(year){
      if(year%4===0){

            //check century year 
            //2000 1900 ect that's are century year 
            //somtimes in century year is an leap year
            //so need to find century year is leap year need to devied 100 & 400
            if(year%100===0){
                 if(year%400===0)
                 {
                  return "It's Leap Year !";
                 }
            }
      }
      return "It's Not Leap Year !";
}


const input_year=2024;

console.log(isleapYear(input_year));