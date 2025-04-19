let colours = ["red", "green", "blue", "yellow", "mediumpurple", "deeppink"];

setInterval(() => {
    let first = colours.pop();
    colours.unshift(first);
    document.getElementById("first").style.backgroundColor = colours[0];
    document.getElementById("second").style.backgroundColor = colours[1];
    document.getElementById("third").style.backgroundColor = colours[2];
    document.getElementById("fourth").style.backgroundColor = colours[3];
    document.getElementById("fifth").style.backgroundColor = colours[4];
    document.getElementById("last").style.backgroundColor = colours[5];
}, 1000);
