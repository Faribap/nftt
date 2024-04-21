let listh=document.querySelector(".hamber")
let ulmy=document.querySelector(".myul")

let group=document.querySelector(".header-down")

listh.addEventListener("click",function(){
	
  ulmy.classList.toggle("mobile");
  
  
  if(ulmy.classList.contains("mobile")){
	  
	group.classList.remove("hmt")  
	  
  }else{
	  
		group.classList.add("hmt")   
	  
  }
	
})

