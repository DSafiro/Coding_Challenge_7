// Task 1: Customer Invoice Calculation
function calculateInvoice (subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // Calculates total invoice amount and declares a variable
    console.log(`Total Invoice: $${total}` ); // Outputs total invoice
    return total; // Returns total
}; // Declares a function that calculates total invoice
calculateInvoice(100, 0.08, 5); // Inputs values and produces expected output of $103
calculateInvoice(500, 0.1, 20); // Inputs values and produces expected output of $530

// Task 2: Employee Hourly Wage Calculation
function calculateHourlyWage (salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52); // Calculates hourly wage by dividing salary over hours per week times 52
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`); // Outputs and rounds hourly wage
    return hourlyWage; // Returns hourly wage
}; // Declares a function that calculates hourly wage
calculateHourlyWage(52000, 40); // Inputs values and produces expected output of $25
calculateHourlyWage(75000, 35); // Inputs values and produces expected output of $41.21

// Task 3: Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    if (years >= 5) { // If years is greater than or equal to 5 -> 15% discount
        discountPrice = amount * 0.85;
    } else if (years >= 3) { // If years is greater than or equal to 3 -> 10% discount
        discountPrice = amount * 0.90;
    } else if (years < 3) { // If years is less than 3 -> 5% discount
        discountPrice = amount * 0.95;
    };
    console.log(`Discounted Price: $${discountPrice}`); // Outputs discounted price
}; // Declares arrow function that calculates discounted price 
calculateLoyaltyDiscount(100, 6); // Inputs values and produces expected result of $85
calculateLoyaltyDiscount(200, 2); // Inputs values and produces expected result of $190