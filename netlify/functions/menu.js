const menu = require('../../menu.json'); // Import file JSON

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Untuk menangani CORS
    },
    body: JSON.stringify(menu),
  };
};
