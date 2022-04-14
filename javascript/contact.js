// free html form submission does not allow redirects on free plans and simply 
// navigates "back" after successful form submission. bellow code forces a page 
// refresh using an event listener when the page is traversed using "back"

window.addEventListener("pageshow", function (event) {
  var historyTraversal = event.persisted;
  if (historyTraversal) {
    // Handle page restore.
    window.location.reload();
  }
});

contactForm.addEventListener("submit", function () {
  console.log("show spinner");
  document.getElementById("spinnerLocation").style.display = "flex";
});
