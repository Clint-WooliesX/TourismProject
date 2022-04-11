// free html form submission does not allow redirects on free plans and simply 
// navigats "back" after successful form submission. bellow code forces a page 
// refresh using an event listner when the page is traversed using "back"

window.addEventListener("pageshow", function (event) {
  var historyTraversal = event.persisted;
  if (historyTraversal) {
    // Handle page restore.
    window.location.reload();
  }
});