// You're a JS developer, and you've been asked to build a a tax calculation engine
// v4 features:
// - if income greater than 200$, ask them to show proof (ask more questions )
// and show the proof in addition to their net income display
// - for everybody else, show just the net income

// v5: @todo
// - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.

// v6: dele
// - if the state is ME or NH make the taxRate 0.05

// const grossIncome = 50000;
// const maTaxRate = 0.0423;
// const nhTaxRate = 0.05;
// const meTaxRate = 0.05;
// const state = "MA";

// if (state === "MA") {
//     const taxRate = maTaxRate;
//     if (grossIncome >= 50000) {
//         console.log(`Your gross income is ${grossIncome}`);
//     } else {
//         const taxDue = grossIncome * taxRate;
//         const netIncome = grossIncome - taxDue;
//         console.log(`Your net income is ${netIncome.toFixed(2)}`);
//     }
// } else if (state === "NH") {
//     const taxRate = nhTaxRate;
//     console.log(`Your gross income is ${grossIncome}`);
//     const taxDue = grossIncome * taxRate;
//     const netIncome = grossIncome - taxDue;
//     console.log(`Your net income is ${netIncome.toFixed(2)}`);
// } else if (state === "ME") {
//     const taxRate = meTaxRate;
//     console.log(`Your gross income is ${grossIncome}`);
//     const taxDue = grossIncome * taxRate;
//     const netIncome = grossIncome - taxDue;
//     console.log(`Your net income is ${netIncome.toFixed(2)}`);
// } else {
//     console.log("Invalid state");
// }

// }
// if( grossIncome >= 200 ){

//     console.log(`Your gross income is ${grossIncome}`)

// } else {
//     // do some stuff
//     const taxDue = grossIncome * taxRate;
//     const netIncome =  grossIncome - taxDue;

//     console.log(netIncome);
// need a place to display the results
//v3 write the funtion of the v3
// Todo: write the v3 the function and make it work for all states
const grossIncome = 50000;
const maTaxRate = 0.0423;
const nhTaxRate = 0.05;
const meTaxRate = 0.05;
const state = "MA";

function calculateTaxV2(grossIncome, stateTaxRate) {
    if (grossIncome >= 100) {
      console.log(`Your gross income is ${grossIncome}`);
    } else {
      // do some stuff
      const taxDue = grossIncome * stateTaxRate; 
      const netIncome = grossIncome - taxDue;
  
      console.log(netIncome);
    }
  }
  calculateTaxV2(10_000, 0.05);
  calculateTaxV2(100, 0.05);
  calculateTaxV2(5, 0.05); 
  // Todo: write the v3 the function and make it work for all states


 
