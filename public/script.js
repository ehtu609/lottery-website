document.addEventListener("DOMContentLoaded", function() {
    const resultsContainer = document.getElementById('results-container');

    fetch('/lottery-results')
        .then(response => response.json())
        .then(results => {
            results.forEach(result => {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'result';
                resultDiv.innerHTML = `<strong>${result.time}:</strong> ${result.result}`;
                resultsContainer.appendChild(resultDiv);
            });
        })
        .catch(error => {
            resultsContainer.innerHTML = 'Error fetching results';
            console.error('Error fetching results:', error);
        });
});
