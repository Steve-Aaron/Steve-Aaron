var fname;

$(document).ready(function () {
  $("#page2").hide(0); $("#page3").hide(0);  
  $("#page1").show(500);
    $("#main").addClass("bg-secondary");
    $("#main").removeClass("bg-primary");
    $("#btnPage2").click(function () {
      $("#page3").hide(0);  
      fname = document.getElementById('firstname').value;
      if (fname) {
        $("#page1").hide(500);
      $('.name-insert').each(function() {
        $(this).html(fname);
        if ($(this).is('input')) {
          $(this).val(fname);
        }
      });
      $("#page2").show(0);
    } else {
      alert("Please enter your name"); 
    }
    });

    $("#btnPage1").click(function () {
      $("#page1").show(500);
      $("#page2").hide(0);
      $("#page3").hide(0);  
    });
  });