const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')


const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json())
app.use(bodyParser)

const corsOptions = {
    origin:'#',
    credentials: true,
    optionSuccessStatus:200
}
app.use(cors)
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});