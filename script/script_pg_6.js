function mudarVideo(){
   var mudaVideo = document.getElementById("selecao")
var show = document.getElementById("frames")
   let escolha = mudaVideo.value

    if(escolha == 1){
        show.innerHTML = 
        `           
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-PlAg8R9TG4?si=LjnrVhtu0rqDZr-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `
    }else if(escolha == 2){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XeoynHW8py8?si=HFrkzGGvRxAf8Zsu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 3){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1w_lZUnrXO0?si=D4i8UM_vfbavwq5g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 4){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/rRSG8n0LPnc?si=sgSk-DQpSzucDzSF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 5){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7cjj6ZFv-S4?si=byUTrMOYW1vMRmqN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        `

    }else if(escolha == 6){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YVruUKPmiRQ?si=6TIqo6aQDO0nSBmX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 7){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2zdpSIK3bps?si=2745NTFwACEDJM6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 8){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/kySkuXP4vII?si=7W8BuujXMepQUv4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 9){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/FxaXK6fTXtw?si=Hkj6Mst8dZMhadJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 10){
        show.innerHTML = 
        `
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/LA3L0wkKxjQ?si=I7DPUa28wdWRU9G7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `

    }else if(escolha == 0){
        show.innerHTML = 
        `
        <img id="pkbol" src="./images/pokebola.gif" alt="">
        `

    }
    
            
       
    
}

