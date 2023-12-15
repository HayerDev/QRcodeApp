const express = require('express');
const routes = require('./routes/qrRoutes');
const app = express();

// Apply routes
app.use('/', routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
