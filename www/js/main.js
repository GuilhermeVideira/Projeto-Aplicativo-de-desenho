     
function desfazer() {

}

function limpar() {
var ctx = quadro.getContext("2d")
ctx.clearRect(0, 0, quadro.width, quadro.height);
}


     window.onload = function(){
     var largura = 377
     var altura = 600

     var quadro = document.getElementById('quadro')
     quadro.setAttribute("width", largura)
     quadro.setAttribute("height", altura)

     var ctx = quadro.getContext("2d")
     var texto = quadro.getContext("2d")
 
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
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (10, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (30, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (50, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (70, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (90, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (110, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (130, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (150, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (170, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (190, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (210, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (230, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (250, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (270, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (290, 10, 55, 50);
  texto.fillStyle = "rgb(200,0,0)";
  texto.fillRect (310, 10, 55, 50);
  
  //Texto
  texto.font = '35px serif';
  texto.strokeText('Aplicativo de desenho', 30, 50);
  texto.font = '28px serif';
  texto.strokeText(' 🎨 Faça um desenho:', 10, 100);


}
