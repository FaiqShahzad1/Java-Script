
//  const alertfunction = () => {

//     const question1 = ("What is your name?", "name");
//     if (question1) {
//       document.write(`my name is ${question1}`)
//     }
//    console.log(alertfunction) 
// }

 
//  var question3 ="What i your favourite food";
//  prompt (question3,"Food" )

//  var question4 ="How old are you?";
//  var spec = prompt (question4,"Your age?" )

//  var question5 ="How old are you?";
//  var spec = prompt (question5,"Your age?" )

const alertFunction = () => {
  let name = prompt("what is your name", "name");
  let father = prompt("What is your father name","Father Name")
  let mother = prompt("What is your mother name" , "Mother name")
  let brother = prompt("how many brother you have" , "Brothers") 
  let sister = prompt("How many sister you have" , "Sisters ")
  let age = prompt("what is your age?", "You have to older than 18");

  if (age > 18 && age < 70 ) {
     document.write("My " , "name " , "is   " ,name  )
  }
  
  if (age > 18 && age < 70 ) {
   document.write("<br/>  MY father name is " , father ) 
  }
  if (age > 18 && age < 70 ) {
      document.write(" <br/> My mother  name is  " , mother)
  }
  if (age > 18 && age < 70 ) {
      document.write(" <br/> I have ", brother ," brothers <br/>"  )
  }

  if (age > 18 && age < 70 ) {
     document.write(" I have ", sister ," sisters <br/>")
  }

  if (age > 18 && age < 70 ) {
    return  document.write("I am ", age ," Years old <br/> " );
  }
  


 
 
};