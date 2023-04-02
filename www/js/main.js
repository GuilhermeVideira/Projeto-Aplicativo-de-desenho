     window.onload = function(){
     var largura = 1000
     var altura = 900

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


}

function desfazer() {

    if (desenhando <= 0) {

        clear_canvas();

    } else {

        desenhando -= 1;
        restore_array.pop();
        context.putImageData(restore_array[desenhando], 0, 0);

    }
}








