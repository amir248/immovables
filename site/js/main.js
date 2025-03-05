function first(){
    return new Promise((resolve)=>{
        function firstOk(){
            const firstScript=document.createElement('script');
            firstScript.src='site/js/choiceLanguage.js';
            document.querySelector('body').append(firstScript);
        }
        resolve(firstOk());
    });
}//first
function second(){
    return new Promise((resolve)=>{
        function secondFunction(){
            const secondScript=document.createElement('script');
            secondScript.src="menu/javascript-menu-for-landing.js";
            document.querySelector('body').append(secondScript);
        }
        resolve(secondFunction());
    })
}

async function mainFunction(){
    await first();
    await second();
}
mainFunction();