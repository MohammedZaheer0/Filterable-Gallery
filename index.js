let Button = document.querySelectorAll(".btn");
let StoreImge = document.querySelectorAll(".item");

Button.forEach((value)=>{
    value.addEventListener("click",function(e){
        e.preventDefault();
        let filter = e.target.dataset.filter;
        
        StoreImge.forEach((img)=>{
            if(filter === "all"){
                img.style.display = "block"
            }
            else{
                if(img.classList.contains(filter)){
                    img.style.display = "block";
                }
                else{
                    img.style.display = "none";
                }
            }
        });

    });
});
