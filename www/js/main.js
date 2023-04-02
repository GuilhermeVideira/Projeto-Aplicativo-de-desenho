     
function desfazer() {
    
}

function limpar() {

}

function apagar() {
 
}
     
     window.onload = function(){
     var largura = 377
     var altura = 600

     var quadro = document.getElementById('quadro')
     quadro.setAttribute("width", largura)
     quadro.setAttribute("height", altura)

     var ctx = quadro.getContext("2d")
 
     var desenhando = false
    
    quadro.onmousedown = function(evt){
     ctx.moveTo(evt.clientX, evt.clientY)
     desenhando = true
    }

    quadro.onmouseup = function() {
       desenhando = false
    }

    quadro.onmousemove = function(evt) {
      if(desenhando == true)
      ctx.lineTo(evt.clientX, evt.clientY)
      ctx.stroke()

    }

    quadro.addEventListener("touchstart", function(evt){
    ctx.beginPath()
    ctx.moveTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
    )
    evt.preventDefault()
})

    quadro.addEventListener("touchmove", function(evt){
    ctx.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
    )
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.stroke();
    evt.preventDefault()
})

  //Quadrados 
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (30, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (50, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (70, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (90, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (110, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (130, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (150, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (170, 10, 55, 50);
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (190, 10, 55, 50);
  
  //Texto
  ctx.font = '48px serif';
  ctx.strokeText('Hello world', 10, 50);
  ctx.font = '28px serif';
  ctx.strokeText('Faça um desenho:', 10, 100);


}
