var openSideMenu= document.getElementById('open-side-button');
var sideBar = document.getElementById('sidebar');
var topBar = document.querySelector('.interact-top');

openSideMenu.addEventListener('click',function(){
    sideBar.classList.toggle('active');

    if (sideBar.classList.contains('active')){
        topBar.style.marginLeft = '240px';
    } else{
        topBar.style.marginLeft = '0';
    }
});




// // Obter os elementos necessários
// const openSideButton = document.getElementById('open-side-button');
// const sideBar = document.querySelector('.sidebar');
// const iconsTop = document.querySelector('.icons-top');

// // Função para alternar o sidebar
// function toggleSidebar() {
//   sideBar.classList.toggle('sidebar-open');
//   iconsTop.classList.toggle('icons-top-open');
// }

// // Adicionar o evento de clique ao botão "open-side"
// openSideButton.addEventListener('click', toggleSidebar);