
//Main function
function main(){
  buttonCreate();
}

//Status of the function button true=on false-off
var fn = false;

//List of numbers stored in memory
var nums=[];

//Total = the output
var total=0;

//Create the buttons
function buttonCreate(){
  
  //Create the number buttons through the loop
  for(var i=0 ; i<10 ; i++){
    //calls the buttonOn function since you cannot create an onEvent in a loop
    buttonOn(i);
  }
  
  //Creates the function button
  //When the function button is called fn is set to true
  onEvent("functionButton", "click", function( ) {
    fn = true;
  });
  
  //creates the addButton that substitutes for both addition and subtraction
  onEvent("addButton", "click", function( ) {
    //if fn = true than the addButton will subsitute as a subtraction
    if(fn==true){
      nums+="-";
      fn = false;
    //if fn = true than the addButton will subsitute as an addition
    }else{
      setText("display","+");
      nums+="+";
      setText("display",nums);
    }
  });
  
  //creates the timesButton that substitutes for both addition and subtraction
  onEvent("timesButton", "click", function( ) {
    //if fn = true than the timesButton will subsitute as multiplication
    if(fn==true){
      nums+="/";
      fn = false;
      setText("display",nums);
    //if fn = true than the timesButton will subsitute as division
    }else{
      nums+="*";
      setText("display",nums);
    }
  });
  
  //creates the equalButton that displays the result of the inputed equation
  onEvent("equalButton", "click", function( ) {
    total=eval(nums);
    setText("display",nums+'\n'+"="+total);
    clear();
  });
  
  //creates the clearButton
  onEvent("clearButton", "click", function( ) {
    
    //if function=true than call the clear function else call the del function
    if(fn==true){
      clear();
    }else{
      del();
    }
  });
  
}


function buttonOn(i){
  onEvent("button"+i, "click", function( ) {
    //turn the elements from integer to string
    nums+=i.toString();
    setText("display",nums);
  });
}

//creats the delete button
function del(){
  //deletes the last element in the list
  nums=nums.slice(0,nums.length-1);
  setText("display",nums);
}

//creates the clear button
function clear(){
  //deletes all the elements in the list
  setText("display","");
  nums=[];
}

main();



