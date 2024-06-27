const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/lottery-results', async (req, res) => {
    try {
        const response = await fetch('http://www.nagalandlotteries.com/livedraw/');
        const html = await response.text();
        // Parse the HTML to extract the required data
        // Note: This example assumes you have some way to extract the data
        // You'll likely need to use a library like cheerio to parse the HTML

        // For simplicity, let's return a mock response
        const results = [
            { time: '10:00 AM', result: '12345' },
            { time: '12:00 PM', result: '67890' },
            { time: '02:00 PM', result: '11223' },
            { time: '04:00 PM', result: '44556' },
            { time: '06:00 PM', result: '77889' }
        ];

        res.json(results);
    } catch (error) {
        res.status(500).send('Error fetching lottery results');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
