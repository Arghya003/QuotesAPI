let realData="";

let Quotes = document.getElementById("quotes");
const author=document.getElementById("author");
const newQ= document.getElementById("newQuotes")

const getNewQuotes =()=>{
    let rnum= Math.floor(Math.random()*10);

    console.log(realData[rnum].author);
    Quotes.innerText=`${realData[rnum].text}`;
    author.innerText=` - By ${realData[rnum].author}`
}
const getQuotes= async()=>{

const api= "https://type.fit/api/quotes";
try{
    let data = await fetch(api);
     realData=  await data.json();
     getNewQuotes();
    //console.log(realData);
    //console.log(realData[0].author)
   
console.log
}
catch(error){

}

};
newQ.addEventListener("click",getNewQuotes)
getQuotes();

