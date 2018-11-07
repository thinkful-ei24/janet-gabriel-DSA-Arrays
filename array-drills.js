/* eslint-disable no-empty */
/* eslint-disable indent */
//URLify a string

const URLify = str=>{
    let newUrl= '';

    for (let i=0; i<str.length; i++){
        if(str[i] !== ' '){
            newUrl += str[i];
        } else {
            newUrl += '%20';
        }
    }
    return newUrl;
};

console.log(URLify('www.thinkful.com /tauh ida parv een'));