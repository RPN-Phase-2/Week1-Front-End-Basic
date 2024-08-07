const BASE_URL = 'https://inventory-system-api-umber.vercel.app';
const loginUrl = `${BASE_URL}/v1/auth/login`;
const registerUrl = `${BASE_URL}/v1/auth/register`;

$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); 
        
        var email = $('#email').val();
        var password = $('#password').val();

       
        if (!email || !password || password.length < 6) {
            alert('Please enter a valid email address and ensure the password is at least 6 characters long.');
            return;
        }

        // Send AJAX request
        $.ajax({
            url: loginUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ email: email, password: password }),
            success: function(response) {
                console.log(response);
                localStorage.setItem('userName', response.user.name);
                alert('Login successful!');
                
                window.location.href = 'dashboard.html'; 
            },
            error: function(xhr) {
                alert('Login failed: ' + (xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'An unknown error occurred.'));
            }
        });
    });


$(document).ready(function() {
    $('#registerForm').on('submit', function(event) {
        event.preventDefault(); 

        
        var name = $('#name').val();
        var email = $('#reg-email').val();
        var password = $('#reg-password').val();
        var role = $('#role').val();

        
        if (!email || !password || password.length < 6) {
            alert('Please enter a valid email address and ensure the password is at least 6 characters long.');
            return;
        }
        if (!name || !role) {
            alert('Please fill in all required fields.');
            return;
        }

        
        $.ajax({
            url: registerUrl,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ name: name, email: email, password: password, role: role }),
            success: function(response) {
                alert('Registration successful!');
                location.reload();
            },
            error: function(xhr) {
                alert('Registration failed: ' + (xhr.responseJSON && xhr.responseJSON.message ? xhr.responseJSON.message : 'An unknown error occurred.'));
            }
        });
    });
});
});