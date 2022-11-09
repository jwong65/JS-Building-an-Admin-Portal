
// Your Code Here
function updateBook(bookId){
fetch("http://localhost:3001/updateBook",{
	method:"PATCH",
	Headers:{
      'Content-Type': 'application/json'
      },
body: JSON.stringify({
    "id": bookId,
    "title": "Legends of Arathrae",
})
})
}