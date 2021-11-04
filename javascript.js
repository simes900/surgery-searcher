let userInput = document.getElementById("searchquery")

userInput.addEventListener("keyup",function(event){ //event is every key pressed
    userSearchWord = event.target.value.toLowerCase(); //the search word is built up. 
    let listName = document.getElementsByClassName("name"); // store DOM list
    console.log(userSearchWord)
    console.log(listName[0].textContent.toLowerCase())
    let listBox = listName;
    console.log(listBox)
    //console.log(listName.length)
   // console.log(listName[0].textContent)
   
   for(let i =0; i < listName.length; i++){
       // console.log(userSearchWord)
       // console.log(listName[0].textContent.toLowerCase()) 
        searchQuery = listName[i].textContent.toLowerCase();
        
       if(searchQuery.includes(userSearchWord)){
           listName[i].style.display="block";
           
       }
       else{
           listName[i].style.display="none"
       }
   }
})



