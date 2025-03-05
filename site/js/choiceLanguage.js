const status={
    click: 0,
    color : ""
};

document.querySelector('#choiceLanguage').addEventListener('click',()=>{
    status.click++;
    console.log(status.click);
    thatOnload();
    forLanguage();
});
console.log(status.click);
if(window.innerWidth<=900){
    document.querySelector('body > main > header > nav > ul').style.display='none';
}
function thatOnload(){
    
    console.log(status.click);
    if(status.click==1){
        // document.querySelector('#choneRus').style.color='red';
        // document.querySelector('#choneEng').style.color='gray';
        // document.querySelector('#choiceLanguage > p:nth-child(1)').innerHTML='Language';
        // localStorage.setItem("language","rus");
    }else if(status.click==2){
        document.querySelector('#choneEng').style.color="red";
        document.querySelector('#choneRus').style.color="gray";
        // status.click=0;
        document.querySelector('#choiceLanguage > p:nth-child(1)').innerHTML='Language';
        localStorage.setItem("language", "eng");

    // }else if(status.click==3){
    //     localStorage.setItem("language","rus");
    }else{
        console.log('///////////');
        status.click=1;
        document.querySelector('#choneRus').style.color='red';
        document.querySelector('#choneEng').style.color='gray';
        document.querySelector('#choiceLanguage > p:nth-child(1)').innerHTML='Язык';
        localStorage.setItem("language", "rus");
}
}
thatOnload();
let rus=document.querySelectorAll('#rus');
let eng=document.querySelectorAll('#eng');
console.log(rus.length);
function forLanguage(){
    
    if(status.click==1){
        for(let i=0;i<rus.length;i++){
            document.querySelector("#rusM").style.display='';
            if(rus!=undefined){};
            document.querySelector("#engM").style.display='none';

            document.querySelectorAll("#rus")[i].style.display='';
            if(rus!=undefined){};
            document.querySelectorAll("#eng")[i].style.display='none';
            
            console.log(rus.length+ " "+ i);
        }
    }else if(status.click==2){
        for(let i=0;i<eng.length;i++){
            document.querySelector("#rusM").style.display='none';
            if(rus!=undefined){};
            document.querySelector("#engM").style.display='';

            document.querySelectorAll("#rus")[i].style.display='none';
            document.querySelectorAll("#eng")[i].style.display='';
            console.log(eng.length+ " "+ i);
        }
    }else{
        console.log('ELSE that on load');
    }
    
}
forLanguage();
