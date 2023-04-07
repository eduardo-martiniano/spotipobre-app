const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const router = require('./routes');
const cors = require('cors');
const port = process.env.PORT || 3001;


app.use(cors());
app.use(router);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(port, () => console.log(`app listening on port ${port}!`));