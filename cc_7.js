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
    console.log(`Discounted Price: $${discountPrice.toFixed(2)}`); // Outputs discounted price
}; // Declares arrow function that calculates discounted price 
calculateLoyaltyDiscount(100, 6); // Inputs values and produces expected result of $85
calculateLoyaltyDiscount(200, 2); // Inputs values and produces expected result of $190

// Task 4: Product Shipping Cost Calculation
function calculateShippingCost (weight, location, expedited = false) {
    if (location === "USA") { // If location equals "USA" -> Shipping cost is $5 + $0.5 per lb
        shippingCost = 5 + (0.5 * weight);
    } else if (location === "Canada") { // If location equals "Canada" -> Shipping cost is $10 + $0.7 per lb
        shippingCost = 10 + (0.7 * weight);
    } if (expedited === true) { // If expedited equals true -> Additional $10 fee
        shippingCost = shippingCost + 10;
    };
    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`); // Outputs shipping cost and rounds to two decimal points
    return shippingCost; // Returns shipping cost
}; // Declares a function that calculates shipping cost
calculateShippingCost(10, "USA", true); // Inputs values and produces expected output of $20.00
calculateShippingCost(5, "Canada", false); // Inputs values and produces expected output of $13.50

// Task 5: Business Loan Interest Calculation
function calculateLoanInterest (principal, rate, years) {
    interest = principal * rate * years; // Calculates interest by multiplying principal, rate, and years together
    console.log(`Total Interest: $${interest.toFixed(2)}`); // Outputs and rounds total interest
    return interest; // Returns total interest
}; // Declares a function that calculates total interest
calculateLoanInterest(1000, 0.05, 3); // Inputs values and produces expected output of $150.00
calculateLoanInterest(5000, 0.07, 5); // Inputs values and produces expected output of $1750.00

// Task 6: Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200]; // Initial transactions array
const filterHighValueTransactions = (transactions, filterFunction) => {
    return transactions.filter(filterFunction); // Utilizes filter function to filter transactions above $1000
}; // Declares function that filters transactions
console.log(`Filtered Transactions: ${filterHighValueTransactions(transactions, amount => amount > 1000)}`); // Inputs filter and produces expected filtered outputs of [1200, 3000, 2200]

// Task 7: Budget Tracker
function createBudgetTracker () {
    let totalBalance = 0; // Declares total balance as a variable and sets initial amount to zero
    return function (expense) {
        totalBalance += expense; // Adds expense to total balance
        return totalBalance; // Returns total balance
    }; // Declares function that adds expenses
}; // Declares a function that tracks budget
let budget = createBudgetTracker(); // Declares budget by returning createBudgetTracker function
console.log(`Current Balance: -$${budget(300)}`); // Inputs values and produces expected output of -$300
console.log(`Current Balance: -$${budget(200)}`); // Inputs values and produces expected output of -$500

// Task 8: Business Growth Projection
function calculateGrowth (years, revenue) {
    if (years >= 10) return revenue; // If years if greater than or equal to 10 -> returns initial revenue
    projectedRevenue = calculateGrowth(years + 1, revenue * 1.05); // Calculates projected revenue by increasing revenue by 5% yearly, adding 1 year to counter until it reaches year 10
    return projectedRevenue; //  Returns projected revenue
}; // Declares recursive function calls itself and calculates projected revenue
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`); // Inputs values and produces expected output of $1102.50
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`); // Inputs values and produces expected output of $6381.41