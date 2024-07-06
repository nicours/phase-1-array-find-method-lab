


// Define the superbowlWin function
function superbowlWin(record) {
    const winRecord = record.find(entry => entry.result === 'W');
    return winRecord ? winRecord.year : undefined;
}

// Example records (for your reference)
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
];

// Export the function for testing
module.exports = superbowlWin;
