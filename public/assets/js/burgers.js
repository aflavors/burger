$(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
          console.log("Inside put route");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });