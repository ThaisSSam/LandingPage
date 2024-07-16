const LinkCategoria = document.getElementById('link-categorias');
const LinkAmbiente = document.getElementById('link-ambient');
const LinkLoja = document.getElementById('link-loja');
const LinkContato = document.getElementById('link-contato');

const Categorias = document.getElementById('categorias');
const Ambient = document.getElementById('ambient');
const Loja = document.getElementById('loja');
const Contato = document.getElementById('contato');


LinkCategoria.addEventListener("click", function(){
    Categorias.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
LinkAmbiente.addEventListener("click", function(){
    Ambient.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
LinkLoja.addEventListener("click", function(){
    Loja.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
LinkContato.addEventListener("click", function(){
    Contato.scrollIntoView({ block: 'center',  behavior: 'smooth' });
});
