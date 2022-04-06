//var brick=document.getElementById("brick");
var c = document.getElementById("ground");
var ctx = c.getContext("2d");
const img = new Image(100, 100);
var mario = new Image();
var acting=false;
mario.onload=function(){
  if(!acting){
    var run_anim=1;

    var mario_run=setInterval(function(){
      ctx.clearRect(100, 200, 70, 100);
      ctx.drawImage(mario,100,200,70,100);
      if(run_anim==4){
        run_anim=1;
      }
      mario.src="imgs/run"+run_anim+".png";
      run_anim++;
    },100);

  }

}


img.onload = function() {



    var started = false;

    for (var ii = 0; ii <= 35; ii++) {

      ctx.drawImage(img, (50 * ii), 300, 50, 50);
      ctx.drawImage(img, (50 * ii), 350, 50, 50);
    }

    document.addEventListener('keypress', function(e) {

      // if(e.keyCode==32){
      //   var t=false;
      //   var jj=0;
      //   ctx.clearRect(100,200,70,100);
      //   mario.src="imgs/jump.png"
      //   var jump = setInterval(function(){
      //     if(t==false){
      //       if(jj!=200){
      //
      //         if(jj!=0){
      //           ctx.clearRect(100,200-jj+10,90,100);
      //         }
      //
      //         ctx.drawImage(mario,100,200-jj,90,100);
      //       jj+=10;}else{t=true}
      //     }else{
      //       if(jj>0){
      //         if(jj!=0){
      //           ctx.clearRect(100,200-jj-10,90,100);
      //         }
      //         ctx.drawImage(mario,100,200-jj,90,100);
      //       jj-=10;}if(jj==0){
      //         t=false;
      //         mario.src="imgs/idle.png"
      //         clearInterval(jump);
      //       }
      //
      //     }
      //
      //
      //
      //
      //   },10);
      //
      //
      // }

      if (e.key === 'Enter') {

        if (!started) {
          started = true;
          var p = 0;

          var gaqnim = setInterval(function() {

              if ((p == 50)) {
                p = 0
              }
              ctx.clearRect(0, 100, ctx.width, ctx.height);
              for (var i = 0; i <= 35; i++) {
                ctx.drawImage(img, (50 * i) - p, 300, 50, 50);
                ctx.drawImage(img, (50 * i) - p, 350, 50, 50);
              }
              p += 10;



          }, 10);



  document.addEventListener('keypress',function(f){
  if(f.key==='e'){
  clearInterval(gaqnim);
  started=false;

  }

  })


        }

      }



    });


mario.src="imgs/idle.png"

}

img.src = "./imgs/brick.png";


var out = false;
var pos = 0;
//var ganim=setInterval(gg,10);
// function gg(){
//   c.style.right=pos+"px";
//   pos+=4;
// }
