$(window).scroll(function(){
	if($(window).scrollTop() > 600) {
		$('.navbar-default').fadeIn(300);
	}
	else {
		$('.navbar-default').fadeOut(300);
	}

	if($(window).width() > 767) {
		if ($(this).scrollTop() > 600) {
			$('.scroll-up').fadeIn(300);
		} else {
			$('.scroll-up').fadeOut(300);
		}
	}
});

$(document).ready(function() {

	$("a.scroll[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({ scrollTop: $(this.hash).offset().top}, 1000, function(){window.location.hash = hash;});
	});

	$('#skills-toggle').click(function() {
        $('#skills').slideToggle(500);
		$('.chart').easyPieChart({
			barColor: '#1ABC9C',
			trackColor: '#2F4254',
			scaleColor: false,
			lineCap: 'butt',
			lineWidth: 12,
			size:110,
			animate: 2000
		});
    });

	$('#overlay-hide').click(function() {
		$('#reference .reference-overlay').animate({opacity:0},1000);
		$('#reference-text').animate({opacity:0},1000);
	});

	$('.overlay-wrapper').mouseenter(function() {
		$(this).find('.overlay a:first-child').addClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').addClass('animated slideInRight');
    });

	$('.overlay-wrapper').mouseleave(function() {
		$(this).find('.overlay a:first-child').removeClass('animated slideInLeft');
		$(this).find('.overlay a:last-child').removeClass('animated slideInRight');
    });

	$('.carousel').mouseenter(function() {
		$('.carousel-control').fadeIn(300);
	});

	$('.carousel').mouseleave(function() {
		$('.carousel-control').fadeOut(300);
	});

	$('#separator').waypoint(function(){$('#separator .number').countTo();},{offset:'85%'});

	if($(window).width() > 767) {
		$('.service').mouseenter(function(e) {
			$(this).find('img').animate({paddingBottom: "15px"},500);
		});

		$('.service').mouseleave(function(e) {
			$(this).find('img').stop().animate({paddingBottom: "0px"},500);
		});
	}

	if($(window).width() > 767) {
		$('.scrollpoint.sp-effect1').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInLeft');},{offset:'90%'});
		$('.scrollpoint.sp-effect2').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInRight');},{offset:'90%'});
		$('.scrollpoint.sp-effect3').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeInDown');},{offset:'90%'});
		$('.scrollpoint.sp-effect4').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('animated fadeIn');},{offset:'70%'});

		$('.macbook-inner').waypoint(function(){$(this).toggleClass('active');$(this).toggleClass('black');},{offset:'70%'});
	}
});

function contact_send(){
	$.ajax({url:"/send_mail.html", method:"POST",
		data: {
			name: $("input#vistorname").val(),
			email:  $("input#vistoremail").val(),
			subject:     $("input#vistorsubject").val(),
			message:   $("textarea#vistormessage").val()
		},
		success:function(data){
			// Success message
			if(data.indexOf("success") > 0){
				$('.contact-alert').html("<div class='alert alert-success'>");
				$('.contact-alert > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'><i class='fa fa-times'></i></button><strong>Your message has been sent.</strong></div>");
				$('#contactForm').trigger("reset");
				//alert("Send mail successfully.");
			}
			else{ this.error(data);}
		},
		error: function(data){
			// Fail message
			$('.contact-alert').html("<div class='alert alert-danger'>");
			$('.contact-alert > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'><i class='fa fa-times'></i></button><strong>Sorry, it seems that my mail server is not responding. Please try again later!</strong></div>");
			//alert("Send mail fail.");
		}
	});
}
function locale_changed(){
	render_all_messages(locale_messages[$("select#locales").val()]);
}
function render_all_messages(messages){
	for(key in messages){
		locale_model[key] = messages[key];
	}
}
locale_model = avalon.define(locale_messages['en']);
avalon.scan();
avalon.require(["locales/zh.js", "locales/jp.js" ]);
