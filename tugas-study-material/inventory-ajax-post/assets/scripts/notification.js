const container = $("#notification-container > ul");

async function popUp(message, succes = true) {
  const li = $(`<li style="display: none" class="${succes ? "success" : "fail"}"><img src="${succes ? "assets/images/check.svg" : "assets/images/exclamation.svg"}"><span>${message}<span></li>`);
  container.append(li);
  li.fadeIn();
  await wait(2_000);
  li.fadeOut();
}

