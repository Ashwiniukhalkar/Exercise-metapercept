document.addEventListener('DOMContentLoaded', function (){
    cards.json
    fetch('cards.json').then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementsById('cardContainer');

        data.forEach(cardData => {
            const cardElement = document.createElement('div');
            
            cardElement.classList.add('card');

            const limitedDescription = limitWords(cardData.ShortDesc, 20);


            // const limitedDescription
            cardElement.innerHTML = `
            <img src ="${cardData.ImageUrl}"
            alt ="${cardData.Name}"
            class="card-image">
            <h3 class="card-title>${cardData.Name}</h3>
            
            <p class="card-description">${limitedDescription}</p>
            
            <a href="#" class="card-link"> View </a>`;


            cardContainer.appendChild(cardElement);
        });
    })

    .catch(error => {
        console.error('Error fetching data ', error);
    });

    function limitWords(text, limit) {
        const words = text.split(' ');
        const limitedWords = words.slice(0, limit);
        return limitedWords.join(' ') + (words.length > limit ? '...' : '');
        
    }
});

