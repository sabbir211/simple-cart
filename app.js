function inputUpdate(inputField, isIncrease) {
 const input=document.getElementById(inputField)
 let inputNum=parseInt(input.value)
 if(isIncrease){
    input.value=inputNum+1
 }
 else if(inputNum>0)
 input.value=inputNum-1
 
}

function priceUpdate(priceId,taka,isIncrease) {
    const price=document.getElementById(priceId)
    let priceNum=parseInt(price.innerText)
const tk=parseInt(taka)
if(isIncrease){
    price.innerText=priceNum+tk
    subTotalUpdate(price.innerText,true)
    grandTotal()
   
}
else if(priceNum>0){
    price.innerText=priceNum-tk
    subTotalUpdate(price.innerText,false)
grandTotal()
}
}
function subTotalUpdate(newPrice,isIncrease) {
    let getSubtotal=document.getElementById('subTotal');
    const subTotalNum=parseInt(getSubtotal.innerText);
    const newPriceNum=parseInt(newPrice)
    if (isIncrease) {
   getSubtotal.innerText= subTotalNum+newPriceNum;

    } else {
        getSubtotal.innerText= subTotalNum-newPriceNum;
   
    }  
   taxUpdate(getSubtotal.innerText)
}
function taxUpdate(price) {
    const taxField=document.getElementById("tax");
    // const taxText=taxField.innerText;
    // const taxNum=parseInt(taxText)
    const priceNum=parseInt(price)
    const calculateTax=(10*priceNum)/100
    taxField.innerText=calculateTax;
}
function grandTotal() {
const subTotal=document.getElementById("subTotal") 
const subTotalNum=parseFloat(subTotal.innerText)   
const tax=document.getElementById("tax") 
const taxNum=parseFloat(tax.innerText)
const totalField=document.getElementById('total')
totalField.innerText=subTotalNum+taxNum
}
document.getElementById("phonePlusBtn").addEventListener("click",function(){
    inputUpdate("phoneInput", true)
    priceUpdate("phonePrice", 1219 ,true)


})
document.getElementById("phoneMinusBtn").addEventListener("click",function(){
    inputUpdate("phoneInput" ,false)
    priceUpdate("phonePrice", 1219,false )
    // subTotalUpdate(price.innerText,false)
    
})
document.getElementById("casePlusBtn").addEventListener("click",function(){
    inputUpdate("caseInput", true)
    priceUpdate("casePrice", 59 ,true)
    // subTotalUpdate(price.innerText,true)

})
document.getElementById("caseMinusBtn").addEventListener("click",function(){
    inputUpdate("caseInput" ,false)
    priceUpdate("casePrice", 59,false ) 
    // subTotalUpdate(price.innerText,false)

})