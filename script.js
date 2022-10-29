$(document).ready(onReady);

// state: setup empty array (employees)
let employees = [];
// setup empty montly budget calc
let yearlyBudget = 0; 
    // if this is over 20k, monthly budget background turns red


function onReady() {
    console.log('DOM is ready');
    // setup event triggers
    // submit button 
    $(".submit-button").on('click', onSubmit)
    // delete buttons for each emp
    $('.emp-table').on('click', '.delete-button', onDeleteEmp)
    // remove this:
    render();
}// end onReady()



// submit button function
function onSubmit() {
    // if all the fields have text
    if ($('.input-form').val()) {
    // log those text boxes into an object, then push into the employees array
    // check if the id input is already in use
        // if (for (const emp of employees) {
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
    render();
    }//end conditional
}// end function



// delete button function
function onDeleteEmp() {
    // initiate new array to store non-deleted objects
    let newEmployees = [];

    for (const emp of employees) {
        if (emp.iD !== $(this).parent().siblings('.empId').text()) {
            newEmployees.push(emp);
        }
    }// end for loop
    employees = newEmployees;
    render();
}// end function
    // removes the employee from the array (use the unique id number stored in the object)
    // maybe a strech goal would be to put a removed employee into a formerEmp array
    // render new array to DOM




// render to DOM
function render() {
    //empty old list from DOM
    $('.emp-table').empty();
    //render emp table
    for (const emp of employees) {
        //replace placeholders with string literals
        $('.emp-table').append(`
            <tr>
                <th>${emp.firstName}</th> 
                <th>${emp.lastName}</th>
                <th class = 'empId' >${emp.iD}</th>
                <th>${emp.title}</th>
                <th>$${emp.annualSalary}</th>
                <th>
                    <button class="delete-button">Delete</button>
                </th>
            </tr>
        `)
    }//end for loop

    //render total monthly
    //empty yearlyBudget
    yearlyBudget = 0;
    for (const emp of employees) {
        yearlyBudget += +emp.annualSalary;
    }
    //make sure it's formatted to to 2 dec
    let totalMonthly = parseFloat(yearlyBudget / 12).toFixed(2);
    $('#total-monthly').text(`Total Monthly: $${totalMonthly}`)
    if (totalMonthly > 20000) {
        $('#total-monthly').addClass('turn-red');
    } else {
        $('#total-monthly').removeClass('turn-red');
    }
}//end render()


// punch list:
// make sure there isn't already an ID when adding an emp object
    