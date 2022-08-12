//Example fetch using openlibrary
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const ISBN = document.querySelector('input').value
  console.log(ISBN)
  const url = `https://openlibrary.org/isbn/${ISBN}.json` // 0451526538

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if(!localStorage.getItem('books')){
          localStorage.setItem('books', data.title)
        } else {
          let books = localStorage.getItem('books') + ',' + data.title;
          localStorage.setItem('books', books);
        }

        document.querySelector('h2').innerText = localStorage.getItem('books');
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

