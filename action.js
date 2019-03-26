 
var count=0;
 
$('#create').click(function(){ 
     
    for(var i=0;i<2;i++){
      var max= 700;
    var min=0;
    var maxTop=400;
     
    var posTop = Math.floor(Math.random() * (+maxTop - +min) + +min);
     var posBottom = Math.floor(Math.random() * (+max - +min) + +min);
    
    var posLeft = Math.floor(Math.random() * (+max - +min) + +min);

    var posRight = Math.floor(Math.random() * (+max - +min) + +min);  
  $( ".container" ).append( "<div class='colored'> </div>" );
    $(".container").css({
        marginTop:posTop+"px",
        marginBottom:posBottom+"px",
        marginLeft:posLeft+"px",
        marginRight:posRight+"px",
        backgroundColor:random_rgba()});
    } 
    
     
} 
                   ) 

 

$('.input1').val(count);
$('.container').on("click",'.colored',function(){
   var max= 700;
    var min=0;
    var maxTop=400;
     
    var posTop = Math.floor(Math.random() * (+maxTop - +min) + +min);
     var posBottom = Math.floor(Math.random() * (+max - +min) + +min);
    
    var posLeft = Math.floor(Math.random() * (+max - +min) + +min);

    var posRight = Math.floor(Math.random() * (+max - +min) + +min);  
     
    $(this).fadeOut(1000,function(){
       pos=Math.floor(1000*Math.random(0,1000)) ;
        
        $(this).css({
        marginTop:posTop+"px",
        marginBottom:posBottom+"px",
        marginLeft:posLeft+"px",
        marginRight:posRight+"px",
        backgroundColor:random_rgba()});
       // $(this).slideDown(400);
    });
     
    count++;
    $(".input1").val(count); 
})

 
$('#reset').click(function(){
  
    count=0; 
     $('.input1').val(count); 
})


 

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
$(document).mousemove(function(e) {
    $('.logo').offset({
        left: e.pageX,
        top: e.pageY + 2
    }).delay(4000).fadeIn(2000);
});
$(document).mous


