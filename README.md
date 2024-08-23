all my old code with notes 

<!-- // You're a JS developer, and you've been asked to build a a tax calculation engine
// - if income greater than 200$, ask them to show proof (ask more questions )
// and show the proof in addition to their net income display
// - for everybody else, show just the net income
// - when the income is greater than $200, do the tax calculation but add a $20 deduction from the gross.
// Algorithms: steps to solve this prob 👆🏾
    // 1. get the gross income
// const grossIncome = prompt("What's you gross income?"); -->
<!-- 5% for income up to $50,000
    5.5% for income between $50,001 and $100,000
    6% for income above $100,000 -->
<!-- // 2. check if the income is greater than $200, if yes, ask for proof
    // 3. calculate the tax based on the income bracket
    // 4. display the net income and the proof if income is greater than $200
    // 5. add a $20 deduction from the gross income if income is greater than $200
    // 6. return the net income
    // 7. use a switch statement to determine the tax rate based on the income bracket
    // 8. use a conditional statement to check if the income is greater than $200
    // 9. use a prompt to ask for the proof if the income is greater than $200
    // 10. use a console.log to display the net income and the proof if the income is
    // greater than $200
    // 11. use a console.log to display the net income if the income is less than or
    // equal to $200
    // 12. use a console.log to display the net income with the $20 deduction if the
    // income is greater than $200
    // 13. use a console.log to display the tax rate based on the income bracket
    // 14. use a console.log to display the tax amount based on the income bracket -->    
    // 2b. get the base tax rate (ma: 4.23% or 0.04)


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
// const grossIncome = 50000;
// const maTaxRate = 0.0423;
// const nhTaxRate = 0.05;
// const meTaxRate = 0.05;
// const state = "MA";
// function calculateTaxV2(grossIncome, stateTaxRate) {
//     if (grossIncome >= 100) {
//       console.log(`Your gross income is ${grossIncome}`);
//     } else {
//       // do some stuff
//       const taxDue = grossIncome * stateTaxRate; 
//       const netIncome = grossIncome - taxDue;
  
//       console.log(netIncome);
//     }
//   }

// Todo: write the v3 the function and make it work for all states
  //TODO: write the v3 of the function and make it possible to pass in any Gross Income

// calculateTaxV2(0.034);
// calculateTaxV2(0.05);

// const grossIncome = 50000;
// const maTaxRate = 0.0423;
// const nhTaxRate = 0.05;
// const meTaxRate = 0.05;
// const state = "";

// const grossIncomeFromHtmlForm = inputFromhtml.value;
// const stateFromHtmlForm = seltectFromHtml.value;
// console.log(stateFromHtmlForm);
// if(stateFromHtmlForm === "ma") {

//   calculateTax(maTaxRate, grossIncomeFromHtmlForm);
//   }

//   if(stateFromHtmlForm === "ma");{
  // calculateTax(maTax, grossIncomeFromHtmlForm);
  // calculateLocalTaxes9(); //this function doesn't exist
  // showTaxes(); //
  }
  // just for ma, deduct local taxes
  // get the income, deduct local taxes
