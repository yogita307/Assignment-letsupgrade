let person, button , results, endButton, winMessage
   person = document.querySelectorAll("input")
   button = document.querySelectorAll(".dice")
   results = document.querySelectorAll("span")
   endButton = document.querySelector("#endgame")
   winMessage = document.querySelector("#winMessage")

    endButton.disabled = true
   
   // identify clicks 
    let i
   for( i = 0; i<button.length; i=i+1){
       button[i].addEventListener("click", rollDice)
   }
   let click = 0
   function rollDice(e){
       click = click +1 
       if(click == 5){
        endButton.disabled = false
       }
       user_id = e.target.id
       button[user_id - 1].disabled = true
       dice_options = [1,2,3,4,5,6] 
       random = parseInt(Math.random()* dice_options.length) 
       dice_results = dice_options[random]
       results[user_id - 1].innerText = dice_results
   }
   
   endButton.addEventListener("click", Winner)

   function Winner(){
    endButton.disabled = true
       max = 0
        pos = []
        for(i = 0; i<=4; i++){
            if(results[i].innerText > max ){
                max = results[i].innerText
                
            }}
         for(i=0;i<=4;i++)   {
            if(results[i].innerText == max ){
                pos.push(i)
            }
         }
         let names=""
         for(t of pos){
             names = names +person[t].value + "\n"
         }
        
        
         winMessage.innerText = "****Congratulations!!! \n"+ "The Winner/s   : \n " + names + "****" 
        

   }