// ---------------  SEARCH BAR  ---------------

const formSearch = document.getElementById("myFormIdSearch");

function searchValidate() {
	let errorSearch = 0;
	
	formSearch.classList.remove("is-invalid");

  let inputSearchBar = document.forms["mySearchForm"]["defaultForm-search"];
  
// Search
if(inputSearchBar.value.length < 3) {
	inputSearchBar.classList.add("is-invalid");
	document.getElementById("errorSearch").textContent = "Please insert at least 3 characters.";
	errorSearch ++;
} 

if (errorSearch > 0){
    return false;
    }else{
      return true;
  }

}

formSearch.addEventListener("blur", (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove("is-invalid");
    // searchBarValidate();
}, true);



// ---------------  LOGIN  ---------------

const formLogin = document.getElementById("myFormIdLogin");

function loginValidate() {
	let errorMessageLogin = 0;
	
  formLogin.classList.remove("is-invalid");

  let inputEmailLogin = document.forms["myFormLogin"]["defaultForm-email"];
  let inputPasswordLogin = document.forms["myFormLogin"]["defaultForm-pass"];

  // Email
  if(inputEmailLogin.value == "") {
	inputEmailLogin.classList.add("is-invalid");
	document.getElementById("errorEmailLogin").textContent = "Please enter your email.";
	errorMessageLogin ++;

  } else if(!validar_email(inputEmailLogin.value)){
	inputEmailLogin.classList.add("is-invalid");
	document.getElementById("errorEmailLogin").textContent = "Invalid email";
	errorMessageLogin ++;
}

// Password
if(inputPasswordLogin.value == "") {
	inputPasswordLogin.classList.add("is-invalid");
	document.getElementById("errorPasswordLogin").textContent = "Please enter your password.";
	errorMessageLogin ++;
}


if (errorMessageLogin > 0){
    return false;
    }else{
      return true;
  }

}

formLogin.addEventListener("blur", (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove("is-invalid");
    // loginValidate();
}, true);





// ---------------  REGISTER  ---------------

const form = document.getElementById("myFormId");

function registerValidate() {
	let errorMessage = 0;
	
  form.classList.remove("is-invalid");

  let inputUsername = document.forms["myForm"]["form-username"];
  let inputEmail = document.forms["myForm"]['form-email'];
  let inputPassword = document.forms["myForm"]["form-password"];
  let inputConfirmPassword = document.forms["myForm"]["form-confirmPassword"];
  let inputProvince = document.forms["myForm"]["form-province"];

// Username
    if (inputUsername.value == "") {
      inputUsername.classList.add("is-invalid")
    document.getElementById("errorUsername").textContent = "Please enter your username.";
    errorMessage++;
  } 

//  Email
  if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Please enter your email.";
    errorMessage ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Invalid email";
		errorMessage ++;
	}

	// Password
    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Please enter your password.";
		errorMessage ++;
	}
	
	// Confirm Password
    if(inputConfirmPassword.value == "") {
		inputConfirmPassword.classList.add("is-invalid");
		document.getElementById("errorConfirmPassword").textContent = "Please confirm your password.";
		errorMessage ++;
	}

	// Province
    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "Please enter your province.";
		errorMessage ++;
	}

  if (errorMessage > 0){
    return false;
    }else{
      return true;
  }

}

form.addEventListener("blur", (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove("is-invalid");
    // registerValidate();
}, true);

function validar_email(email) {
	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}



