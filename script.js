Loader=document.getElementById("loader")
QuoteContaner=document.getElementById("QuoteC")
let quotes =[]
async function getQuote(){
    l()
    const apiurl ="https://type.fit/api/quotes"
    try {
        const response = await fetch(apiurl)
        quotes= await response  .json()
        console.log(quotes)
        
        myFunction()
    } catch (error) {
        
    }
    c()
    
}
getQuote()

function myFunction(){
    let randquote = quotes[Math.floor(Math.random() * quotes.length)]
    console.log(randquote.text)
    document.getElementById("Quote").textContent= randquote.text
    document.getElementById("A").textContent = randquote.author


}

function l(){
    Loader.hidden=false
    QuoteContaner.hidden=true
}
function c(){
    Loader.hidden=true
    QuoteContaner.hidden=false
}