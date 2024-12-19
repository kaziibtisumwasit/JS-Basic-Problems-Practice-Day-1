const a = [10, 20, 20, 30, 40, 50, 50];
//a array er upor loop chostese array er index & element ei items,in er mdhe ashtese
//a.indexOf function diye dekhtesi item ti a arrey te oi index e ache naki jodi oi index e thake tahole b arrey te add hocche
//jodi oi index e shate mil na thke false return korbe & a1 array te add ocche na

//indexOf function array er 0 index theke search calai 0 index theke function e dewa element prothome jeta mil pabe sheta return kore

const a1=a.filter((items,index)=>a.indexOf(items)===index);

console.log(...a1);