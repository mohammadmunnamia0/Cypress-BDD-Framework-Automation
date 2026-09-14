// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';


// // Custom command to get working date and convert to date picker format
// Cypress.Commands.add('getWorkingDateFormatted', (workingDateLocator) => {
//   return cy.xpath(workingDateLocator).invoke('text').then((dateText) => {
//     // dateText format: "27-Nov-2025"
//     const cleanDate = dateText.trim();
//     const [day, month, year] = cleanDate.split('-');
    
//     // Month mapping
//     const monthMap = {
//       'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April',
//       'May': 'May', 'Jun': 'June', 'Jul': 'July', 'Aug': 'August',
//       'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
//     };
    
//     // Day name mapping
//     const date = new Date(`${month} ${day}, ${year}`);
//     const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const dayName = dayNames[date.getDay()];
    
//     // Return formatted string for aria-label
//     return `Choose ${dayName}, ${monthMap[month]} ${parseInt(day)}${getDaySuffix(parseInt(day))}, ${year}`;
//   });
// });

// // Custom command for HMS EOD date picker format (abbr with "Month Day, Year")
// Cypress.Commands.add('getWorkingDateFormattedForHMS', (workingDateLocator) => {
//   return cy.xpath(workingDateLocator).invoke('text').then((dateText) => {
//     // dateText format: "27-Nov-2025"
//     const cleanDate = dateText.trim();
//     const [day, month, year] = cleanDate.split('-');
    
//     // Month mapping
//     const monthMap = {
//       'Jan': 'January', 'Feb': 'February', 'Mar': 'March', 'Apr': 'April',
//       'May': 'May', 'Jun': 'June', 'Jul': 'July', 'Aug': 'August',
//       'Sep': 'September', 'Oct': 'October', 'Nov': 'November', 'Dec': 'December'
//     };
    
//     // Return formatted string for HMS date picker (abbr aria-label format)
//     return `${monthMap[month]} ${parseInt(day)}, ${year}`;
//   });
// });

// // Custom command to get working date minus a number of days
// Cypress.Commands.add('getWorkingDateMinusDays', (locator, daysToSubtract) => {
//     return cy.xpath(locator).invoke('text').then((text) => {
//         const dateMatch = text.match(/\d{2}-\w{3}-\d{4}/);
//         if (dateMatch) {
//             const date = new Date(dateMatch[0]);
//             date.setDate(date.getDate() - daysToSubtract);
            
//             const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//             const formattedDate = date.toLocaleDateString('en-US', options);
//             const day = date.getDate();
//             const suffix = day === 1 || day === 21 || day === 31 ? 'st' : 
//                           day === 2 || day === 22 ? 'nd' : 
//                           day === 3 || day === 23 ? 'rd' : 'th';
//             return `Choose ${formattedDate.replace(/\d+/, day + suffix)}`;
//         }
//     });
// });

// // Helper function for day suffix
// function getDaySuffix(day) {
//   if (day >= 11 && day <= 13) return 'th';
//   switch (day % 10) {
//     case 1: return 'st';
//     case 2: return 'nd';
//     case 3: return 'rd';
//     default: return 'th';
//   }
// }