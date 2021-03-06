;(function () {

	'use strict';

	// iPad and iPod detection
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) ||
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	var goToTop = function() {

		$('.js-gotop').on('click', function(event){

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);

			return false;
		});

	};


	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('nav.left > a');
		$el.removeClass('active');
		$el.each(function(){
			if( this.hash.slice(1) === section ){
				$(this).addClass('active');
			}
		});

	};

	var navigationSection = function() {

		var $section = $('[data-section]');

		$section.waypoint(function(direction) {

		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
	  		offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};


	// Window Scroll
	var windowScroll = function() {
		var lastScrollTop = 0;

		$(window).scroll(function(event){

		   	var header = $('#fh5co-header'),
				scrlTop = $(this).scrollTop();

			if ( scrlTop > 500 && scrlTop <= 2000 ) {
				header.addClass('navbar-fixed-top fh5co-animated slideInDown');
			} else if ( scrlTop <= 500) {
				if ( header.hasClass('navbar-fixed-top') ) {
					header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
					setTimeout(function(){
						header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
					}, 100 );
				}
			}

		});
	};

	var mobileMenu = function(){
		$('body').on('click', '.menuToggle', function(){
			$('body').addClass('menuOpen');
			$('body').one('click', function(){
				$('body').removeClass('menuOpen');
			});
		});
	}

	var stickyMenu = function(){
		var header = $('.homeHeader'),
			sticky = false,
			setSticky = function( scrollY ){
				var h = header[0].clientHeight - 60;
				if( h < scrollY && !sticky ){
					$('body').addClass('sticky');
					sticky = true;
				}
				else if( h > scrollY && sticky ){
					$('body').removeClass('sticky');
					sticky = false;
				}
			}
		;

		window.addEventListener('scroll', function( e ){
			setSticky( window.scrollY );
		});
	}

	var animateScroll = function(){
		$('body').on( 'click', 'a[href*="#"]', function( event ){
			// Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
		});
	}

	function animateJavi(){
		var javi = $('.javi'),
			setJaviClass = function setJaviClass( i ){
				if( !i ){
					javi.attr('class', 'javi bright');
				}
				else {
					javi.attr('class','javi ani'+i);
					setTimeout( function(){
						setJaviClass(--i);
					}, 200);
				}
			}
		;

		setInterval( function(){
			var i = Math.round( Math.random() * 10 );
			setJaviClass( i );
		}, 4000 );
	}





	// Document on load.
	$(function(){

		windowScroll();

		navigationSection();

		goToTop();

		stickyMenu();
		animateScroll();
		animateJavi();
		mobileMenu();
	});


}());
