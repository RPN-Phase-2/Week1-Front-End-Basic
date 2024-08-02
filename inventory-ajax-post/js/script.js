$(document).ready(function () {
    function clearForm(formId) {
        $(formId).find('input').val('');
    }

    $('#registerForm').validate({
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler: function (form) {
            var name = $('#name').val();
            var email = $('#email').val();
            var password = $('#password').val();

            $.ajax({
                url: 'https://inventory-system-sable.vercel.app/api/auth/register',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ name: name, email: email, password: password }),
                success: function (response) {
                    clearForm('#registerForm');
                    toastr.success('Registrasi berhasil!');
                },
                error: function (xhr) {
                    toastr.error('Registrasi gagal: ' + xhr.responseJSON.message);
                }
            });
        }
    });

    $('#loginForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 6
            }
        },
        messages: {
            email: "Please enter a valid email address",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            }
        },
        submitHandler: function (form) {
            var email = $('#loginEmail').val();
            var password = $('#loginPassword').val();

            $.ajax({
                url: 'https://inventory-system-sable.vercel.app/api/auth/login',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({ email: email, password: password }),
                success: function (response) {
                    clearForm('#loginForm');
                    toastr.success('Login berhasil!');
                },
                error: function (xhr) {
                    toastr.error('Login gagal: ' + xhr.responseJSON.message);
                }
            });
        }
    });
});
