const express = require('express');
const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.post('/test', (req, res) => {
    const srting_to_cut = req.body["string_to_cut"];
    let result_string = "";
    for (let i = 2; i <srting_to_cut.length; i += 3) {
        result_string += srting_to_cut[i];
    }
    res.json({ return_string: result_string });
});

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
  }) 