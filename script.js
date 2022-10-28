$(document).ready(onReady);

// state: setup empty array (employees)
let employees = [];
// setup empty montly budget calc
let monthlyBudget = 0;
    // if this is over 20k, monthly budget background turns red


function onReady() {
    console.log('DOM is ready');
    // setup event triggers
    // submit button 
    $(".submit-button").on('click', onSubmit)
    // delete buttons for each emp

}



// submit button function
function onSubmit() {
    // if all the fields have text
    if ($('.input-form').val()) {
    // log those text boxes into an object, then push into the employees array
    // check if the id input is already in use
        // if (for (const emp of employees) {
           console.log('in submit'); 
        // }) 
        let newEmp = {
            firstName: $("#emp-first-name").val(),
            lastName: $("#emp-last-name").val(),
            iD: $("#emp-id").val(),
            title: $("#emp-title").val(),
            annualSalary: $("#emp-annual-salary").val()

        };
        employees.push(newEmp);
    // clear the fields
    $('.input-form').val("");

    //render
    // render();
    }//end conditional
}// end function



// delete button function
    // removes the employee from the array (use a reference class number that is also stored in the object)
    // maybe a strech goal would be to put a removed employee into a formerEmp array
    // render new array to DOM



// render to DOM
    //empty old list from DOM
    //render emp table
    //render total monthly
    


    // punch list:
    // make sure there isn't already an ID when adding an emp object
    