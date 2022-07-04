console.log("Printer Jam... Try these steps:");
/** Callback functions are functions passes as parameters inside other functions for executing later. Here I will use setTimeout to help achieve this. */

/**Example 1:
 * Callback function by calling it */
const stepOne = function() {
    console.log("Step 1: Check tray A.");
}
setTimeout(stepOne, 3000);

/**Example 2:
 * Callback using anonymous function */
setTimeout(function() {
    console.log("Step 2: Lift tray B and unjam paper.");
}, 6000);

/**Example 3:
 * Callback using arrow function */
setTimeout(()=> {
    console.log("Step 3: Add more paper to tray C.");
}, 9000);

