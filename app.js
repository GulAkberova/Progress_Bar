let progress=document.querySelector('.progress_mini')
let add=document.getElementById('add')
let span=document.querySelector('span')
let play='prog 2s '
 
let count=0
let x=true
add.addEventListener('click',()=>{
    count+=1
    span.innerHTML=count
    
    if(x){
        progress.style.animation=play
        span.innerHTML=count
         x=false
       
    }else{
        progress.style.animation=play
        x=true
    }
    console.log(x)
    
   
 
    

})
