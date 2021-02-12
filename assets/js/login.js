var url = "https://curs-jedi.herokuapp.com/users";

var users = [];

var emailInput;
var passwordInput;

const getUsers = async () => {
    try {
        users = (await axios.get(`${url}`)).data;
    }
	catch (error) {
        console.log(error);
    }
}

const associateUser = () => {
	emailInput = $('#email').val();
	passwordInput = $('#password').val();
}

const logIn = () => {

	$(".alert").remove();

	associateUser();
	
	if (users.find(user => user.email === emailInput && user.password === passwordInput)) {
		$("#form-login").first().append(`<div class="alert alert-success" role="alert">welcome, ${emailInput} ! </div>`);
	}
	else {
		$("#form-login").first().append(`<div class="alert alert-danger" role="alert">Wrong email or password.</div>`);
	}
}

$(window).on('load', function() {

	getUsers();

	$('#b-login').on('click', function(e) {
		e.preventDefault();
		logIn();
	})


});