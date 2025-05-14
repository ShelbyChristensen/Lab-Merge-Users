require('datejs');

function combineUsers(...args) {
  // Initialize return object
  const combinedObject = {
    users: []
  };

  // Loop through each array of users and combine
  for (const userArray of args) {
    combinedObject.users.push(...userArray);
  }

  // Add merge_date in "M/d/yyyy" format
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Return the final object
  return combinedObject;
}

module.exports = { combineUsers };

// Example usage
const result = combineUsers(['alice', 'bob'], ['carol'], ['dave', 'eve']);
console.log(result);
