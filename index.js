const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());
app.post('/test', (req, res) => {
    if (typeof req.body["string_to_cut"]!=="undefined") {
        const stringToCut = req.body["string_to_cut"];
        if (stringToCut.length > 0 && typeof stringToCut==="string") {
            let resultString = "";
            for (let i = 2; i <stringToCut.length; i += 3) {
                resultString += stringToCut[i];
            }
            res.json({ return_string: resultString });
        } else {
            res.status(400);
            res.send({ message: 'Your value isn\'t a string or your string is blank'});
        }
    } else {
        res.status(400);
        res.send({ message: 'Please, send you request in JSON format with a key string_to_cut and a string as a value'});
    }
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  }) 