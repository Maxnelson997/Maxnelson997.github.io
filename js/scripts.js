$('#softwaredev').addClass('animated zoomInRight');

$(window).scroll(function() {
    if ($(document).scrollTop() > 150) {
        $('.navbar').addClass('navbar-shrink');

    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});


$(function(){
  $('.htmlbutton').mouseenter(function(){
      var className = $(this).attr("class");
      className = checkNames(className);

      $(this).addClass('animate');
      $(this).click(function(){
        window.location.href = className;
      })

  });
  $('.htmlbutton').mouseleave(function(){
     $(this).removeClass('animate');
  });
});

function checkNames(className){

  if(className.includes("github")){
    className = 'https://github.com/Maxnelson997';
  } else
  if(className.includes("linkedin")){
    className = 'https://www.linkedin.com/in/maxwellnelson';
  } else
  if(className.includes("twitter")){
    className = 'https://twitter.com/MaximusAsher';
  } else
  if(className.includes("instagram")){
    className = 'https://www.instagram.com/maxashernelson';
  } else 
  if(className.includes("stack-overflow")){
    className = 'http://stackoverflow.com/users/3778273/max-nelson';
  } else 
  if(className.includes("apple")){
    className = 'https://itunes.apple.com/us/developer/max-nelson/id1112838672';
  } 

  return className;

  }



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Owl carousel
$('.owl-partners').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// Owl carousel
$('.owl-portfolio').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
          ],
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 100) {
  		$('#back-top').fadeIn();
  	} else {
  		$('#back-top').fadeOut();
  	}
  });

  // scroll body to 0px on click
  $('#back-top a').on("click", function(){
  	$('body,html').animate({
  		scrollTop: 0
  	}, 800);
  	return false;
  });

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {    
    $('.stats-bar').appear();
    $('.stats-bar').on('appear', function() {
    var fx = function fx() {
    $(".stat-number").each(function (i, el) {
        var data = parseInt(this.dataset.n, 10);
        var props = {
            "from": {
                "count": 0
            },
                "to": {
                "count": data
            }
        };
        $(props.from).animate(props.to, {
            duration: 1000 * 1,
            step: function (now, fx) {
                $(el).text(Math.ceil(now));
            },
            complete:function() {
                if (el.dataset.sym !== undefined) {
                  el.textContent = el.textContent.concat(el.dataset.sym)
                }
            }
        });
    });
    };
    
    var reset = function reset() {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 90) {
            $(this).off("scroll");
          fx()
        }
    };
    
    $(window).on("scroll", reset);
});
    });