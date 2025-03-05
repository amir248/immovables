// ------------------------------------------------------------------------------------------------------------------***------------------------------------------------------------------------------------------------------------------------------
// path with menu -> const menuList.pathMenuList! this install all menu.
// background menu it's menuList.background, that green/
// if change link at menu -> menuList.ulol
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------/

const menuList={
    ulol : '<a href="/">Главная</a><a href="/about">О нас</a><a href="#">Вся недвижимость</a><a href="#">Аренда</a><a href="#">Продажа</a><a href="#">Контакты</a>',
    ulol2 : '<a href="/">Home</a><a href="/about">About us</a><a href="#">All properties</a><a href="#">Rent</a><a href="#">Sale</a><a href="#">Contacts</a>',
    background : "#A29494",
    pathMenuList : "header > nav"
}
// window.addEventListener('DOMContentLoaded',menuFromLanding);
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
        let xxx=menuList.ulol;
        console.log('open ' +localStorage.getItem("language"));
            if(localStorage.getItem("language")=="rus"){
                console.log('Rus' + " " + menuList.languagaes);
                 xxx=menuList.ulol;
            }else{
                xxx=menuList.ulol2
                console.log('Eng');
            }
        setTimeout(()=>{
            document.querySelector('.openMenu').style.cssText=`
                height:100vh;
                opacity:1;
                font-size:33px;
                `;
            document.querySelector('.openMenu').style.background=`${menuList.background}`;
        },100);
       
        document.querySelector('.openMenu').innerHTML=`${xxx}`;
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
// console.log(window.innerWidth);
function whatWindow(){
    if(window.innerWidth>900){
        const idEl=document.querySelector('#menuDiv');
        if(idEl!=null&&idEl!=undefined){
            document.querySelector('#menuDiv').style.display="none";
        }
    }else{
        menuFromLanding();
    }
}
// ---------- Attention!!! -----------------------------------
whatWindow();
// menuFromLanding(); // <--- because addEventListener with asyncAwait not working