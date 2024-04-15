const Base_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/latest/currencies"

const dropdowns =document.querySelectorAll(".dropdown select")
const btn = document.querySelector("form button");
const fromcurr = document.querySelector(".from select");
const tocurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

let i=0;
for(let select of dropdowns)
{
    for(currcode in countryList)
    {
        let newoption = document.createElement("option");
        newoption.innerText= currcode;
        newoption.value= currcode;
        select.append(newoption);
if(select.name==="from" && currcode ==="USD")
{
    newoption.selected="selected";
   
}
else if(select.name==="To" && currcode ==="INR")
{
    newoption.selected="selected";
}
    }
select.addEventListener("change",(evt)=>{
    updateflag(evt.target);

});

        
    
}

const updateflag = (element)=>{
    
    let currcode = element.value;
    let countrycode=countryList[currcode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img = element.parentElement.querySelector("img");
img.src=newsrc;
};






btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(".amount input ")
    let amtval = amount.value;
    console.log(amtval);
    if(amtval===""|| amtval<1)
    {
        amtval=1;
        amount.value="1";
    }

 console.log(fromcurr.value);
// console.log(tocurr.value);
const url = `${Base_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response = await fetch(url);
let data = await response.json();
let rate = data[tocurr.value.toLowerCase()];
let finalamt = amt.value*rate;
console.log(response)
msg.innerText= `${amtval} ${fromcurr.value}=${finalamt}${tocurr.value}`;


})