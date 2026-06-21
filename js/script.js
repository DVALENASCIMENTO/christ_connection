const audios = document.querySelectorAll("audio");


audios.forEach(audio => {


    audio.addEventListener("play", () => {


        audios.forEach(outro => {


            if (outro !== audio) {


                outro.pause();


            }


        });


    });


});


console.log("Christ Connection carregado");