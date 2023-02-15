let btnEl = document.getElementById("button");
let username=document.getElementById("username");
let password=document.getElementById("password");
let invalidDetails= document.getElementById("errMsg");




btnEl.onclick=function(){
    console.log("Button clicked");
    console.log(username.value,password.value)
    if(username.value=="mahesh" && password.value=="Iot@2023"){
        // console.log("Logged in successfully")
        window.location.replace("dashboard.html");
    }else{
        invalidDetails.textContent="Invalid Credentials!!"
    }
}

// ? for log out button 


