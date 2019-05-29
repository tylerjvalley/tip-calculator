//Tip percentages
const percentages = [.25, .20, .15, .10];


//calculate tip

const calcTip = (bill, people, quality) => {
  let percent = 1;

  switch(quality) {
    case 'excellent':
      percent = percentages[0];
      break;
    case 'good':
      percent = percentages[1];
      break;
    case 'mediocre':
      percent = percentages[2];
      break;
    case 'bad':
      percent = percentages[3];
      break;
  }

  let total = (bill / people) * percent

  return total
}


//form submit function
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();

  //get the bill
  const bill = parseFloat(document.getElementById('bill').value);

  //get amount of people
  const people = parseInt(document.getElementById('people').value);

  let quality = null;

  //get service
  if (document.getElementById('excellent').checked) {
    quality = 'excellent';
  } else if (document.getElementById('good').checked) {
    quality = 'good';
  } else if (document.getElementById('mediocre').checked) {
    quality = 'mediocre';
  } else if (document.getElementById('bad').checked) {
    quality = 'bad';
  }



  if (bill == null || people == null || quality == null) {
    document.getElementById('final').innerHTML = `Please fill out the form completely`;
  } else if (isNaN(bill) || isNaN(people)) {
    document.getElementById('final').innerHTML = `Please only enter numbers`;
  } else {
    const result = calcTip(bill, people, quality).toFixed(2);
    document.getElementById('final').innerHTML = `Suggested Tip: $${result} Per Person`;
  }


});
