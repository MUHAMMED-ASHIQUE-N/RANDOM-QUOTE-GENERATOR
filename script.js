const names = [
  
    "Mahatma Gandhi",
    "Winston Churchill",
    "Nelson Mandela",
    "Martin Luther King Jr",
    "Steve jobs",
    "Mother-Teresa",
    "Confucius",
    "Oscar Wilde",
    "Maya Angelou"

]

const imageArray = [
    './images/Mahatma-Gandhi.jpg',
    './images/Winston-Churchill-1.jpg',
    './images/Nelson-Mandela-1.jpg',
    './images/Martin-Luther-King-Jr-1.jpg',
    './images/Steve-jobs-1.jpg',
    './images/Mother-Teresa-1.jpg',
    './images/Confucius-1.jpg',
    './images/Oscar-Wilde-1.jpg',
    './images/Maya-Angelou-1.jpg'

];





const quote = [
    " 'Be the change that you wish to see in the world.'",
    "'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
    "'It always seems impossible until it’s done.'",
    "'The time is always right to do what is right.'",
    "'Your time is limited, don’t waste it living someone else’s life.'",
    "'Not all of us can do great things. But we can do small things with great love.'",
    "'It does not matter how slowly you go as long as you do not stop.'",
    "'Be yourself; everyone else is already taken.'",
    "'You will face many defeats in life, but never let yourself be defeated.'"
]
function quoteGnerator() {

    document.getElementById("Quote-btn");

    let i = Math.floor(Math.random() * quote.length);
    document.getElementById("image-space").src = imageArray[i];
    
    document.getElementById("quote-paragrah").innerText = quote[i];

}
