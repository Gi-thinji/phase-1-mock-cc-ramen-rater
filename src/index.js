// write your code here

//--------//

//function to render out DOM Content
function renderImagesToDOM(ramen){
    //Add images
    //console.log(ramen.image)
    let ramenImages=document.createElement("img")
    //console.log(ramenImages)
    ramenImages.src=ramen.image
    //ramenImages.dataset.id = ramen.id
    //console.log(ramenImages.src)
    const ramenMenu = document.getElementById("ramen-menu")
    ramenMenu.appendChild(ramenImages)
    //console.log(ramenMenu)
    
    ramenImages.addEventListener("click",()=> {
        renderRamenDetails(ramen)
    }
    )
   
}   

//function to render ramen details upon respective click event
function renderRamenDetails(ramen){
    //Insert Restaurant name
   let restaurantName = document.querySelector(".restaurant")
   restaurantName.textContent = ramen.restaurant

    //Insert Ramen
   let ramenName = document.querySelector(".name") 
    //console.log(ramenName)
    ramenName.textContent = ramen.name

    //insert rating
   let ramenRating = document.querySelector("#rating-display")
    //console.log(ramenRating)
    ramenRating.textContent = ramen.rating

    //insert comment
    let ramenComment= document.querySelector("#comment-display")
    //console.log(ramenComment)
    ramenComment.textContent = ramen.comment

    //insert ramen detail image
    let ramenDetailImage = document.querySelector(".detail-image")
    ramenDetailImage.src=ramen.image

}








//function to fetch data from local host
function fetchData (){
    fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramenData => ramenData.forEach(ramen => renderImagesToDOM(ramen)))
}

//function to start invokation
function intializeAll(){
    fetchData()
}

intializeAll()