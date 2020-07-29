$(".devour-btn").on("click", function(event) {
    var id = $(this).data("id");
    console.log('id', id)
    var newState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax({
      url: "/burger/" + id,
      type: "PUT",
      data: newState    
  }).then(() => {
      console.log("made a put request successfully");
      // Reload the page to get the updated list
      location.reload();
    })
});