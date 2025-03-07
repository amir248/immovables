function first(){
    return new Promise((resolve)=>{
        function firstOk(){
            const firstScript=document.createElement('script');
            firstScript.src='site/js/choiceLanguage.js';
            document.querySelector('body').append(firstScript);
        }
        setTimeout(()=>{
            resolve(firstOk());
        },0);
    });
}//first
function languagaes(){
    return new Promise((resolve)=>{
        function secondFunction(){
            const secondScript=document.createElement('script');
            secondScript.src="menu/javascript-menu-for-landing.js";
            document.querySelector('body').append(secondScript);
        }
        setTimeout(()=>{
            resolve(secondFunction());
        },1777);
    });
};//second
function nav(){
    return new Promise((resolve)=>{
        function navFunction(){
            const listNav=document.createElement('script');
            listNav.src="site/js/includeHtmlToHtml.js";
            document.querySelector('body').append(listNav);
        }
            resolve(navFunction());
        setTimeout(()=>{
                document.querySelector('header > nav').style.cssText=`
                transition: all 1s ease-out;
                opacity: 1;
            `;
        },1970);
    });
};//nav
async function mainFunction(){
    await nav();
    await languagaes();
    await first();
}
mainFunction();