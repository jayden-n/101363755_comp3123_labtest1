const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'delayed success!' });
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: 'delayed exception!' });
    }, 500);
  });
};

// Call resolvedPromise and handle the result
resolvedPromise()
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });

// Call rejectedPromise and handle the result
rejectedPromise()
  .then((result) => {
    console.log('Resolved:', result);
  })
  .catch((error) => {
    console.error('Rejected:', error);
  });
