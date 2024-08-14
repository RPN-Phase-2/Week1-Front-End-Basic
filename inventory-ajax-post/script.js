$(document).ready(function () {
  // toggle show password
  $(".eye").click(function () {
    $(this).toggleClass("fa-eye-slash fa-eye");
    const isVisible = $(this).hasClass("fa-eye");
    $(this)
      .siblings("input")
      .attr("type", isVisible ? "text" : "password");
  });

  $.validator.addMethod("passwordComplex", function (value) {
    return /[a-zA-Z]/.test(value) && /[0-9]/.test(value);
  });

  // Form Register
  $("#form-register").validate({
    rules: {
      errorElement: "div",
      errorClass: "error",
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
        passwordComplex: true,
      },
      repeat_password: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      name: {
        required: "Name required",
        minlength: "Min 2 characters",
      },
      email: {
        required: "Email required",
        email: "Invalid email format",
      },
      password: {
        required: "Password required",
        minlength: "Min 8 characters",
        passwordComplex: "Include letters and numbers",
      },
      repeat_password: {
        required: "Repeat password",
        equalTo: "Passwords don't match",
      },
    },
    submitHandler: function (form) {
      const name = $("[name='name']").val();
      const email = $("[name='email']").val();
      const password = $("[name='password']").val();

      $.ajax({
        url: "https://week4-backend-server-api.vercel.app/v1/auth/register",
        method: "POST",
        data: {
          name: name,
          email: email,
          password: password,
        },
        success: function (data) {
          window.location.href = "login.html";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          if (jqXHR.responseJSON && jqXHR.responseJSON.message) {
            $("#email-taken").text(jqXHR.responseJSON.message);
          } else {
            $("#email-taken").text("Terjadi kesalahan, silakan coba lagi.");
          }
        },
      });
    },
  });

  // Form Login
  $("#form-login").validate({
    rules: {
      errorElement: "div",
      errorClass: "error",
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
        passwordComplex: true,
      },
    },
    messages: {
      email: {
        required: "Email required",
        email: "Invalid email format",
      },
      password: {
        required: "Password required",
        minlength: "Min 8 characters",
        passwordComplex: "Include letters and numbers",
      },
    },
    submitHandler: function (form) {
      const email = $("[name='email']").val();
      const password = $("[name='password']").val();

      $.ajax({
        url: "https://week4-backend-server-api.vercel.app/v1/auth/login",
        method: "POST",
        data: {
          email: email,
          password: password,
        },
        success: function (response) {
          console.log(response);
          localStorage.setItem("loggedInUser", response.userLogin.name);
          window.location.href = "index.html";
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("Error:", textStatus, errorThrown);
        },
      });
    },
  });

  // index.html
  const name = localStorage.getItem('loggedInUser');
  $("#welcome").text(`Selamat Datang ${name}`);

  $("#logout").click(function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = "login.html";
  })
});
