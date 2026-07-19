const book = { author: { firstname: "", lastname: "" } }
const book2 = {}                                                    //objects that are empty are truthy!

let book2Author = book2.author.lastname

if (book2.author) {
    if (book2.author.lastname) {
        authorLast = book2.author.lastname
    }
}

authorLast = book2?.author?.lastname                 //if book2 or author doesn't exist then undefined is returned.

// Nullish coalescing operator --elvis operator
authorLast = book2?.author?.lastname ?? "Unknown"      // ?? -> coalescing operator --syntactic sugar of trinity.


if (book.hasOwnProperty('author')) {
    console.log(book.author)
}