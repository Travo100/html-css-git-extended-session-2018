var menu = ["pizza", "burritos", "sandwiches", "chips"];

var menuItems = document.getElementById("menu-items");
menuItems.textContent = menu.join();

function ringDinnerBell() {
    // ask the user if they want dinner 
    var dinnerConfirm = confirm("Want some dinner?");
    // if they do want dinner
    if(dinnerConfirm) {
        // alert them "Dinner is ready!"
        // alert("Dinner is ready!");
        var userDinnerChoice = prompt("We have " + menu.length + " items on the menu. They are as follows: " + menu.join() + ". What would you like?");
        
        if(menu.indexOf(userDinnerChoice.toLowerCase()) > -1) {
            alert(userDinnerChoice.toLowerCase() + " is one the way!");
        } else {
            alert("Sure you don't want something from the menu? Here are your choices: " + menu.join());
        }

    } else {
        // otherwise alert them "See you for dessert!"
        alert("See you for dessert!");
    }
}