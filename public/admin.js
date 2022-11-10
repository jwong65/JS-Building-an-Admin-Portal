
// Your Code Here

// function updateBook(bookId){
// fetch("http://localhost:3001/updateBook",{
// 	method:"PATCH",
// 	Headers:{
//       'Content-Type': 'application/json'
//       },
// body: JSON.stringify({
//     id : bookId,
//     title : "Legends of Arathrae",
// })
// })
// }

async function main() {

    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    books.forEach(renderBook)
}

function renderBook(book) {
    let bookContainer = document.querySelector('.book-container')
    bookContainer.innerHTML += `
        <div class="col-sm-3">
            <div class="card" style="width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Available: 
                        <input type="number" value=${book.quantity}> </input>
                        <button type="button">Submit</button>
                    </h6>

                    <p class="card-text">${book.description}</p>
                </div>
            </div>
        </div>
    `
}

main()