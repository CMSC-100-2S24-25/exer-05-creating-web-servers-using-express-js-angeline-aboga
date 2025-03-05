import express from 'express';
import { appendFileSync } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.post('/add-book', (req, res) => {
    // res.send('Received a POST request from ' + req.body.name);
    res = {};

    if (req.body.book_name == "" || req.body.isbn == "" || req.body.author == "" || req.body.year_published == "") {
        res.success = false;
    }else {
        let newBookInfo = req.body.book_name + "," + req.body.isbn + "," + req.body.author + "," + req.body.year_published + "\n";

        appendFileSync('./books.txt', newBookInfo, 'utf8');

        res.success = true;
    }

    console.log(res);
});

app.get('/find-by-isbn-author', (req, res) => {

});

app.get('/find-by-author', (req, res) => {

});


app.listen(3000, () => { console.log('Server started at port 3000')} );