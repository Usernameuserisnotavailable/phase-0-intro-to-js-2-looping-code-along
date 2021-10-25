// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"];
const gifts = [];

function writeCards(name, event) {

    let messages = [];

    for(let i = 0; i < names.length; i++) 

    { messages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`); }

    return messages;
}

function countDown(i) {
    while(i >= 0) 
    { 
        console.log(i); 
        i --;
    }

}