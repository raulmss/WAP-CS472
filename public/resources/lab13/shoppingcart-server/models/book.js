let books = [];
let nextId = 0;

module.extports = class Book{
    //Constructor
    constructor(title, isbn, publishedDate, author){
        this.title = title;
        this.isbn = isbn;
        this.publishedDate = publishedDate;
        this.author = author;
    }

    save(){
        this.id = nextId++;
        books.push(this);
        return this;
    }

    update(){
        const index = books.findIndex(p => p.id === this.id);
        if(index >-1){
            books.splice(index, 1, this);
            return this;
        }else{
            throw new Error('Not Found')
        }
    }

    static fetchAll(){
        return books;
    }

    static findById(bookId){
        const index = books.findIndex(p => p.id === bookId);
        if(index >-1){
            return books[index];
        }else{
            throw new Error('Not Found');
        }
    }

    static deleteById(bookId){
        const index = books.findIndex(p => p.id == bookId);
        if(index >-1){
          books = books.filter(p => p.id !== bookId);
        }else{
            throw new Error('Not Found');
        }
    }
}