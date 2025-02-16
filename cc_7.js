// Task 1: Customer Invoice Calculation
function calculateInvoice (subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount // Calculates total invoice amount and declares a variable
    console.log(`Total Invoice: $${total}` ) // Outputs total invoice
    return total // Returns total
}; // Declares a function that calculates total invoice
calculateInvoice(100, 0.08, 5); // Inputs values and produces expected output of $103
calculateInvoice(500, 0.1, 20); // Inputs values and produces expected output of $530

