
      
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById ("campo-pesquisa").value

    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma célula ou função</p>"
        return 
    }
   
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descrição = "";
    
    
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                    <h2>
                        <a href="#" target= "_blank">${dado.titulo}</a>
                    </h2>
                     <img src=${dado.imagem}>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank"> Mais Infos</a>
                </div>`;

        }
                
    
    }
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML =  resultados
}


