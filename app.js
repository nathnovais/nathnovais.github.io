let words = ['you', 'world', 'man', 'woman', 'child'];

function randomWord() {
    console.log("function ok");
    let randomNumber = Math.floor(Math.random() * words.length);
    console.log(randomNumber);
     
    document.getElementById("new-word").innerHTML = words[randomNumber];
};

