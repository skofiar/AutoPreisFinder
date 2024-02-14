// Login-functionality 
// - Check, whether the user exists in the database
// - If he does, move him to another page:

$(document).ready(function(){

    $("#loginForm").submit(function(e){
        e.preventDefaul(); // Prevents the default from submission

        // Change directory as soon as the code reaches this part:
        window.location.href = "./sneat-1.0.0/overview.html";
    });

});