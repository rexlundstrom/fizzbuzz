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
const generateFizzBuzz = (start, end, counter = 100) => {
  let results = "";

  for (let i = 1; i <= counter; i++) {
    if (i % start === 0 && i % end === 0) {
      results += `<td class="fizzbuzz">FizzBuzz</td>`;
    } else if (i % start === 0) {
      results += `<td class="fizz">Fizz</td>`;
    } else if (i % end === 0) {
      results += `<td class="buzz">Buzz</td>`;
    } else {
      results += `<td>${i}</td>`;
    }
  }
  return results;
};

// view function
const displayFizzBuzz = (str) => {
  let tableBody = document.getElementById("results");
  tableBody.innerHTML = str;
};

