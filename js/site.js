// controller function
const getValues = () => {
  let startValue = parseInt(document.getElementById("startValue").value);
  let endValue = parseInt(document.getElementById("endValue").value);
  let counter = parseInt(document.getElementById("counter").value);

  // error message if NaN
  if (isNaN(startValue) || isNaN(endValue) || isNaN(counter)) {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Enter valid numbers only.",
      backdrop: false,
    });
  } else {
    const outputStr = generateFizzBuzz(startValue, endValue, counter);
    displayFizzBuzz(outputStr);
  }
};

// business/logic function
const generateFizzBuzz = (fizz, buzz, maximum = 100, counter = 1, results = "") => {
  // check fizzbuzz conditions, add corresponding string to results
  if (counter % fizz === 0 && counter % buzz === 0) {
    results += `<td class="fizzbuzz">FizzBuzz</td>`;
  } else if (counter % fizz === 0) {
    results += `<td class="fizz">Fizz</td>`;
  } else if (counter % buzz === 0) {
    results += `<td class="buzz">Buzz</td>`;
  } else {
    results += `<td>${counter}</td>`;
  }

  // if counter is equal to maximum, return results
  if (counter === maximum) {
    return results;
  } else {
    // increment and recurse
    counter++;
    return generateFizzBuzz(fizz, buzz, maximum, counter, results);
  }
};

// view function
const displayFizzBuzz = (str) => {
  let tableBody = document.getElementById("results");
  tableBody.innerHTML = str;
};
