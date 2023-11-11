class Book {
    constructor(title, description, author) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.id = Math.random().toString(36).substr(2, 9);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // adicionar livro
    addBook(bookInfo) {
        const book = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(book);
        return book;
    }

    // listar todos os livros
    getBooks() {
        return this.books;
    }

    // remover livro
    removeBookById(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
        }
    }

    // mostrar livro por id
    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    // editar livro por id
    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (!book) {
            return null; // Retorna null se o livro não for encontrado
        }

        if (info.title) {
            book.title = info.title;
        }

        if (info.description) {
            book.description = info.description;
        }

        if (info.author) {
            book.author = info.author;
        }

        return book;
    }
}

// criando uma biblioteca
const library1 = new Library();

// adicionando livros à biblioteca
library1.addBook({ title: 'O Príncipe', description: 'O livro descreve os diferentes tipos de Estado e como cada um afeta a forma de governo do príncipe. Maquiavel defende a seguinte situação: mesmo que o príncipe não seja bom e acabe perdendo o Estado, ele o readquire por pior que seja o ocupante.', author: 'Nicolau Maquiavel' });
library1.addBook({ title: 'Diário de um Banana', description: 'Greg é um garoto comum de 11 anos que vai à escola e enfrenta os desafios da pré-adolescência como milhões de outros. O que o torna tão especial é a vontade de dividir essas experiências com todo mundo, para o caso de tornar-se rico e famoso quando crescer. E é por isso que ele escreve um diário - ou Livro de Memórias.', author: 'Jeff Kinney' });
console.log(library1.getBooks());

// modificando título e autor para versões originais
library1.updateBookById(library1.books[0].id, { title: 'De principatibus', author: "Niccolò Machiavelli" });
console.log(library1.getBooks());

library1.updateBookById(library1.books[1].id, { title: 'Diary of a Wimpy Kid' });
console.log(library1.getBooks());

// removendo livro através do id
library1.removeBookById(library1.books[1].id);
console.log(library1.getBooks());
 
library1.addBook({ title: 'Dúvida Cruel', description: 'Nesse livro, Mari e Iberê, criadores do Manual do Mundo – o canal do YouTube que, em 10 anos, conquistou mais de 14 milhões de inscritos –, reuniram 80 dúvidas cruéis escolhidas a partir das sugestões enviadas por seus seguidores. Aqui você encontrará informações científicas de qualidade com o jeito claro, atraente e divertido que virou marca registrada do canal.', author: 'Manual do Mundo' });
console.log(library1.getBooks())

console.log(library1.getBookById(library1.books[0].id))

// criando uma outra biblioteca
const library2 = new Library()
library2.addBook({ title: 'Dom Quixote', description: 'Dom Quixote é um cavaleiro andante, nomeado por Sancho como “Cavaleiro da Triste Figura”. Isso porque não é belo e impulsionado por sua “loucura” sempre acaba se dando mal. No entanto, sua figura de cavaleiro andante é fomentada pelo lema “fazer o bem” e encontrar sua nobre donzela imaginária.', author: 'Miguel de Cervantes' })
console.log(library2.getBooks())
