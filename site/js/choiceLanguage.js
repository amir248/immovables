const status={
    click: 0,
    color : ""
};
if(localStorage.getItem("language")=="rus"){
//     console.log('rus');
// }else if(localStorage.getItem("language")=="eng"){
//     console.log("eng");
}else{
    localStorage.setItem("language","rus");
}
document.querySelector('#choiceLanguage').addEventListener('click',()=>{
    status.click++;
    thatOnload();
    forLanguage();
});
if(window.innerWidth<=900){
    document.querySelector('body > main > header > nav > ul').style.display='none';
}
function thatOnload(){
    
    if(status.click==2){
        document.querySelector('#choneEng').style.color="red";
        document.querySelector('#choneRus').style.color="gray";
        // status.click=0;
        document.querySelector('#choiceLanguage > p:nth-child(1)').innerHTML='Language';
        localStorage.setItem("language", "eng");

    // }else if(status.click==3){
    //     localStorage.setItem("language","rus");
    }else if(status.click==3){
        // console.log('///////////');
        status.click=1;
        document.querySelector('#choneRus').style.color='red';
        document.querySelector('#choneEng').style.color='gray';
        document.querySelector('#choiceLanguage > p:nth-child(1)').innerHTML='Язык';
        localStorage.setItem("language", "rus");
    }else{
        // console.log('ELSE');
        if(localStorage.getItem("language")=="rus"){
            // console.log("!!!!!!!!!!!!! RUS");
            status.click=1;
            

            document.querySelector('#choneRus').style.color='red';
            document.querySelector('#choneEng').style.color='gray';
            forLanguage();
        }else if(localStorage.getItem("language")=="eng"){
            // console.log("!!!!!!!!!!!!! ENG");
            status.click=2;
            document.querySelector('#choneEng').style.color="red";
            document.querySelector('#choneRus').style.color="gray";
            forLanguage();
        }
    }
}
thatOnload();

function forLanguage(){
    let rus=document.querySelectorAll('#rus');
    let eng=document.querySelectorAll('#eng');
    if(status.click==1){
        for(let i=0;i<rus.length;i++){
            document.querySelector("#rusM").style.display='';
            if(rus!=undefined){};
            document.querySelector("#engM").style.display='none';

            document.querySelectorAll("#rus")[i].style.display='';
            if(rus!=undefined){};
            document.querySelectorAll("#eng")[i].style.display='none';
            
            // console.log(rus.length+ " "+ i);
        }
    }else if(status.click==2){
        for(let i=0;i<eng.length;i++){
            document.querySelector("#rusM").style.display='none';
            if(rus!=undefined){};
            document.querySelector("#engM").style.display='';

            document.querySelectorAll("#rus")[i].style.display='none';
            document.querySelectorAll("#eng")[i].style.display='';
            // console.log(eng.length+ " "+ i);
        }
    }else{
        console.log('ELSE that on load');
    }
    
}
forLanguage();
