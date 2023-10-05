function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    // error handling
    if (!Array.isArray(mixedArray)) {
      reject('Input is not an array');
      return;
    }

    const filteredLowerCase = mixedArray
      .filter((item) => typeof item === 'string')
      .map((word) => word.toLowerCase());

    if (filteredLowerCase.length === 0) {
      reject('No lowercase words found in the array');
    } else {
      resolve(filteredLowerCase);
    }
  });
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
