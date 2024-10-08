const data = require('../../menu.json');

exports.handler = async function (event, context) {
  const menuData = data.menu; // Mengambil bagian "menu" dari JSON

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Mengizinkan permintaan dari semua origin
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
    body: JSON.stringify(menuData),
  };
};
