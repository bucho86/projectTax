// script.js

// Example: Initial hardcoded values for testing
const grossIncome = 50000; // This would be the user's income input
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const vtTaxRate = 0.068; // Vermont's sample tax rate
const riTaxRate = 0.0475; // Rhode Island's sample tax rate
const ctTaxRate = 0.055; // Connecticut's sample tax rate
let calculatedTax = 0;

// This would come from the form input in the real application
// const grossIncomeFromHtmlForm = parseFloat(document.getElementById('income').value);
// const stateFromHtmlForm = document.getElementById('state').value;

const grossIncomeFromHtmlForm = grossIncome; // Placeholder for example
const stateFromHtmlForm = "ma"; // Placeholder for example

// Function to calculate tax based on rate and income
function calculateTax(taxRate, income) {
    return income * taxRate;
}

// Simulate getting state input and calculating tax based on that state
if (stateFromHtmlForm === "ma") {
    calculatedTax = calculateTax(maTaxRate, grossIncomeFromHtmlForm);
} else if (stateFromHtmlForm === "nh") {
    calculatedTax = calculateTax(nhTaxRate, grossIncomeFromHtmlForm);
} else if (stateFromHtmlForm === "me") {
    calculatedTax = calculateTax(meTaxRate, grossIncomeFromHtmlForm);
} else if (stateFromHtmlForm === "vt") {
    calculatedTax = calculateTax(vtTaxRate, grossIncomeFromHtmlForm);
} else if (stateFromHtmlForm === "ri") {
    calculatedTax = calculateTax(riTaxRate, grossIncomeFromHtmlForm);
} else if (stateFromHtmlForm === "ct") {
    calculatedTax = calculateTax(ctTaxRate, grossIncomeFromHtmlForm);
} else {
    console.error("Invalid state selected.");
}

console.log(`State selected: ${stateFromHtmlForm}`);
console.log(`Gross income: $${grossIncomeFromHtmlForm}`);
console.log(`Calculated tax: $${calculatedTax.toFixed(2)}`);

// Additional operations can be done here
// For Massachusetts, deduct local taxes, or perform other state-specific operations
if (stateFromHtmlForm === "ma") {
    console.log("Performing additional operations for Massachusetts...");

    // Example of a non-existent function call, just as a placeholder
    // calculateLocalTaxes(); 
    // showTaxes();
}

// Displaying the result on the page (for the real application)
document.getElementById('result').textContent = `The calculated tax for ${stateFromHtmlForm.toUpperCase()} is $${calculatedTax.toFixed(2)}.`;

// Placeholder for other state-specific operations
// if(stateFromHtmlForm === "ma");{
// calculateTax(maTax, grossIncomeFromHtmlForm);
// calculateLocalTaxes9(); // this function doesn't exist
// showTaxes(); //
// }
