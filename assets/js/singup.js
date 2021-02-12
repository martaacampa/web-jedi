var url = "https://curs-jedi.herokuapp.com/users";

var users = [];

var emailInput;
var passwordInput;

const getUsers = async () => {
    try {
        users = (await axios.get(`${url}`)).data;
    }
	catch (error) {
        console.log(err);
    }
}

const associateUser = () => {
	emailInput = $('#email').val();
	passwordInput = $('#password').val();
}

const singup = async () => {

	$(".alert").remove();

	associateUser();

	if (users.find(user => user.email === emailInput)) {
		$("#form-singup").first().append(`<div class="alert alert-danger" role="alert">This username is taken. Try again.</div>`);
	}
	else {
		try {
			const res = (await axios.post(`${url}`, {email: `${emailInput}`, password: `${passwordInput}`}));
			getUsers();

			$("#form-singup").first().append(`<div class="alert alert-success" role="alert">You've singed up succesfully.</div>`);
		}
		catch (error) {
			console.log(err);
		}
	}
}

$(window).on('load', function() {

	getUsers();

	$('#b-singup').on('click', function(e) {

		e.preventDefault();
		singup();
	})

});