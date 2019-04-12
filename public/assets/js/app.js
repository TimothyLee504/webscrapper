// Whenever someone clicks a p tag
$(document).on("click", ".addComment", function () {
    console.log(this.id);
    $.ajax({
      method: "GET",
      url: "/articles/" + this.id
    }).then(function(data) {
      // console.log(data);
      $("div.modal-footer").show();
      $("h5.modal-title").append(data.title);
      $("div.modal-body").append(data.preview);
      $("button.commentBtn").attr("id", data._id);
    });
    $("h5.modal-title").empty();
    $("div.modal-body").empty();
  });
  
  $(document).on("click", ".viewComment", function () {
    $.ajax({
      method: "GET",
      url: "/articles/" + this.id
    }).then(function(data) {
      $("h5.modal-title").append(data.title);
      $("div.modal-footer").hide();
    });
  });
  
  // When you click the savenote button
  $(document).on("click", "button.commentBtn", function () {
    console.log(this.id);
    let thisID = this.id;
    // Run a POST request to change the note, using what's entered in the inputs
    $.ajax({
      method: "POST",
      url: "/articles/" + thisID,
      data: {
        // Value taken from title input
        comment: $("#commentInput").val(),
      }
    })
    // With that done
    .then(function(data) {
      // Log the response
      console.log("things happends");
      console.log(data);
        // Empty the notes section
      });
  
    // Also, remove the values entered in the input and textarea for note entry
    $("#commentInput").val("");
  });