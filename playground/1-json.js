const book = {
     title: 'Ego is the Enmey',
     author: 'Ryan Holiday'
}

console.log(book.author)

const bookJSON = JSON.stringify(book)//take an object and convert into a json
console.log(bookJSON)

const parseBook = JSON.parse(bookJSON)//take a json and convert into an object
console.log(parseBook.author)