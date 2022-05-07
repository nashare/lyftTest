const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.post('/test', (req, res) => {
    const stringToCut = req.body["string_to_cut"];
    let resultString = "";
    for (let i = 2; i <stringToCut.length; i += 3) {
        resultString += stringToCut[i];
    }
    res.json({ return_string: resultString });
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  }) 