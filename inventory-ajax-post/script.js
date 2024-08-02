let validator;

$(document).ready(function () {
  validator = new IV();

  const urlParams = new URLSearchParams(window.location.search);
  let mode = urlParams.get('mode') || 'login';
  const baseURL = 'https://inventory-system-mu.vercel.app';

  const loginButton = $('#login');
  const registerButton = $('#register');
  const loginForm = $('#login-form');
  const registerForm = $('#register-form');
  const title = $('#title');
  const formData = $('#formData');
  const cardProfile = $('#cardProfile');

  function updateActiveButton() {
    title.text(mode);
    if (mode === 'register') {
      console.log('register');
      registerButton.addClass('active');
      loginButton.removeClass('active');
      registerForm.removeClass('hidden');
      loginForm.addClass('hidden');
    } else {
      loginButton.addClass('active');
      registerButton.removeClass('active');
      loginForm.removeClass('hidden');
      registerForm.addClass('hidden');
    }
  }

  function renderCard() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    console.log(token);
    if (token) {
      formData.addClass('hidden');
      cardProfile.removeClass('hidden');
      cardProfile.addClass('container-wrapper');

      // $.ajax({
      //   url: `${baseURL}/api/users/${id}`,
      //   type: 'get',
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      //   data: formData,
      //   success: function (response) {
      //     console.log(response);
      //   },
      //   error: function (xhr, status, error) {
      //     const response = JSON.parse(xhr.responseText);

      //     $.notify(`${response?.message}`, { type: 'info' });
      //   },
      // });
    } else {
      formData.removeClass('hidden');
      cardProfile.addClass('hidden');
      cardProfile.removeClass('container-wrapper');
    }
  }

  updateActiveButton();
  renderCard();

  $('#logout').click(function (event) {
    event.preventDefault();
    history.replaceState(null, '', '?mode=login');
    mode = 'login';
    localStorage.clear();
    updateActiveButton();
    renderCard();
  });

  $('#login').click(function (event) {
    event.preventDefault();
    history.replaceState(null, '', '?mode=login');
    mode = 'login';
    updateActiveButton();
  });

  $('#register').click(function (event) {
    event.preventDefault();
    history.replaceState(null, '', '?mode=register');
    mode = 'register';
    updateActiveButton();
  });

  $('#loginForm').on('submit', function (event) {
    event.preventDefault();

    const form = $(this);
    const formData = form.serialize();

    $.ajax({
      url: `${baseURL}/api/auth/login`,
      type: 'POST',
      data: formData,
      success: async function (response) {
        if (response?.tokens && response?.user) {
          localStorage.setItem('token', response?.tokens?.access?.token);
          localStorage.setItem('id', response?.user?.id);
          await renderCard();
          $('#name').text(response?.user?.name);
          $('#role').text(response?.user?.role);
        }
      },
      error: function (xhr, status, error) {
        const response = JSON.parse(xhr.responseText);

        $.notify(`${response?.message}`, { type: 'info' });
      },
    });
  });
  $('#registerForm').on('submit', function (event) {
    event.preventDefault();

    const form = $(this);
    const formData = form.serialize();

    console.log(formData, '-----formData-----');
    $.ajax({
      url: `${baseURL}/api/auth/register`,
      type: 'POST',
      data: formData,
      success: function (response) {
        $.notify(`${response?.message || 'Success'}`, { type: 'success' });
      },
      error: function (xhr, status, error) {
        const response = JSON.parse(xhr.responseText);

        $.notify(`${response?.message}`, { type: 'info' });
      },
    });
  });
});
