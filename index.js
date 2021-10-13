// Q1
function footballPoints(wins,draws,losses){
    var points = wins*3 + draws*1 + losses*0;
    return points;
  }
  
  footballPoints(3, 4, 2)
  footballPoints(5, 0, 2)
  footballPoints(0, 0, 2)
  // Q2
  function calculateFuel(distance){
    var fuel =(distance*5)
    if (fuel< 20){
      return 20;
    }
    return fuel;
    
    
  }
  calculateFuel(15)
  calculateFuel(20)
  calculateFuel(39)
  //Q3
  function acceptIntoCinema(age,isSupervised){
   if(age>15 || isSupervised==true){
     return true;
   }
  return false;
  }
  
  acceptIntoCinema(12, true)
  acceptIntoCinema(13, false)
  acceptIntoCinema(16, false)
  //Q4
  function findIndex(words,letters){
    var number = words.indexOf(letters);
    return number;
  }
  
  findIndex(["iPhone", "iPad", "iMac", "rwanda"], "rwanda")
  
  findIndex(["hi", "zatec", "Rwanda", "training"], "Rwanda") 
  findIndex(["iPhone", "iPad","iMac", "MacBook Air"], "iPad") ;
  findIndex(["html", "css", "javascript","javascript"], "css")  
  findIndex(["toyota", "mercedes benz", "volkswagen", "maclaren"], "toyota")
  
  
  // Q5
  function serveDrinks(age,isOnBreak){
    if(age>18 && isOnBreak == false){
      return true;
    }
    return false
  }
  
  serveDrinks(17, true)
  serveDrinks(19, false)
  serveDrinks(30, true)
  //Q6
  
  function sumOfNumbers(a,b){
    var sum = a+b;
    console.log(sum);
    
  }
  
  function checkNumbers(input){
    if (isNaN(input)){
        return  NaN;
        }
    if (input>0 && input <=15){
      return true;
    }
    return false;
  }
  checkNumbers(20)
  checkNumbers(13)
  checkNumbers("why")
  
  //Q7
  
  function multiplesOf(){
    const multiples =[];
    for (let i=0 ; i<=40; i++ ){
      if (i%3==0)
      console.log(i);
    }
        
  }
  multiplesOf();

   //Q8
  
   function typeOfNumber(){

    for(let i =0 ;i<=15;i++){
      if(i%2==0){
    console.log("The number is even.");
    }
      else{
        console.log("The number is odd")
      }
    }
  }
  
  typeOfNumber()
  
  //Q9
  function myAge(presentYear,BirthYear){
    const  ages=(presentYear-BirthYear) ;
    return ages;
  }
  
  myAge(2021,1996)
  
  //Q10
  
  const str = 'have fun';
  const str2 = str.charAt(0.).toUpperCase() + 'ave'  + " " + str.charAt(5).toUpperCase() +'un';
  console.log(str2 );
  
 
  
  