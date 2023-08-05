document.addEventListener("DOMContentLoaded", function () {
  mapkit.init({
    authorizationCallback: function (done) {
      done("YOUR_API_KEY");
    },
  });

  const map = new mapkit.Map("map-container");
  // Add custom map annotations or other functionality here
});
