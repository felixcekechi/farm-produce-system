const http = require("http");

const server = http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/products") {
    const products = [
      { id: 1, name: "Tomatoes", price: 500 },
      { id: 2, name: "Rice", price: 3000 }
    ];
    res.write(JSON.stringify(products));
  }

  else if (req.url === "/orders") {
    const orders = [
      { id: 1, product: "Tomatoes", status: "Processing" }
    ];
    res.write(JSON.stringify(orders));
  }

  else {
    res.write(JSON.stringify({ message: "Welcome to Farm Produce API" }));
  }

  res.end();
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});