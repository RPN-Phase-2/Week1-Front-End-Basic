/** INFO: TOP LEVEL CONSTANT*/
const baseURL = "https://inventory-system-flame-five.vercel.app";
const loginURL = `${baseURL}/v1/auth/login`;
const registerURL = `${baseURL}/v1/auth/register`;

const wait = (time) => new Promise(resolve => setTimeout(resolve, time));

/** @function ajaxPOST
 * @param {string} url
 * @param {Record<string, unknown>} data
 */
const ajaxPOST = (url, data) => {
  const result = {
    ok: true,
    body: null
  };
  return new Promise(resolve => {
    $.ajax({
      contentType: "application/json",
      url,
      dataType: "json",
      data: JSON.stringify(data),
      // statusCode: {
      //   401: res => {
      //     result.ok = false;
      //     result.body = res;
      //     resolve(result);
      //   }
      // },
      success(response) {
        result.body = response;
        resolve(result);
      },
      error(err) {
        result.ok = false;
        result.body = err.responseJSON
        resolve(result);
      },
      type: "POST"
    });
  });
}

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
function validation(value, type) {
  switch(type) {
    case "email": return regexEmail.test(value);
    case "password": return regexPassword.test(value);
    default: return true;
  }
}

function main() {
  $("form#login-form").on("submit", async function(ev) {
    ev.preventDefault();
    const input = $(this).find("input");
    const button = $(this).find("input[type=\"submit\"]");
    const data = {};
    const arr = $(this).serializeArray();
    $(input).prop("disabled", true);
    button.val("Loading...");
    for (const x of arr) data[x.name] = x.value;
    const response = await ajaxPOST(loginURL, data);
    if (response.ok) {
      $(input).val("");
      popUp("Login Accepted");
    } else {
      popUp(response.body.message, false);
    }
    $(input).prop("disabled", false);
    button.val("login");
  });

  $("form#register-form").on("submit", async function(ev) {
    ev.preventDefault();
    const input = $(this).find("input");
    const button = $(this).find("input[type=\"submit\"]");
    const data = {};
    const arr = $(this).serializeArray();
    $(input).prop("disabled", true);
    button.val("Loading...");
    for (const x of arr) data[x.name] = x.value;
    const response = await ajaxPOST(registerURL, data);
    if (response.ok) {
      popUp("Register Accepted");
      $(input).val("");
    } else {
      popUp(response.body.message, false);
    }
    $(input).prop("disabled", false);
    button.val("register");
  });

  $(".footer > h5 > span").on("click", function() {
    $(this).toggleClass("zoom");
  });

  $("input").on("keydown keyup keypress input", function() {
    const value = $(this).val();
    const type = $(this).attr("type");
    if (value.length && !validation(value, type)) {
      $(this).css("border-color", "red");
      const span = $(this).parent().find(`span.hide#${type}`);
      span.slideDown();
    } else if (value.length) {
      $(this).css("border-color", "green");
      const span = $(this).parent().find(`span.hide#${type}`);
      span.slideUp();
    } else {
      $(this).css("border-color", "var(--bg-color-bright)");
      const span = $(this).parent().find(`span.hide#${type}`);
      span.slideUp();
    }
  })
}


$(document).ready(main);
