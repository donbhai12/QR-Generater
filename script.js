let input = document.querySelector("input");
let btn  = document.querySelector("button");
let img = document.querySelector("img")
let download = document.getElementById("download")


btn.addEventListener("click",()=>{
   let inputValue = input.value;
   
   if(inputValue == ""){ 
    alert("Please Enter valid URL")
   }else{
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
      img.alt = `QR code for ${inputValue}`
   }
})


download.addEventListener("click",()=>{
   
   const downloadLink = document.createElement("a");
   downloadLink.href = img.src;
   
   downloadLink.download ="_target.jpg"
   downloadLink.click()
   downloadLink.remove()
   
})
