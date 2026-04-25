let current = "login";
let savedData = {};

function go(id){
  document.getElementById(current).classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
  current = id;
}

function backAction(){
  let confirmExit = confirm("Confirm to exit?");
  if(!confirmExit) return;

  let saveChoice = confirm("OK = Save & Exit\nCancel = Don't Save");

  if(saveChoice){
    save();
    go("login");
  } else {
    savedData = {};
    go("login");
  }
}

function save(){
  savedData.name = document.getElementById("name").value;
  savedData.type = document.getElementById("type").value;
  alert("Saved Successfully");
}

function resume(){
  if(savedData.name){
    go("form");
    document.getElementById("name").value = savedData.name;
    document.getElementById("type").value = savedData.type;
    toggleFields();
  } else {
    alert("No saved data found");
  }
}

function pay(){
  go("success");
}

function toggleFields(){
  let type = document.getElementById("type").value;

  document.getElementById("studentFields").classList.add("hidden");
  document.getElementById("employeeFields").classList.add("hidden");

  if(type === "Student"){
    document.getElementById("studentFields").classList.remove("hidden");
  }
  if(type === "Employee"){
    document.getElementById("employeeFields").classList.remove("hidden");
  }
}

function onlyLetters(input){
  input.value = input.value.replace(/[^a-zA-Z\s]/g,'');
}

function validateSignup(){

  let u = document.getElementById("suser").value;
  let p = document.getElementById("spass").value;

  let userRegex = /^[a-zA-Z0-9]+$/;
  let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(!userRegex.test(u)){
    alert("Username must contain only letters and numbers");
    return;
  }

  if(!passRegex.test(p)){
    alert("Password must be 8+ chars with letter, number & symbol");
    return;
  }

  alert("Signup Successful");
  go("login");
}