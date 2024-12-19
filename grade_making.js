const result=60;


if(result<0 || result >100){
      console.log("Invalid Input")
}
else if(result>= 0 && result<=59){
      console.log("Fail!");
}

else if(result>=60 && result <=64){
      console.log("D");
}

else if(result>=65 && result<=69){
      console.log("D+");
}

else if(result>=70 && result<=74){
      console.log("C")
}
else if(result >= 75 && result<=79){
      console.log("C+")
}
else if(result>=80 && result<=84){
      console.log("B")
}

else if(result>=85 && result<=89){
      console.log("B+")
}

else if(result >=90 && result<= 92){
      console.log("A-")
}

else if(result>=93 && result <= 100){
      console.log("A")
}

