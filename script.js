         //Nahidkishore99@gmail.com
         
       //plusButtonQuantity
         function plusButtonQuantity(id){
          const quantity=document.getElementById(id).value;
          const quantityNumber=parseFloat(quantity);
          document.getElementById(id).value=quantityNumber+1;

         }

         //MinusButtonQuantity

          function MinusButtonQuantity(id){
          const quantity=document.getElementById(id).value;
          const quantityNumber=parseFloat(quantity);
          document.getElementById(id).value=quantityNumber-1;


        }

      //current amount button function

        function currentAmountPlusMinus(id, addNumber){

        const currentAmount=document.getElementById(id).innerText;
        const currentAmountNUmber=parseFloat(currentAmount);
        document.getElementById(id).innerText=currentAmountNUmber+addNumber;
      }

      //total subTotal amount function


        function totalSubtotalAmount(id,addNumber){

        const Total=document.getElementById(id).innerText;
        const TotalNUmber=parseFloat(Total);
        document.getElementById(id).innerText=TotalNUmber+addNumber;

      }

                //product Tax function

                function taxAmount(id, addNumber){

                const tax=document.getElementById(id).innerText;
                const taxAmount=parseFloat(tax);
                document.getElementById(id).innerText=taxAmount+addNumber;


              }

              // close Button for product 1

                function closeButton(id){
                const product1 =document.getElementById(id);
                product1.style.display="none";
        }
            
         // For  product  number 1


       // For  product  number 1 plus Button Event handler

      const plusBtn= document.getElementById("plus");
      plusBtn.addEventListener("click", function(){
       

                plusButtonQuantity("quantity")

                currentAmountPlusMinus("currentAmount", 120)

                totalSubtotalAmount("subTotal", 120);

                totalSubtotalAmount("Total", 120);

                taxAmount("tax", 1);
                



})


          // For  product  number 1 Minus Button Event handler


            const minusBtn=document.getElementById("minus");
            minusBtn.addEventListener("click", function(){
            
               MinusButtonQuantity("quantity");

               currentAmountPlusMinus("currentAmount", -120)

               totalSubtotalAmount("subTotal", -120); 

               totalSubtotalAmount("Total", -120);
          
                //tax

            taxAmount("tax", -1);


})

            // product2 event handler

            // product2 event handler plus Button event handler

            const plus1Btn= document.getElementById("plus1");
            plus1Btn.addEventListener("click", function(){
              

                 plusButtonQuantity("quantity1");

              
                 currentAmountPlusMinus("currentAmount1",50);
                 totalSubtotalAmount("subTotal", 50);

                 totalSubtotalAmount("Total", 50);


                //tax
                  
                taxAmount("tax", 1);

              })

     // product2 event handler minus Button event handler


            const minus1Btn=document.getElementById("minus1");
            minus1Btn.addEventListener("click", function(){

              
                MinusButtonQuantity("quantity1");
                currentAmountPlusMinus("currentAmount1",-50);

                totalSubtotalAmount("subTotal", -50);

                totalSubtotalAmount("Total", -50);

                    //tax
                    taxAmount("tax", -1);
            })

        // close Button for product 1

          const closeButton1=document.getElementById("closeButton1");
          closeButton1.addEventListener("click", function(){
          
          closeButton("product1");
        }) 

        // close Button for product 2

          const closeButton2=document.getElementById("closeButton2");
          closeButton2.addEventListener("click", function(){
        
          closeButton("product2");
        }) 

     //purchased confirm
          const checkout=document.getElementById("checkout");
          checkout.addEventListener("click", function(){
          const cartArea=document.getElementById("cartArea");
          cartArea.style.display="none";
          const purchaseArea=document.getElementById("purchase-area");
          purchaseArea.style.display="block";
        })