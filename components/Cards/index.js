// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(data){
    //Create Element
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img'),
          authorsName = document.createElement('span');

    //Add Classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author'),
    imgContainer.classList.add('img-container');

    //Organize Elements
    card.append(headline, author, authorsName);
    authorsName.appendChild(imgContainer);
    imgContainer.appendChild(img);

    //Add Content
    headline.textContent = data.headline;
    img.src = data.authorPhoto;
    authorsName.textContent = `By ${data.authorName}`;

    return card;
}

const cardsContainer = document.querySelector('.cards-container')



axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => {
        console.log(res.data.articles);
        const newCard = res.data.articles;
        cardsContainer.appendChild(createCard(newCard))
    })