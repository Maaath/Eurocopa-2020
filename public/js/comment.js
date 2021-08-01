function submitForm(data){
    var selecImg = ["alemanha.jpg","austria.png","belgica.jpg","croacia.jpg","dinamarca.png","escocia.png","eslovaquia.png","espanha.jpg","finlandia.png","franca.jpg","gales.png","holanda.png","hungria.png","inglaterra.png","italia.jpg","macedonia.png","polonia.jpg","portugal.jpg","russia.png","suecia.png","suica.png","tcheca.jpg","turquia.png","ucrania.jpg"]
    var line = `<div class="comment">`
    line += `<h3 class="comment-text">${data.comment}</h3>`
    line += `<hr class="comment-line">`
    line += `<h4 class="comment-name">${data.name}<img class="comment-flag" src="../assets/images/flags/${selecImg[data.selecao]}" alt="Seleção"></h4>`
    for (i=0;i<=5;i++){

        i <= data.rate? line += `<img src="../assets/images/full_star.svg" alt="" class="rate star-${i}"></img>`: `<img src="../assets/images/empty_star.svg" alt="" class="rate star-${i}"></img>` 
    
    }            
                
    line += '</div>'
    cmt = window.document.querySelector(".comments").innerHTML
    cmt += line  
    window.document.querySelector(".comments").innerHTML = cmt         
}

function formValid(){
    var name = window.document.querySelector(".input-name").value
    var selecao = window.document.querySelector(".input-selecao").value
    var email = window.document.querySelector(".input-email").value
    var comment = window.document.querySelector(".input-comment").value
    var rate = window.document.querySelector(".input-star").value
    var msg = ""
    if (!name) msg += "Nome vazio!\n"
    if (!selecao) msg += "Selecione uma seleção!\n"
    if (!email) msg += "Digite um e-mail válido!\n"
    if (!comment) msg += "Digite o seu comentário!\n"
    if (!rate) msg += "Deixe a sua nota para o evento!"

    if (msg) {
        window.alert(msg)
    } else{
        var data = {name,selecao,email,comment,rate}
        submitForm(data)
    } 
    
}

function changeStar(id){
    for(i=1;i<=5;i++){
        var star = window.document.querySelector("#star-"+i)
        i <= id?star.setAttribute("src", "../assets/images/full_star.svg"): star.setAttribute("src", "../assets/images/empty_star.svg")
    }
    window.document.querySelector(".input-star").value = id
}

