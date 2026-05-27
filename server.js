const express = require('express');
const app = express();
app.use(express.static(__dirname));
module.exports = app;
if (require.main === module) {
  app.listen(process.env.PORT || 3000);
}
