let bookMarkFormEl = document.getElementById("bookMarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let errorMsgForSiteNameEl = document.getElementById("errorMsgForSiteName");
let errorMsgForSiteUrl = document.getElementById("errorMsgForSiteUrl");
let submitBtnEl = document.getElementById("submitBtn");
let listContainerEl = document.getElementById("listContainer");





siteNameInputEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        errorMsgForSiteNameEl.textContent = "*Required";
    }else{
        errorMsgForSiteNameEl.textContent = ""
    }
});

function submitData(){
    let siteName = siteNameInputEl.value;
    let siteURL = siteUrlInputEl.value;
    let listItem = document.createElement("li");
    listContainerEl.appendChild(listItem);
    let bookmarkName = document.createElement("p");
    let bookmarkUrl = document.createElement("a");
    bookmarkName.textContent = siteName;
    bookmarkUrl.textContent = siteURL;
    bookmarkUrl.href = siteURL;
    bookmarkUrl.setAttribute("target", "_blank");
    bookmarksList.classList.toggle("d-none");
    listItem.appendChild(bookmarkName);
    listItem.appendChild(bookmarkUrl); 
};

siteUrlInputEl.addEventListener("change",function(event){
    if(event.target.value === ""){
        errorMsgForSiteUrl.textContent = "*Required";
    }else{
        errorMsgForSiteUrl.textContent = "";
    }
});



bookMarkFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    submitData();
})