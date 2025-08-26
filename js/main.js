var body = document.querySelector("body");
var header = document.getElementById("header");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var purple = document.getElementById("purple");
var orange = document.getElementById("orange");
var teal = document.getElementById("teal");
var btnVisit = document.getElementById("visit");
var error = document.getElementById("error");
var error2 = document.getElementById("error2");

var bookmarkNameInput = document.getElementById("bookmarkName");
var websiteUrlInput = document.getElementById("websiteUrl");
var btnSubmit = document.getElementById("btnSubmit");
var tBody = document.getElementById("tBody");



function darkMode()
{
    body.classList.add("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.remove("teal");
    header.classList.add("smooth");

}
function lightMode()
{
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.remove("teal");
    header.classList.add("smooth");

}
function redMode(){
    body.classList.remove("dark");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.remove("teal");
    body.classList.add("red");
    header.classList.add("smooth");
    
}
function greenMode(){
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.remove("teal");
    body.classList.add("green");
    header.classList.add("smooth");
    
}
function blueMode(){
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.remove("teal");
    body.classList.add("blue");
    header.classList.add("smooth");
    
}
function purpleMode(){
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("orange");
    body.classList.remove("teal");
    body.classList.add("purple");
    header.classList.add("smooth");
    
}
function orangeMode(){
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("teal");
    body.classList.add("orange");
    header.classList.add("smooth");
    
}
function tealMode(){
    body.classList.remove("dark");
    body.classList.remove("red");
    body.classList.remove("green");
    body.classList.remove("blue");
    body.classList.remove("purple");
    body.classList.remove("orange");
    body.classList.add("teal");
    header.classList.add("smooth");
    
}
moon.addEventListener("click" , darkMode);
sun.addEventListener("click" , lightMode);
red.addEventListener("click" , redMode);
green.addEventListener("click" , greenMode);
blue.addEventListener("click" , blueMode);
purple.addEventListener("click" , purpleMode);
orange.addEventListener("click" , orangeMode);
teal.addEventListener("click" , tealMode);



var regexNameInput = /^[A-Za-z]{3,}$/;
var regexUrlInput = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)$/

function validationNameInput(){
    if(regexNameInput.test(bookmarkNameInput.value) == false)
    {
        bookmarkNameInput.classList.add("is-invalid");
        bookmarkNameInput.classList.add("in-valid");
        bookmarkNameInput.classList.remove("is-valid");
        bookmarkNameInput.classList.remove("valid");
        error.classList.remove("opacity-0");
        error.classList.add("error");
        btnSubmit.setAttribute("disabled" , "true");
        if(bookmarkNameInput.value == "")
            {
                error.classList.add("opacity-0");
                bookmarkNameInput.classList.remove("in-valid");
                bookmarkNameInput.classList.remove("is-invalid");
                
            }
        return false;
    }
    else
    {
        bookmarkNameInput.classList.add("is-valid");
        bookmarkNameInput.classList.add("valid");
        error.classList.add("opacity-0");
        bookmarkNameInput.classList.remove("is-invalid");
        bookmarkNameInput.classList.remove("in-valid");
        btnSubmit.removeAttribute("disabled");
         
        return true;
    }
    
}

function validationUrlInput(){
    if(regexUrlInput.test(websiteUrlInput.value) == false)
    {
        websiteUrlInput.classList.add("is-invalid");
        websiteUrlInput.classList.add("in-valid");
        websiteUrlInput.classList.remove("is-valid");
        websiteUrlInput.classList.remove("valid");
        error2.classList.remove("opacity-0");
        error2.classList.add("error2");
        btnSubmit.setAttribute("disabled" , "true");
        if(websiteUrlInput.value == "")
            {
                error2.classList.add("opacity-0");
                websiteUrlInput.classList.remove("in-valid");
                websiteUrlInput.classList.remove("is-invalid");
                
            }
        return false;
    }
    else
    {
        websiteUrlInput.classList.add("is-valid");
        websiteUrlInput.classList.add("valid");
        error2.classList.add("opacity-0");
        websiteUrlInput.classList.remove("is-invalid");
        websiteUrlInput.classList.remove("in-valid");
        btnSubmit.removeAttribute("disabled");
         
        return true;
    }
    
}

bookmarkNameInput.addEventListener("input" , validationNameInput);
websiteUrlInput.addEventListener("input" , validationUrlInput);

var bookmarkList;
if(localStorage.getItem("bookmarks") != null)
{
    bookmarkList = JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmark(bookmarkList)
}
else
{
    bookmarkList = [];
}
//add website func
function addBookmark(){
   if(validationNameInput() == true && validationUrlInput() == true)
   {
    var bookmark = {
        name : bookmarkNameInput.value,
        url : websiteUrlInput.value
    }

    bookmarkList.push(bookmark);
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarkList));
    clearBookmark();
    displayBookmark(bookmarkList);
    bookmarkNameInput.classList.remove("is-valid");
    websiteUrlInput.classList.remove("is-valid");
    bookmarkNameInput.classList.remove("valid");
    websiteUrlInput.classList.remove("valid");
    btnSubmit.setAttribute("disabled" , "true");
    }
   
}


//clear bookmark func
function clearBookmark(){
    bookmarkNameInput.value = null;
    websiteUrlInput.value = null;
}

//display bookmark func
function displayBookmark(arr){
    var cartoona ="";
    for(var i = 0 ; i < arr.length ; i++)
    {
        cartoona +=`<tr>
                    <td>${i}</td>
                    <td>${arr[i].name}</td>
                    <td><a href="${arr[i].url}" target="_blank"><button id="visit" class="btn btn-visit"><i class="fas fa-eye"></i> Visit</button></a></td>
                    <td><button onclick="deleteBookmark(${i})" class="btn btn-delete"><i class="fas fa-trash-can"></i> Delete</button></td>
                  </tr>`
    }
    tBody.innerHTML = cartoona;
}

// delete bookmark func
function deleteBookmark(deleteIndex){
    bookmarkList.splice(deleteIndex , 1);
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarkList))
    displayBookmark(bookmarkList);

}
btnSubmit.addEventListener("click" , addBookmark);




