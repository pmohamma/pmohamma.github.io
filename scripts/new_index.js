var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// function to open/close nav
function toggleNav(){
  // if nav is open, close it
  if($("nav").is(":visible")){
    $("nav").fadeOut();
    $("button").removeClass("menu");
  }
  // if nav is closed, open it
  else{
    $("button").addClass("menu");
    $("nav").fadeIn().css('display', 'flex');
  }
}

function showBody(){
  document.getElementById("body_content").style.display = "inline-block";
};

function fadeHeader(){
  $('#header_container').fadeOut();
  setTimeout(showBody, 200);
  $('#body_content').addClass("open");
  
 // $('#body_content').animate({ width:'0%' }, "slow");
};

async function open_from_main(loc){
  location.href = loc;
}

//   document.getElementById("body_content").animate({
//                 width: "300px"
//             });

// }