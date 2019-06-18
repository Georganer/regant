words=['б','в','г','д','ж','з','й','к','л','м','н','п','р','с','т','ф','х','ц','ч','ш','щ','а','е','и','о','у','ы','э','ю','я']

function createBlock(id, wrd) {
    let mainCont=document.getElementById(id);
    let len=wrd.length
    for(i=0;i<len;i++){
        
        var newDiv = document.createElement("div");
        newDiv.className = "litter_style";
        newDiv.innerHTML=words[i];
        mainCont.appendChild(newDiv);
    };
    
};

createBlock("litter_field", words); 

