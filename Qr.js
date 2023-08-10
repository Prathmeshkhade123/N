const express = require("express");
const qr = require("qrcode");
const app = express();
const port = 3000;

app.get("/generate", (req, res) => {
  const data = req.query.data || "https://numetry.in/";

  qr.toDataURL(data, (err, url) => {
    if (err) {
      res.status(500).send("Error generating QR code");
      return;
    }

    const html = `
            <html>
            <head>
                <title>QR Code Generator</title>
            </head>
            <body>
                <h1>Generated QR Code:</h1>
                <img src="${url}" alt="QR Code">
            </body>
            </html>
        `;

    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
