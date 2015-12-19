var NowAns;
var times=['a','a','b','b','c','c','d','d','e','e'];
var flag=0;
var scor=[];
var blo=100;



function getlesson(type,order){
    var resp;
    $.ajax({
      async: false, 
      url: 'http://140.112.27.43/Project/db_hackathon/get_question.php?type='+type,
      type:'GET', 
      dataType: 'json',
      success:function(json) {
        resp = json;
      }
    });
    return resp;
}
 
function appendQuestion(type,order){
     var getb = getlesson(type,order);
    var question=getb.question;
    var answer_a=getb.answer_a;
    var answer_b=getb.answer_b;
    var answer_c=getb.answer_c;
    var answer_d=getb.answer_d;
    var answer=getb.answer;
    NowAns=answer;
    var question_lesson=getb.question_lesson;
    
    $("#question").empty();
    $("#question").append(question);
    $("#ansA").empty();
    $("#ansA").append("A: "+answer_a);
    $("#ansB").empty();
    $("#ansB").append("B: "+answer_b);
    $("#ansC").empty();
    $("#ansC").append("C: "+answer_c);
    $("#ansD").empty();
    $("#ansD").append("D: "+answer_d);
}
      

$(document).ready(function() {
  flag=0;


  $("#game").hide();

  $("#step1").on("click",function(){
     $("#game").show();
      $("#map").slideUp("slow");
       function go(){ $(".nxt").click();};
       setTimeout(go,200);

       var type=times[flag];
       var order=1;
       appendQuestion(type,order);
      ab();


  });
  





  $("#navbook").on("click",function(){
     $("#s").click();

  });

  $("#navgame").on("click",function(){
     $("#gameview").show( "slow" );
        $("#").slideUp("slow");
        $("#controlpad").slideUp("slow");

  });

  $("#navmental").on("click",function(){
     $("#s").click();

  });

 






  $(".ac").on("click",function(){
     $("#s").click();

  });



  $(".wa").on("click",function(){
     function dd(){$("#e").click(); soundManager.play('ken');$(".stage").css('background-position-y', '-95px');setTimeout(quake,200);}
    function dlive(){$(".guile").css('width','70px');$(".guile").css('height','90px');}
    function quake(){$(".stage").css('background-position-y', '-100px');};
    $(".guile").css('width','72px');$(".guile").css('height','150px');
    setTimeout(dlive,500);
    setTimeout(dd,500);
  });


  $(".nxt").on("click",function(){
    function alive(){$(".guile").css('width','70px');}
    $(".guile").css('width','0px');
     $("#z").click();
     var handle;
     function ee(){clearInterval(handle); setTimeout(alive,1000);}
     handle = setInterval(bgscroll, 2);
    //for(var i=0;i<100;i++)
     //bgscroll();
    setTimeout(ee,500);

    //clearInterval(handle);
  });

   
  $(".stage").css('background-position', '0px -100px');
  var bgscroll = function () {
      var current = parseInt($(".stage").css('background-position').split(' ')[0]),
      newBgPos = (current - 1) + 'px -100px';
      $(".stage").css('background-position', newBgPos);
  };

  function disab(){
    $("#ansA").addClass("disabled");
    $("#ansB").addClass("disabled");
    $("#ansC").addClass("disabled");
    $("#ansD").addClass("disabled");
  }
  function ab(){
    $("#ansA").removeClass("disabled");
    $("#ansB").removeClass("disabled");
    $("#ansC").removeClass("disabled");
    $("#ansD").removeClass("disabled");
  }
  function nextstep(){
    var type=times[flag];
    var order='1';
    appendQuestion(type,order);
    ab();
  }
  //4顆按鈕
  $("#ansA").on("click",function(){
    if(NowAns=='A')
    {
      $("#question").empty();
      $("#question").append("<h1>答對了</h1>");
      $(".ac").click();
      scor[flag]=1;

      blo-=10;
      $("#drBlood").css( "color", blo+"%" );
    }
    else
    {
      $("#question").empty();
      $("#question").append("<h1>答錯了</h1>");
      $(".wa").click();
      scor[flag]=0;
    }

      if(flag==9)
      {
          flag=0;
        
        function mm(){$("#game").hide();$("#map").show();}
         setTimeout(mm,1500);
         addMental();
        //post some thing
      }
     flag++;
     disab();
      setTimeout(nextstep,500);


  });
  $("#ansB").on("click",function(){
    if(NowAns=='B')
    {
      $("#question").empty();
      $("#question").append("<h1>答對了</h1>");
      $(".ac").click();
       scor[flag]=1;
    }
    else
    {
      $("#question").empty();
      $("#question").append("<h1>答錯了</h1>");
      $(".wa").click();
       scor[flag]=0;
    }


     if(flag==9)
      {
          flag=0;
        
        function mm(){$("#game").hide();$("#map").show();}
         setTimeout(mm,1500);
        //post some thing
      }
     flag++;
     disab();
      setTimeout(nextstep,500);


  });
  $("#ansC").on("click",function(){
    if(NowAns=='C')
    {
      $("#question").empty();
      $("#question").append("<h1>答對了</h1>");
      $(".ac").click();
       scor[flag]=1;
    }
    else
    {
      $("#question").empty();
      $("#question").append("<h1>答錯了</h1>");
      $(".wa").click();
       scor[flag]=0;
    }
    
     if(flag==9)
      {
          flag=0;
        
        function mm(){$("#game").hide();$("#map").show();}
         setTimeout(mm,1500);
        //post some thing
      }
     flag++;
     disab();
      setTimeout(nextstep,500);

  });
  $("#ansD").on("click",function(){
    if(NowAns=='D')
    {
      $("#question").empty();
      $("#question").append("<h1>答對了</h1>");
      $(".ac").click();
       scor[flag]=1;
    }
    else
    {
      $("#question").empty();
      $("#question").append("<h1>答錯了</h1>");
      $(".wa").click();
       scor[flag]=0;
    }
    
     if(flag==9)
      {
          flag=0;
        
        function mm(){$("#game").hide();$("#map").show();}
         setTimeout(mm,1500);
        //post some thing
      }
     flag++;
     disab();
      setTimeout(nextstep,500);

  });


//model 連ajax的主函式
function getjson(id){
    var resp;
    $.ajax({
      async: false, 
      url: 'http://140.112.27.43/Project/db_hackathon/get_question.php?question_id='+id,
      type:'GET', 
      dataType: 'json',
      success:function(json) {
        resp = json;
      }
    });
    return resp;
}
  //力文控制版
  $("#queryQuestionBTN").on("click",function(){

    var order=parseInt($("#queryQuestionValue").val());
    //alert(order);
    var getb = getjson(order);
    /*
{
    "question": "London is _________ for its fog.",
    "answer_a": "dangerous",
    "answer_b": "interesting",
    "answer_c": "famous",
    "answer_d": "terrible",
    "answer": "C",
    "question_lesson": "1"
}
    */

    var question=getb.question;
    var answer_a=getb.answer_a;
    var answer_b=getb.answer_b;
    var answer_c=getb.answer_c;
    var answer_d=getb.answer_d;
    var answer=getb.answer;
    NowAns=answer;
    var question_lesson=getb.question_lesson;
    
    $("#question").empty();
    $("#question").append(question);
    $("#ansA").empty();
    $("#ansA").append("A: "+answer_a);
    $("#ansB").empty();
    $("#ansB").append("B: "+answer_b);
    $("#ansC").empty();
    $("#ansC").append("C: "+answer_c);
    $("#ansD").empty();
    $("#ansD").append("D: "+answer_d);

      


  });
  


});




function addMental(title,description,dataArray){
    var sc='';
    for(var i=0;i<9;i++){
                sc+=scor[i]+",";
              }
              sc+=scor[9];
             // alert(sc);
             n= getCookie("account");
             //n='s0000101';
    var resp;
    $.ajax({
        async: false, 
        url: 'http://140.112.27.43/Project/db_hackathon/log.php?name='+n+'&data='+sc,
        type:'POST', 
        dataType: 'json',
        success:function(json) {
            resp = json;
        }
    });
    return resp;
}


  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
  }