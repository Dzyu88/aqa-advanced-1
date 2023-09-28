
import {Book} from "./Book.mjs";
import {EBook} from "./EBook.mjs";

// task1
console.log('task1')
const book1 = new Book('Shantaram', 'Gregory David Roberts', 2003);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('To Kill A Mockingbird', 'Harper Lee', 1960);

book1.printInfo();
book2.printInfo();
book3.printInfo();
console.log('----------------------------------------------------------------------------------');

// task2
console.log('task2')
const ebook1 = new EBook('Kobzar', 'Taras Shevchenko', 1840, 'pdf');
const ebook2 = new EBook('The Da Vinci Code', 'Dan Brown', 2003, 'epub');
const ebook3 = new EBook('Eneida', 'Ivan Kotliarevsky', 1798, 'doc');

ebook1.printInfo();
ebook2.printInfo();
ebook3.printInfo();
console.log('----------------------------------------------------------------------------------');

//task3
console.log('task3')
const book4 = new EBook("Kobzar", "Taras", 1840, "pdf");
book4.title = "aa";
console.log(book4.title, book4.author, book4.published, book4.fileFormat);
book4.author = 25;
console.log(book4.title, book4.author, book4.published, book4.fileFormat);
book4.published = "Hello";
console.log(book4.title, book4.author, book4.published, book4.fileFormat);
book4.fileFormat = "txt";
console.log(book4.title, book4.author, book4.published, book4.fileFormat);
console.log('----------------------------------------------------------------------------------');

//task4
console.log('task4')
const books = [book1, book2, book3];
console.log(Book.getOldestBook(books));
console.log('----------------------------------------------------------------------------------');

//task5
console.log('task5')
console.log(EBook.fromBook(book2, "txt"));