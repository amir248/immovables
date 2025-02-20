// ------------------------------------------------------------------------------------------------------------------***------------------------------------------------------------------------------------------------------------------------------
// path with menu -> const menuList.pathMenuList! this install all menu.
// background menu it's menuList.background, that green/
// if change link at menu -> menuList.ulol
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/
if(window.innerWidth>900){
    document.querySelector('#menuDiv').style.display="none";
}
const menuList={
    ulol : '<a href="/">Главная</a><a href="/about">О нас</a><a href="#">Вся недвижимость</a><a href="#">Аренда</a><a href="#">Продажа</a><a href="#">Контакты</a>',
    background : "#A29494",
    pathMenuList : "header > nav"
}
window.addEventListener('DOMContentLoaded',menuFromLanding);
function menuFromLanding(){
    let menuDiv=document.createElement('div'); /* maybe NAV */
    // menuDiv.innerHTML='menuOpen';
    menuDiv.setAttribute('id','menuDiv');
    document.querySelector(`${menuList.pathMenuList}`).append(menuDiv); /* body tag in which the menu is inserted. If you put main, then the menu wil be in the main tag or you can put it in the nav tag. */
    let menuCss=document.createElement('link');
    menuCss.setAttribute('rel','stylesheet');
    menuCss.setAttribute('href','menu/menuFromLanding.css');
    document.querySelector('head').append(menuCss);

    let stickOne=document.createElement('span');
    stickOne.classList.add('lineMenu');
    document.querySelector('#menuDiv').append(stickOne);
    let stickTwo=document.createElement('span');
    stickTwo.classList.add('lineMenu');
    document.querySelector('#menuDiv').append(stickTwo);
    let stickThree=document.createElement('span');
    document.querySelector('#menuDiv').append(stickThree);
    stickThree.classList.add('lineMenu');

   
    document.querySelector('#menuDiv').addEventListener('click',openMenu);

   

    function openMenu(){
        let sheetsMenu=document.createElement('div');
        sheetsMenu.classList.add('openMenu');
        document.querySelector(`${menuList.pathMenuList}`).prepend(sheetsMenu);
        console.log('open');
            
        setTimeout(()=>{
            document.querySelector('.openMenu').style.cssText=`
                height:100vh;
                opacity:1;
                font-size:33px;
                `;
            document.querySelector('.openMenu').style.background=`${menuList.background}`;
        },100);
        document.querySelector('.openMenu').innerHTML=`${menuList.ulol}`;
        document.querySelector('.openMenu').addEventListener('click',menuClose);
    }//menuOpen
    function menuClose(){
        document.querySelector('.openMenu').style.cssText=`
            height:0vh;
            transition:all ease 1s;
            bottom:0;
            top:100vh;
            opacity:0;
            font-size:0;
            `;
            setTimeout(()=>{
                document.querySelector('.openMenu').remove();
            },300)
    }//menuClose;
}// menuFromLanding();
