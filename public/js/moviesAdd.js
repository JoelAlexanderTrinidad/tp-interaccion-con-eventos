window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', ({target})=> { // en realidad es e.target
        target.classList.toggle('fondoRojo')
    })

    let title = document.getElementById('titulo')
    let secreto = ['s','e','c','r','e','t','o']
    let i = 0

    title.addEventListener('keyup', (e) => {
        if(e.key === secreto[i]){
            i++
            if(e.key === secreto[6]){
                alert('¡SECRETO MÁGICO!')
            }
        }else{
            i = 0
            title.value = null
        }
    })
}