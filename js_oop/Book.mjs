export class Book {
    constructor(title, author, published) {
        this._title = title;
        this._author = author;
        this._published = published;
    }
    get title() {
        return this._title;
    }
        get author() {
        return this._author;
    }
    get published() {
        return this._published;
    }
    set title(newTitle) {
        if (newTitle.length <= 2) {
            console.log('The length of this title is so small');
            return;
        }
        this._title = newTitle;
    }
    set author(newAuthor) {
        if (typeof newAuthor !== "string") {
            console.log('Unknown author');
            return;
        }
        this._author = newAuthor;
    }
    set published(newPublished) {
        if (typeof newPublished !== "number") {
            console.log('Date does not exist');
            return;
        }
        this._published = newPublished;
    }
    static getOldestBook (books){
        if (!books.length){
            return null;
        }
        const sortedBooks = [...books].sort((a, b) => a.published - b.published);
        return sortedBooks[0];
    }

    printInfo() {
        console.log(`The Book ${this._title} by ${this._author} was published in ${this._published}`)
    }

}



