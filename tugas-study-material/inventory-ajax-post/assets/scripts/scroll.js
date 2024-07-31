let isScrollable = true;
$("#register").on("mousewheel DOMMouseScroll", async function() {
  if (!isScrollable) return;
  isScrollable = false;
  $(this).slideUp();
  await wait(500);
  $("#login").slideDown();
  await wait(500);
  isScrollable = true;
});

$("#login").on("mousewheel DOMMouseScroll", async function() {
  if (!isScrollable) return;
  isScrollable = false;
  $(this).slideUp();
  await wait(500);
  $("#register").slideDown();
  await wait(500);
  isScrollable = true;
});
