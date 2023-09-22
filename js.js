// JavaScript for energy source calculator
document.getElementById('energyCalculator').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get user input values
  const location = document.getElementById('location').value;
  const energyNeeds = parseFloat(document.getElementById('energyNeeds').value);
  const budget = parseFloat(document.getElementById('budget').value);

  // Perform calculations (you can customize this part)
  let recommendedSource = 'Solar Panels';
  let estimatedCost = '$10,000';

  // Display the results with animation
  const recommendedSourceElement = document.getElementById('recommendedSource');
  const estimatedCostElement = document.getElementById('estimatedCost');

  recommendedSourceElement.classList.remove('fade-in');
  estimatedCostElement.classList.remove('fade-in');

  setTimeout(function () {
      recommendedSourceElement.textContent = recommendedSource;
      estimatedCostElement.textContent = estimatedCost;
      recommendedSourceElement.classList.add('fade-in');
      estimatedCostElement.classList.add('fade-in');
  }, 100);

  // Smooth scroll to the results
  const resultsSection = document.querySelector('.calculator');
  resultsSection.scrollIntoView({ behavior: 'smooth' });
});
