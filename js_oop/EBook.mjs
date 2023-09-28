import {Book} from "./Book.mjs";

 export class EBook extends Book {
    constructor(title, author, published, fileFormat) {
        super(title, author, published);
        this._fileFormat = fileFormat;
    }
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(newFileFormat) {
        if (newFileFormat !== "pdf" || newFileFormat !== "epub" || newFileFormat !== "doc") {
            console.log('We have no books in your format');
            return;
        }
        this._fileFormat = newFileFormat;
    }

    static fromBook(Book, fileFormat){
        return new EBook(Book.title, Book.author, Book.published, fileFormat);
    }
    printInfo() {
        console.log(`The Book ${this.title} by ${this.author} was published in ${this.published} and has ${this.fileFormat} format`)
    }
}


