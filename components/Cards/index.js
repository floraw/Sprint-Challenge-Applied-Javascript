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

function createCard(headline, photo, name) {
    let myCard = document.createElement("div");
    myCard.classList = "card";

    let myHeadline = document.createElement("div");
    myHeadline.classList = "headline";
    myHeadline.textContent = headline;
    myCard.appendChild(myHeadline);

    let myAuthor = document.createElement("div");
    myAuthor.classList = "author";
    myCard.appendChild(myAuthor);

    let imageContainer = document.createElement("div");
    imageContainer.classList = "img-container";
    myAuthor.appendChild(imageContainer);

    let authorPhoto = document.createElement("img");
    authorPhoto.src = photo;
    imageContainer.appendChild(authorPhoto);

    let authorName = document.createElement("span");
    authorName.textContent = `By ${name}`;
    myAuthor.appendChild(authorName);

    return myCard;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        let myData = Object.values(response.data.articles);
        let cardContainer = document.querySelector(".cards-container");

        myData.forEach(array => {
            array.forEach(card => {
                let newCard = createCard(card.headline, card.authorPhoto, card.authorName);
                cardContainer.appendChild(newCard);
            })
        })

    })
    .catch(error => {
        console.log("Error: ", error);
    })