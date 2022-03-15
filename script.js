var memeImageEl, titleEl, authorEl
memeImageEl = document.getElementById('memeImage')
titleEl = document.getElementById('title')
authorEl = document.getElementById('author')

function loadMeme(){
  fetch('https://meme-api.herokuapp.com/gimme')
      .then(jsonData => jsonData.json())
      .then(data => response(data))
      .catch((err) => {
        alert('Hmmm... Looks like There was an error :/')
      })

  let response = (data) => {
    console.log(data)
    var authorOfMeme, title, imageUrl, postLink, ups;
    authorOfMeme = data.author
    title = data.title
    imageUrl = data.url
    postLink = data.postLink
    ups = data.ups
    console.log(postLink)
    
    memeImageEl.style.backgroundImage = "url('"+imageUrl+"')";
    titleEl.innerText = title
    titleEl.href=postLink; 
    authorEl.innerText = "By " + authorOfMeme
}}