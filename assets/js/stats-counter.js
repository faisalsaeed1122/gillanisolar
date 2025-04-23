var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight;
  if (a === 0 && $(window).scrollTop() > oTop) {
    $(".counter__value").each(function () {
      var $this = $(this),
        countTo = parseInt($this.attr("data-count"), 10), // Ensure it's an integer
        prefix = $this.attr("data-prefix") || "", // Get prefix (if any)
        suffix = $this.attr("data-suffix") || ""; // Get suffix (if any)

      var $value = $this.find(".value"); // Target the `.value` span for numeric part

      // Start animation
      $({ countNum: 0 }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            // Update numeric part with prefix and suffix
            $value.text(Math.floor(now)); // Only update the number
          },
          complete: function () {
            // Set final value with prefix and suffix
            $value.text(countTo); // Update the final numeric part
          },
        }
      );
    });
    a = 1; // Ensure the animation runs only once
  }
});
