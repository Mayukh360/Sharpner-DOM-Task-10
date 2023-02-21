


document.getElementById("myButton").onclick= function(){
  
    let myName=document.getElementById("name").value;
    let myEmail=document.getElementById("email").value;
   
    localStorage.setItem(myName , myEmail)
    //retrive an item from storage
    //let name= localStorage.getItem(myName)
    
    
}

//localStorage.clear() -->clear local storage
