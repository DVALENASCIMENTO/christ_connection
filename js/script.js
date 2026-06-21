document.addEventListener("DOMContentLoaded",()=>{

    console.log("Christ Connection carregado");

    const audios=document.querySelectorAll("audio");

    audios.forEach((audio,index)=>{

        let tempoSalvo=localStorage.getItem("audio_"+index);

        if(tempoSalvo){
            audio.currentTime=tempoSalvo;
        }

        audio.addEventListener("play",()=>{

            audios.forEach(outro=>{

                if(outro!==audio){
                    outro.pause();
                }

            });

            console.log("Reproduzindo áudio:",index+1);

        });

        audio.addEventListener("timeupdate",()=>{

            localStorage.setItem(
                "audio_"+index,
                audio.currentTime
            );

        });

        audio.addEventListener("ended",()=>{

            localStorage.removeItem("audio_"+index);

        });

    });


    const cards=document.querySelectorAll(".card,.livro,.audio");

    cards.forEach(card=>{

        card.style.opacity="0";
        card.style.transform="translateY(30px)";

        setTimeout(()=>{

            card.style.transition=".6s";
            card.style.opacity="1";
            card.style.transform="translateY(0)";

        },300);

    });


    const topo=document.createElement("button");

    topo.innerHTML="↑";
    topo.className="btn-topo";

    document.body.appendChild(topo);

    topo.style.display="none";


    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){
            topo.style.display="block";
        }else{
            topo.style.display="none";
        }

    });


    topo.addEventListener("click",()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });


    const footer=document.querySelector("footer p");

    if(footer){

        footer.innerHTML=
        `Christ Connection © ${new Date().getFullYear()}`;

    }

});