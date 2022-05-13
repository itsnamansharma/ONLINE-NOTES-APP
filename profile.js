// Ajax call to updateusername.php
$("#updateusernameform").submit(function(event){ 
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray();
//    console.log(datatopost);
    //send them to updateusername.php using AJAX
    $.ajax({
        url: "updateusername.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data){
                $("#updateusernamemessage").html(data);
            }else{
                location.reload();   
            }
        },
        error: function(){
            $("#updateusernamemessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
            
        }
    
    });

});

// Ajax call to updatepassword.php
$("#updatepasswordform").submit(function(event){ 
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray();
//    console.log(datatopost);
    //send them to updateusername.php using AJAX
    $.ajax({
        url: "updatepassword.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data){
                $("#updatepasswordmessage").html(data);
            }
        },
        error: function(){
            $("#updatepasswordmessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
            
        }
    
    });

});



// Ajax call to updateemail.php
$("#updateemailform").submit(function(event){ 
    //prevent default php processing
    event.preventDefault();
    //collect user inputs
    var datatopost = $(this).serializeArray();
//    console.log(datatopost);
    //send them to updateusername.php using AJAX
    $.ajax({
        url: "updateemail.php",
        type: "POST",
        data: datatopost,
        success: function(data){
            if(data){
                $("#updateemailmessage").html(data);
            }
        },
        error: function(){
            $("#updateemailmessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
            
        }
    
    });

});

//Update picture
var file;

$("#updatepictureform").submit(function(event) {
    event.preventDefault();
    if(!file){
        $("#updatepicturemessage").html('<div class="alert alert-danger">Please upload a picture!</div>');       
        return false;
    }
    var imagefile = file.type;
    var match= ["image/jpeg","image/png","image/jpg"];
        if($.inArray(imagefile, match) == -1){
            $("#updatepicturemessage").html('<div class="alert alert-danger">Wrong File Format</div>');
            return false;
        }else{
            $.ajax({
                url: "updatepicture.php", 
                type: "POST",             
                data: new FormData(this), 
                contentType: false,       // The content type used when sending data to the server.
                cache: false,             // To unable request pages to be cached
                processData:false,        // To send DOMDocument or non processed data file it is set to false
                success: function(data){
                    if(data){
                        $("#updatepicturemessage").html(data);
                       
                    }else{
                        location.reload();
                    }

                },
                error: function(){
                    $("#updatepicturemessage").html("<div class='alert alert-danger'>There was an error with the Ajax Call. Please try again later.</div>");
                       
                }
            });
        }

});

// Function to preview image after validation

$("#picture").change(function() {
file = this.files[0];
var imagefile = file.type;
var match= ["image/jpeg","image/png","image/jpg"];
    if($.inArray(imagefile, match) == -1){
        $("#updatepicturemessage").html("<div class='alert alert-danger'>Wrong file format!</div>");
        return false;
    }
    else{
        var reader = new FileReader();
        reader.onload = imageIsLoaded;
        reader.readAsDataURL(this.files[0]);
    }
});
function imageIsLoaded(event) {
    $('.preview2').attr('src', event.target.result);
};