//validation C#de for inputs
//var email = document.forms['form']['email'];
//var email = document.forms['form']['password'];
//var email_error = document.getElementById('email_error');
//var pass_error = document.getElementById('pass_error');

//function validated(){
  //  if (email.value.length < 9){
   //     email.style.border = "1px solid red";
     //   email_error.style.display = "block"
      //  email.focus();
        //return false;
    //}
//}
//const name = document.getElementById('name');
//const password = document.getElementById('password');
//const form = document.getElementById('form');

//form

function login(){
  var user = document.loginform.user_name.value;
  var pass = document.loginform.pass_word.value;

    if( user =="" ||pass== ""){
      alert("sorry...please enter correct username and password");

    }else{
      if((user == "Bakang") && pass == "12345678"){
        document.loginform.submit();
      }else{
        alert("Please enter correct credentials");
      }
    }

}
