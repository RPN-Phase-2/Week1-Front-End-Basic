$(document).ready(function () {
    function clearForm(formId) {
        $(formId).find('input').val('');
    }

    $('#registerForm').validate({
        rules: {
            username: 'required',
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name : 'Enter your name',
            email : 'Enter your email address',
            password: {
                required : 'Password not empty',
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler : function(form) {
            var name = $('#username').val();
            var email = $('#email').val();
            var password = $('#password').val();
            var role = 'user';

            $.ajax({
                url: "https://inventory-system-kohl.vercel.app/v1/auth/register",
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({name: name, email: email, password: password, role: 'user'}),
                success: function(response) {
                    console.log(response),
                    clearForm('#registerForm')
                    alert('Register Success')
                },
                error: function (err) {
                    console.error("Error response from server:", err.responseText);
                    alert('Registrasi gagal: ' + err.responseJSON.message);
                }
            })
        } 
    })

    $('#loginForm').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email : 'Enter your email address',
            password: {
                required : 'Password not empty',
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler : function(form) {
            var email = $('#emailSignin').val();
            var password = $('#passwordSignin').val();

            $.ajax({
                url: "https://inventory-system-kohl.vercel.app/v1/auth/login",
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({email: email, password: password}),
                success: function(response) {
                    console.log(response),
                    clearForm('#loginForm')
                    alert('Login Success')
                },
                error: function (err) {
                    console.error("Error response from server:", err.responseText);
                    alert('Login gagal: ' + err.responseJSON.message);
                }
            })
        } 
    })
})