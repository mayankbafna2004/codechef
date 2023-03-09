const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const usernameValue = usernameInput.value.trim();
	const passwordValue = passwordInput.value.trim();
	const emailValue = emailInput.value.trim();

	if (usernameValue === '' || passwordValue === '' || emailValue === '') {
		alert('Please fill in all fields');
	} else {
		alert(`Welcome, ${usernameValue}!`);
		form.reset();
	}
});
