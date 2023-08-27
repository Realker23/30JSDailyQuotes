const quoteApi = "https://api.quotable.io/random";
const quoteElement = document.querySelector(".quoteCard blockquote");
const author = document.querySelector(".quoteCard span");

async function apiresponse(url){
    const response = await fetch(url);
    let quoteData = await response.json();

    quoteElement.innerHTML = quoteData.content;
    author.innerHTML = quoteData.author;    
}
apiresponse(quoteApi);

function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${quoteElement.innerHTML} --- by ${author.innerHTML}`,"Tweet Window", "width=600px, height=300px");
}