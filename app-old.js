const http = require('http');
const express = require('express');

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
      nombre: 'Yamir',
      edad: 35,
      url: req.url,
    };
    res.write(JSON.stringify(salida));
    res.end();
  })
  .listen(8080);

console.log('escuchando puerto 8080');
