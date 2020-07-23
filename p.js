         
         
     
         
         
         
         
         // For  product 1


   // plus Button Event handler

   const plusBtn= document.getElementById("plus");
   plusBtn.addEventListener("click", function(){
     const quantity=document.getElementById("quantity").value;
     const quantityNumber=parseFloat(quantity);
     document.getElementById("quantity").value=quantityNumber+1;



     const currentAmount=document.getElementById("currentAmount").innerText;
     const currentAmountNUmber=parseFloat(currentAmount);
     document.getElementById("currentAmount").innerText=currentAmountNUmber+120;


     const subTotal=document.getElementById("subTotal").innerText;
     const subTotalNUmber=parseFloat(subTotal);
     document.getElementById("subTotal").innerText=subTotalNUmber+120;


     const Total=document.getElementById("Total").innerText;
     const TotalNUmber=parseFloat(subTotal);
     document.getElementById("Total").innerText=TotalNUmber+120;




})


//Minus Button Event handler


const minusBtn=document.getElementById("minus");
minusBtn.addEventListener("click", function(){
const quantity=document.getElementById("quantity").value;
const quantityNumber=parseFloat(quantity);
document.getElementById("quantity").value=quantityNumber-1;


const currentAmount=document.getElementById("currentAmount").innerText;
const currentAmountNUmber=parseFloat(currentAmount);
document.getElementById("currentAmount").innerText=currentAmountNUmber-120;


const subTotal=document.getElementById("subTotal").innerText;
const subTotalNUmber=parseFloat(subTotal);
document.getElementById("subTotal").innerText=subTotalNUmber-120;


const Total=document.getElementById("Total").innerText;
const TotalNUmber=parseFloat(Total);
document.getElementById("Total").innerText=TotalNUmber-120;



})

// product2 event handler

//plus Button 

const plus1Btn= document.getElementById("plus1");
plus1Btn.addEventListener("click", function(){
const quantity1= document.getElementById("quantity1").value;
const quantity1Number=parseFloat(quantity1);
document.getElementById("quantity1").value=quantity1Number+1;

const currentAmount=document.getElementById("currentAmount1").innerText;
const currentAmountNUmber=parseFloat(currentAmount);
document.getElementById("currentAmount1").innerText=currentAmountNUmber+50;


const subTotal=document.getElementById("subTotal").innerText;
const subTotalNUmber=parseFloat(subTotal);
document.getElementById("subTotal").innerText=subTotalNUmber+50;


const Total=document.getElementById("Total").innerText;
const TotalNUmber=parseFloat(Total);
document.getElementById("Total").innerText=TotalNUmber+50;



})

//minus Button


const minus1Btn=document.getElementById("minus1");
minus1Btn.addEventListener("click", function(){

const quantity1=document.getElementById("quantity1").value;
const quantity1Number=parseFloat(quantity1);
document.getElementById("quantity1").value=quantity1Number-1;


const currentAmount1=document.getElementById("currentAmount1").innerText;
const currentAmount1NUmber=parseFloat(currentAmount1);
document.getElementById("currentAmount1").innerText=currentAmount1NUmber-50;


const subTotal= document.getElementById("subTotal").innerText;
const subTotalNUmber=parseFloat(subTotal);
document.getElementById("subTotal").innerText=subTotalNUmber-50;

const Total= document.getElementById("Total").innerText;
const TotalNUmber=parseFloat(Total);
document.getElementById("Total").innerText=TotalNUmber-50;




})

// close Button for product 1

const closeButton1=document.getElementById("closeButton1");
closeButton1.addEventListener("click", function(){
const product1 =document.getElementById("product1");
product1.style.display="none";
})

// close Button for product 2

const closeButton2=document.getElementById("closeButton2");
closeButton2.addEventListener("click", function(){
const product2 =document.getElementById("product2");
product2.style.display="none";
})




