import needle from 'needle';

needle.post(
    'http://localhost:3000/add-book',
    {   book_name: "Harry Potter and the Philosopher's Stone",
        isbn: "978-0-7475-3269-9",
        author: "J.K Rowling",
        year_published: 1997
    },
    (err, res) => {
        console.log(res.success);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    {   book_name: "Harry Potter and the Chamber of Secrets",
        isbn: "0-7475-3849-2",
        author: "J.K Rowling",
        year_published: 1998
    },
    (err, res) => {
        console.log(res.success);
    }
);

needle.post(
    'http://localhost:3000/add-book',
    {   book_name: "The Little Prince",
        isbn: "978-0156012195",
        author: "Antoine Saint-Exupery",
        year_published: 1943
    },
    (err, res) => {
        console.log(res.success);
    }
);

needle.get(
    'http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&amp;author=J.K+Rowling',
    { },
    (err, res) => {
        console.log(res.body);
    }
);

needle.get(
    'http://localhost:3000/find-by-author?author=J.K+Rowling',
    { },
    (err, res) => {
        console.log(res.body);
    }
);