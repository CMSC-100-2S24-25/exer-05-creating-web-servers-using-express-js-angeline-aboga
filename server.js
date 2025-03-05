// importing packages
import express from 'express';
import { appendFileSync, readFileSync } from 'node:fs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// post method to add book information to books text file
app.post('/add-book', (req, res) => {
    // response object
    res = {};

    // checks if any passed object property is an empty string
    if (req.body.book_name == "" || req.body.isbn == "" || req.body.author == "" || req.body.year_published == "") {
        res.success = false;
    // if not then concatenates book info and writes on text file
    }else {
        let newBookInfo = req.body.book_name + "," + req.body.isbn + "," + req.body.author + "," + req.body.year_published + "\n";

        appendFileSync('./books.txt', newBookInfo, 'utf8');

        res.success = true;
    }

    // prints response object
    console.log(res);
});

// get method to search for book information given isbn and author
app.get('/find-by-isbn-author', (req, res) => {
    const books_info = readFileSync('./books.txt',{ encoding: 'utf8', flag: 'r' });
    // res = [];

    for (let line = 0; line < books_info.length; line++) {
        if (books_info[line].includes(req.query.isbn) && books_info[line].includes(req.query.author)) {
            res.send(books_info[line]);
            // res.push(books_info[line]);
            // console.log(books_info[line]);
        }
    }
});

// get method to search for book information given author only
app.get('/find-by-author', (req, res) => {
    const books_info = readFileSync('./books.txt',{ encoding: 'utf8', flag: 'r' });
    // res = [];

    for (let line = 0; line < books_info.length; line++) {
        if (books_info[line].includes(req.query.author)) {
            res.send(books_info[line]);
            // res.push(books_info[line]);
            // console.log(books_info[line]);
        }
    }
});

// print at terminal if server already started
app.listen(3000, () => { console.log('Server started at port 3000')} );