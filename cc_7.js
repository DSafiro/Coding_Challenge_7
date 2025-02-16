// Task 1: Customer Invoice Calculation
function calculateInvoice (subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount // Calculates total invoice amount and declares a variable
    console.log(`Total Invoice: $${total}` ) // Outputs total invoice
    return total // Returns total
}; // Declares a function that calculates total invoice
calculateInvoice(100, 0.08, 5); // Inputs values and produces expected output of $103
calculateInvoice(500, 0.1, 20); // Inputs values and produces expected output of $530

// Task 2: Employee Hourly Wage Calculation
function calculateHourlyWage (salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52) // Calculates hourly wage by dividing salary over hours per week times 52
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`) // Outputs and rounds hourly wage
    return hourlyWage // Returns hourly wage
} // Declares a function that calculates hourly wage
calculateHourlyWage(52000, 40); // Inputs values and produces expected output of $25
calculateHourlyWage(75000, 35); // Inputs values and produces expected output of $41.21