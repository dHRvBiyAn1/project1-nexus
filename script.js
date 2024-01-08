function validateLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    alert(`Email: ${email}\nPassword: ${password}`);
  }

  function validateRegisterForm(event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    if (!fullName || !regEmail || !regPassword) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Full Name: ${fullName}\nEmail: ${regEmail}\nPassword: ${regPassword}`);
  }

  function PasswordReset() {
    $('form.reset-password-form').on('submit', function(e){
        e.preventDefault();
        $('.reset-form')
        .removeClass('d-block')
        .addClass('d-none');
        $('.reset-confirmation').addClass('d-block');
    });
}

window.addEventListener('load',function(){
    PasswordReset();
});