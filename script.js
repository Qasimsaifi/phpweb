 $(document).ready(function(){
  //Fetch All Records
  function loadTable(){ 
    $("#load-table").html("");
    $.ajax({ 
      url : 'http://0.0.0.0:8080/getall.php',
      type : "GET",
      success : function(data){
        if(data.status == false){
          $("#load-table").append("<tr><td colspan='6'><h2>"+ data.message +"</h2></td></tr>");
        }else{
          $.each(data, function(key, value){ 
            $("#load-table").append("<tr>" + 
                                    "<td>" + value.id + "</td>" + 
                                    "<td>" + value.student_name +"</td>" + 
                                    "<td>" + value.age +"</td>" + 
                                    "<td>" + value.city +"</td>" + 
                                    "<td><button class='edit-btn' data-eid='"+ value.id + "'>Edit</button></td>" + 
                                    "<td><button class='delete-btn' data-id='"+ value.id + "'>Delete</button></td>" + 
                                    "</tr>");
          });
        }
      },
complete: function() {
     $('#loading-image').hide();
    }
    });
  }

  loadTable();
  function message(message , status){
      
      if(status == true){
          $("#success-message").html(message).slideDown();
          $("#error-message").hide().slideUp();
setTimeout(function(){
    $("#success-message").slideUp();
},4000);
}
      else if(status == false){
         $("#error-message").html(message).slideDown();
         $("#success-message").hide().slideUp();
setTimeout(function() {
    $("#error-message").slideUp();
}, 4000);
      }
  }
  /* function for form to json */
  function jsonData(targetForm){
     var arr = $(targetForm).serializeArray();
     /* console.log(arr); */
     var obj = {};
     for (var a = 0; a < arr.length; a++)  {
         if(arr[a].value == ""){
             return false;
         }
         obj[arr[a].name] = arr[a].value
     }
     var json_string = JSON.stringify(obj); 
     return json_string;
  }
$('#save-button').on("click",function(e){
    e.preventDefault();
     var jsonObj = jsonData('#addForm');

    if(jsonObj == false){
        
      message("😡 पूरा भर ले पहले 😡", false);
    }
    else{
    $.ajax({
                url: 'http://0.0.0.0:8080/insert.php',
                type: "POST",
                data:jsonObj,
                success: function(data) {
           message(data.message , data.status);
           if(data.status == true){
               loadTable();
               $("#addForm").trigger("reset");
           }
                }
    });
    }
    
})
  //Show modal box
  $(document).on("click" , ".edit-btn" , function(){
      $("#modal").show();
       var studentId = $(this).data("eid");
        var obj = { sid: studentId };
        var myJSON = JSON.stringify(obj);
$.ajax({
      url : 'http://0.0.0.0:8080/getone.php',
      type : "POST",
      data : myJSON,
      success : function(data){
$('#edit-id').val(data[0].id);  
$('#edit-name').val(data[0].student_name);      
$('#edit-age').val(data[0].age);      
$('#edit-city').val(data[0].city);      
    }
      });  
  });
  /* hide modal box */
  $(document).on("click", "#close-btn", function() {
      $("#modal").hide();
      
  });
  /* update */
  $('#edit-submit').on("click",function(e){
    e.preventDefault();
     var jsonObj = jsonData('#edit-form');

    if(jsonObj == false){
        
      message("😡 पूरा भर ले पहले 😡", false);
    }
    else{
    $.ajax({
                url: 'http://0.0.0.0:8080/update.php',
                type: "put",
                data:jsonObj,
                success: function(data) {
           message(data.message , data.status);
           if(data.status == true){
               loadTable();

           }
                }
    });
    }
    
})
  /* delete */
$(document).on("click" , ".delete-btn" , function(){
    if(confirm("🤔 You really want to delete it")){
        var studentId = $(this).data("id");
        var obj = { sid: studentId };
        var myJSON = JSON.stringify(obj);
        var row = this;

        $.ajax({
            url: 'http://0.0.0.0:8080/delete.php',
            type: "POST",
            data: myJSON,
            success: function(data) {
           message(data.message, data.status);
           
           if (data.status == true) {
    $(row).closest('tr').fadeOut();
           }
            }
        });
    }
});
/* search */
$("#search").on("keyup" , function(){
    $('#loading-image').show();
    $("#load-table").empty();
    var search_term = $(this).val();
    $("#load-table").html("");
        $.ajax({
            url: 'http://0.0.0.0:8080/search.php?search='+ search_term,
            type: "GET",
            success: function(data) {
                message(data.message, data.status);
          if (data.status == false) {
              $("#load-table").append("<tr><td colspan='6'><h2>" + data.message + "</h2></td></tr>");
          } else {
              $.each(data, function(key, value) {
                  $("#load-table").append("<tr>" +
                      "<td>" + value.id + "</td>" +
                      "<td>" + value.student_name + "</td>" +
                      "<td>" + value.age + "</td>" +
                      "<td>" + value.city + "</td>" +
                      "<td><button class='edit-btn' id='ubtn' data-eid='" + value.id + "'>Edit</button></td>" +
                      "<td><button class='delete-btn' id='dbtn' data-id='" + value.id + "'>Delete</button></td>" +
                      "</tr>");
              });
          }

            },
complete: function() {
     $('#loading-image').hide();
    }
        });
});
  $(document).on("click", ".edit-btn", function() {
      var studentId = $('#sid').val();
      var obj = { sid: studentId };
      var myJSON = JSON.stringify(obj);
      $.ajax({
          url: 'http://0.0.0.0:8080/getone.php',
          type: "POST",
          data: myJSON,
          success: function(data) {
console.log(data[0].student_name);
if (data[0].student_name == $('#sname').val()) {
   console.log('l9gn success') 
   var php = '<?php session_start(); echo "yes"  ?>'
   $('#field').html(php)
}
else{
    console.log('faled')
}
          }
      });
  });
 });
 
  
