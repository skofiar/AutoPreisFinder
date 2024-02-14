// Login-functionality 
// - Check, whether the user exists in the database
// - If he does, move him to another page:

$(document).ready(function() {
    $("#anmeldeButton").click(function(e){
        e.preventDefault(); // Prevents the default from submission

        // Change directory as soon as the code reaches this part:
        window.location.href = "./Dashboards/Admin_dashboard.html";
    });
});