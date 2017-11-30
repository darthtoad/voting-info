$(document).ready(function() {
  $("form#age").submit(function(event){
    event.preventDefault();
    if ($("#ageSelect").val() === "under18") {
      $(".under18links").show();
      $(".over18links").hide();
    } else if ($("#ageSelect").val() === "over18") {
      $(".over18links").show();
      $(".under18links").hide();
    } else {
      alert("Zombies can't vote!");
    }
  });
});

var beverage = $("#beverage").val();
