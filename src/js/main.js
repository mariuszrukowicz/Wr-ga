"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


jQuery(document).ready(function() {
	
	"use strict";
	
	/* ========== Sticky on scroll ========== */
	function stickyNav() {

		var scrollTop = $(window).scrollTop(),
			noSticky = $('.no-sticky'),
			viewportSm = $('.viewport-sm'),
			viewportLg = $('.viewport-lg'),
			viewportLgBody = viewportLg.parent('body'),
			viewportLgNosticky = $('.viewport-lg.no-sticky'),
			viewportLgNostickyBody = viewportLgNosticky.parent('body'),
			viewportLgLogo = viewportLg.find('.logo img'),
			viewportLgNostickyLogo = viewportLgNosticky.find('.logo img'),
			headerTransparentLg = $('.viewport-lg.header-transparent'),
			headerTransparentLgNosticky = $('.viewport-lg.header-transparent.no-sticky'),
			headerTransparentLgBody = headerTransparentLg.parent('body'),
			headerOpacityLg = $('.viewport-lg.header-opacity'),
			headerOpacityLgNosticky = $('.viewport-lg.header-opacity.no-sticky'),
			headerOpacityLgBody = headerOpacityLg.parent('body');

		if (scrollTop > navikHeaderHeight) {
			navikHeader.addClass('sticky');
			viewportLgLogo.attr('src', stickyLogoSrc);
			viewportLgNostickyLogo.attr('src', logoSrc);
			headerTransparentLg.removeClass('header-transparent-on');
			headerOpacityLg.removeClass('header-opacity-on');
			headerTransparentLgNosticky.addClass('header-transparent-on');
			headerOpacityLgNosticky.addClass('header-opacity-on');
			viewportLgBody.css("margin-top", navikHeaderHeight);
			viewportLg.css("margin-top", -navikHeaderHeight);
		} else {
			navikHeader.removeClass('sticky');
			viewportLgLogo.attr('src', logoSrc);
			headerTransparentLg.addClass('header-transparent-on');
			headerOpacityLg.addClass('header-opacity-on');
			viewportLgBody.add(viewportLg).css("margin-top", "0");
		}

		noSticky.removeClass('sticky');
		viewportSm.removeClass('sticky');
		
		headerTransparentLg.add(headerTransparentLgBody).add(headerOpacityLg).add(headerOpacityLgBody).add(viewportLgNostickyBody).add(viewportLgNosticky).css("margin-top", "0");

		var logoCenterWidth = $('.logoCenter .logo img').width(),
			menuCenterOneWidth = $('.center-menu-1 .navik-menu').width(),
			menuCenterOneListMenu = $('.center-menu-1 .navik-menu > ul'),
			menuCenterOneListWidth = menuCenterOneWidth - logoCenterWidth;

		if ($(window).width() < 1200) {
			menuCenterOneListMenu.outerWidth( menuCenterOneWidth );
		} else {
			menuCenterOneListMenu.outerWidth( menuCenterOneListWidth / 2 );
		}

		$('.logoCenter').width(logoCenterWidth);
		
	}

	/* ========== Menu overlay transition ========== */
	function overlayMenuTransition() {
		var overlayMenuFirst = $('.navik-menu-overlay > ul > li:first-child'),
			overlayMenuList = $('.navik-menu-overlay > ul > li');

		overlayMenuFirst.attr('data-delay', '0');

		overlayMenuList.each(function(){
			var $this = $(this),
				overlayMenuNext = $this.next('li'),
				menuDataDelay = $this.attr('data-delay'),
				menuDataDelayNext = parseInt(menuDataDelay) + parseInt('100');

			overlayMenuNext.attr('data-delay', menuDataDelayNext);

			$this.delay(menuDataDelay).queue(function(next) {
				$(this).addClass("menuSlideIn");
				next();
			});
		});
	}

	/* ========== Horizontal navigation menu ========== */
	if ($('.navik-header').length) {

		var navikHeader = $('.navik-header'),
			navikHeaderHeight = navikHeader.height(),
			logo = navikHeader.find('.logo'),
			logoImg = logo.find('img'),
			logoSrc = logoImg.attr('src'),
			logoClone = logo.clone(),
			mobileLogoSrc = logo.data('mobile-logo'),
			stickyLogoSrc = logo.data('sticky-logo'),
			burgerMenu = navikHeader.find('.burger-menu'),
			navikMenuListWrapper = $('.navik-menu > ul'),
			navikMenuListDropdown = $('.navik-menu ul li:has(ul)'),
			headerShadow = $('.navik-header.header-shadow'),
			headerTransparent = $('.navik-header.header-transparent'),
			headerOpacity = $('.navik-header.header-opacity'),
			megaMenuFullwidthContainer = $('.mega-menu-fullwidth .mega-menu-container');

		/* ========== Center menu 1 ========== */
		$('.center-menu-1 .navik-menu > ul:first-child').after('<div class="logoCenter"></div>');
		$('.logoCenter').html(logoClone);

		/* ========== Mega menu fullwidth wrap container ========== */
		megaMenuFullwidthContainer.each(function(){
			$(this).children().wrapAll('<div class="mega-menu-fullwidth-container"></div>');
		});

		/* ========== Window resize ========== */
		$(window).on("resize", function() {

			var megaMenuContainer = $('.mega-menu-fullwidth-container');

			if ($(window).width() < 1200) {

				logoImg.attr('src', mobileLogoSrc);
				navikHeader.removeClass('viewport-lg');
				navikHeader.addClass('viewport-sm');
				headerTransparent.removeClass('header-transparent-on');
				headerOpacity.removeClass('header-opacity-on');
				megaMenuContainer.removeClass('container');

			} else {

				logoImg.attr('src', logoSrc);
				navikHeader.removeClass('viewport-sm');
				navikHeader.addClass('viewport-lg');
				headerTransparent.addClass('header-transparent-on');
				headerOpacity.addClass('header-opacity-on');
				megaMenuContainer.addClass('container');

			}

			stickyNav();

		}).resize();

		/* ========== Dropdown Menu Toggle ========== */
		burgerMenu.on("click", function(){
			$(this).toggleClass('menu-open');
			navikMenuListWrapper.slideToggle(300);
		});
		
		navikMenuListDropdown.each(function(){
			$(this).append( '<span class="dropdown-plus"></span>' );
			$(this).addClass('dropdown_menu');
		});
		
		$('.dropdown-plus').on("click", function(){
			$(this).prev('ul').slideToggle(300);
			$(this).toggleClass('dropdown-open');
		});
		
		$('.dropdown_menu a').append('<span></span>');

		/* ========== Added header shadow ========== */
		headerShadow.append('<div class="header-shadow-wrapper"></div>');

		/* ========== Sticky on scroll ========== */
		$(window).on("scroll", function() {
			stickyNav();
		}).scroll();

		/* ========== Menu hover transition ========== */
		var listMenuHover4 = $('.navik-menu.menu-hover-4 > ul > li > a');
		listMenuHover4.append('<div class="hover-transition"></div>');

	}

	/* ========== Overlay navigation menu ========== */
	if ($('.navik-header-overlay').length) {

		var navikHeaderOverlay = $('.navik-header-overlay'),
			navikMenuOverlay = $('.navik-menu-overlay'),
			burgerMenuOverlay = navikHeaderOverlay.find('.burger-menu'),
			lineMenuOverlay = navikHeaderOverlay.find('.line-menu'),
			menuOverlayLogo = navikHeaderOverlay.find('.logo'),
			overlayLogoClone = menuOverlayLogo.clone(),
			menuWrapperLogoSrc = menuOverlayLogo.data('overlay-logo'),
			menuOverlayListDropdown = $('.navik-menu-overlay > ul > li:has(ul)'),
			menuOverlayLink = $('.navik-menu-overlay > ul > li > a'),
			menuSlide = $('.navik-header-overlay.menu-slide'),
			menuSlideSubmenuLink = menuSlide.find('.navik-menu-overlay > ul ul a'),
			menuSlideSubmenuDropdown = menuSlide.find('.navik-menu-overlay > ul > li > ul li:has(ul)'),
			menuSocialMedia = navikMenuOverlay.next('.menu-social-media'),
			submenuVerticalListItem = $('.submenu-vertical > ul > li > ul li:has(ul)'),
			submenuVerticalLink = $('.submenu-vertical > ul > li > ul a');

		lineMenuOverlay.wrapAll('<span></span>');
		menuOverlayLink.wrap('<div class="menu-overlay-link"></div>');
		submenuVerticalLink.wrap('<div class="menu-overlay-link"></div>');
		menuSlideSubmenuLink.wrap('<div class="menu-overlay-link"></div>');

		/* ========== Submenu Toggle ========== */
		menuOverlayListDropdown.each(function(){
			var menuOverlayDropdownLink = $(this).children('.menu-overlay-link');
			menuOverlayDropdownLink.prepend( '<span class="overlay-dropdown-plus"></span>' );
			$(this).addClass('overlay_dropdown_menu');
		});

		submenuVerticalListItem.each(function(){
			var submenuVerticalDropdownLink = $(this).children('.menu-overlay-link');
			submenuVerticalDropdownLink.prepend( '<span class="overlay-dropdown-plus"></span>' );
			$(this).addClass('overlay_dropdown_menu');
		});

		menuSlideSubmenuDropdown.each(function(){
			var submenuVerticalDropdownLink = $(this).children('.menu-overlay-link');
			submenuVerticalDropdownLink.prepend( '<span class="overlay-dropdown-plus"></span>' );
			$(this).addClass('overlay_dropdown_menu');
		});

		$('.overlay_dropdown_menu > ul').addClass('overlay-submenu-close');
		
		$('.overlay-dropdown-plus').on("click", function(){
			var $thisParent = $(this).parent('.menu-overlay-link');
			$thisParent.next('ul').slideToggle(300).toggleClass('overlay-submenu-close');
			$(this).toggleClass('overlay-dropdown-open');
		});

		navikMenuOverlay.add(menuSocialMedia).wrapAll('<div class="nav-menu-wrapper"></div>');

		var overlayNavMenuWrapper = $('.nav-menu-wrapper');

		overlayNavMenuWrapper.prepend(overlayLogoClone);
		overlayNavMenuWrapper.find('.logo img').attr('src', menuWrapperLogoSrc);

		var menuOverlayHover = $('.navik-menu-overlay > ul > .overlay_dropdown_menu > ul');

		menuOverlayHover.each(function(){
			$(this).on("mouseenter", function () {
				$(this).parents("li").addClass("overlay-menu-hover");
			});
			$(this).on("mouseleave", function () {
				$(this).parents("li").removeClass("overlay-menu-hover");
			});
		});

		/* ========== Menu overlay open ========== */
		burgerMenuOverlay.on("click", function(){

			var overlayMenuList = $('.navik-menu-overlay > ul > li');

			$(this).toggleClass('menu-open');
			overlayNavMenuWrapper.toggleClass('overlay-menu-open');
			overlayMenuList.removeClass("menuSlideIn");
			
			if ($(this).hasClass("menu-open")) {
				overlayMenuTransition();
				overlayMenuList.removeClass("menuSlideOut").addClass("menuFade");
			}

			if (!$(this).hasClass("menu-open")) {
				overlayMenuList.addClass("menuSlideOut").removeClass("menuFade");
			}

		});

		/* ========== Menu slide settings ========== */
		var menuSlideNavWrapper = menuSlide.find('.nav-menu-wrapper'),
			menuSlideNavLogo = menuSlideNavWrapper.find('.logo');

		if (navikHeaderOverlay.hasClass('menu-slide')){
			navikHeaderOverlay.removeClass('overlay-center-menu');
		}

		menuSlideNavLogo.remove();
		menuSlideNavWrapper.after('<div class="slidemenu-bg-overlay"></div>');

		$('.slidemenu-bg-overlay').on("click", function(){
			menuSlideNavWrapper.removeClass('overlay-menu-open');
			burgerMenuOverlay.removeClass('menu-open');
		});

	}

	/* ========== Fixed sidebar menu ========== */
	if ($('.navik-fixed-sidebar').length) {
		var navikFixedSidebar = $('.navik-fixed-sidebar'),
			navikMenuFixed = $('.navik-menu-fixed'),
			navikSideContent = $('.navik-side-content'),
			logoFixedSidebar = navikFixedSidebar.find('.logo'),
			logoClone = logoFixedSidebar.clone(),
			burgerMenuFixedSidebar = navikFixedSidebar.find('.burger-menu'),
			burgerMenuDetach = burgerMenuFixedSidebar.detach(),
			navikFixedDropdown = navikMenuFixed.find('li:has(ul)');

		navikFixedSidebar.parent('body').addClass('body-fixed-sidebar');
		navikFixedSidebar.after('<div class="fixedsidebar-bg-overlay"></div>').after(burgerMenuDetach);
		navikSideContent.prepend(logoClone);

		$('.navik-fixed-sidebar .logo, .navik-menu-fixed').wrapAll('<div class="fixed-menu-wrap"></div>');

		var burgerMenuMove = navikFixedSidebar.next('.burger-menu'),
			fixedSidebarlineMenu = burgerMenuMove.find('.line-menu');

		fixedSidebarlineMenu.wrapAll('<span></span>');

		/* ========== Side menu open on mobile ========== */
		burgerMenuMove.on("click", function(){
			$(this).toggleClass('menu-open');
			navikFixedSidebar.toggleClass('fixed-sidebar-open');
		});

		$('.fixedsidebar-bg-overlay').on("click", function(){
			navikFixedSidebar.removeClass('fixed-sidebar-open');
			burgerMenuMove.removeClass('menu-open');
		});

		/* ========== Submenu collapse ========== */
		navikFixedDropdown.each(function(){
			$(this).append( '<span class="overlay-dropdown-plus"></span>' );
		});

		$('.overlay-dropdown-plus').on("click", function(){
			$(this).prev('ul').slideToggle(300).toggleClass('submenu-collapse');
			$(this).toggleClass('overlay-dropdown-open');
		});
	}

	/* ========== Menu icon color ========== */
	$('.navik-menu-icon').css('color', function () {
		var iconColorAttr = $(this).data('fa-color');
		return iconColorAttr;
	});

});
(function($) {

	// Menu filter
	$("#menu-filters li a").click(function() {
	  $("#menu-filters li a").removeClass('active');
	  $(this).addClass('active');
  
	  var selectedFilter = $(this).data("filter");
	  //  $("#menu-wrapper").fadeTo(100, 0);
  
	  $(".menu-restaurant").fadeOut();
  
	  setTimeout(function() {
		$(selectedFilter).slideDown();
		//$("#menu-wrapper").fadeTo(300, 1);
	  }, 300);
	});
  
	})(jQuery);
  
   
  // post

  {
    const form = document.querySelector('#contactForm');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    //wyłączamy domyślną walidację
    form.setAttribute('novalidate', true);

    const displayFieldError = function(elem) {
        const fieldRow = elem.closest('.form-row');
        const fieldError = fieldRow.querySelector('.field-error');
        if (fieldError === null) {
            const errorText = elem.dataset.error;
            const divError = document.createElement('div');
            divError.classList.add('field-error');
            divError.innerText = errorText;
            fieldRow.appendChild(divError);
        }
    };

    const hideFieldError = function(elem) {
        const fieldRow = elem.closest('.form-row');
        const fieldError = fieldRow.querySelector('.field-error');
        if (fieldError !== null) {
            fieldError.remove();
        }
    };

    [...inputs].forEach(elem => {
        elem.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
                hideFieldError(this);
            }
        });

        if (elem.type === "checkbox") {
            elem.addEventListener('click', function() {
                const formRow = this.closest('.form-row');
                if (this.checked) {
                    this.classList.remove('error');
                    hideFieldError(this);
                } else {
                    this.classList.add('error');
                }
            });
        }
    });

    const checkFieldsErrors = function(elements) {
        //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
        //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
        let fieldsAreValid = true;

        [...elements].forEach(elem => {
            if (elem.checkValidity()) {
                hideFieldError(elem);
                elem.classList.remove('error');
            } else {
                displayFieldError(elem);
                elem.classList.add('error');
                fieldsAreValid = false;
            }
        });

        return fieldsAreValid;
    };

    
}




{
    const form = document.querySelector('#contactForm');
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    //wyłączamy domyślną walidację
    form.setAttribute('novalidate', true);

    const displayFieldError = function(elem) {
        const fieldRow = elem.closest('.form-row');
        const fieldError = fieldRow.querySelector('.field-error');
        if (fieldError === null) {
            const errorText = elem.dataset.error;
            const divError = document.createElement('div');
            divError.classList.add('field-error');
            divError.innerText = errorText;
            fieldRow.appendChild(divError);
        }
    };

    const hideFieldError = function(elem) {
        const fieldRow = elem.closest('.form-row');
        const fieldError = fieldRow.querySelector('.field-error');
        if (fieldError !== null) {
            fieldError.remove();
        }
    };

    [...inputs].forEach(elem => {
        elem.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.classList.add('error');
            } else {
                this.classList.remove('error');
                hideFieldError(this);
            }
        });

        if (elem.type === "checkbox") {
            elem.addEventListener('click', function() {
                const formRow = this.closest('.form-row');
                if (this.checked) {
                    this.classList.remove('error');
                    hideFieldError(this);
                } else {
                    this.classList.add('error');
                }
            });
        }
    });

    const checkFieldsErrors = function(elements) {
        //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
        //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
        let fieldsAreValid = true;

        [...elements].forEach(elem => {
            if (elem.checkValidity()) {
                hideFieldError(elem);
                elem.classList.remove('error');
            } else {
                displayFieldError(elem);
                elem.classList.add('error');
                fieldsAreValid = false;
            }
        });

        return fieldsAreValid;
    };

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //jeżeli wszystkie pola są poprawne...
        if (checkFieldsErrors(inputs)) {
            const elements = form.querySelectorAll('input:not(:disabled), textarea:not(:disabled), select:not(:disabled)');

            const dataToSend = new FormData();
            [...elements].forEach(el => dataToSend.append(el.name, el.value));

            const url = form.getAttribute('action');
            const method = form.getAttribute('method');

            const submit = form.querySelector('[type="submit"]');
            submit.disabled = true;
            submit.classList.add('element-is-busy');

            fetch(url, {
                method: method.toUpperCase(),
                body: dataToSend
            })
            .then(ret => ret.json())
            .then(ret => {
                submit.disabled = false;
                submit.classList.remove('element-is-busy');

                if (ret.errors) {
                    ret.errors.map(function(el) {
                        return '[name="'+el+'"]'
                    });
                    const selector = ret.errors.join(',');
                    checkFieldsErrors(form.querySelectorAll(sekector));

                } else {
                    if (ret.status === 'ok') {
                        //wyświetlamy komunikat powodzenia, cieszymy sie
                        const div = document.createElement('div');
                        div.classList.add('form-send-success');

                        div.innerHTML = '<strong>Wiadomość została wysłana</strong><span>Dziękujemy za kontakt. Postaramy się odpowiedzieć jak najszybciej</span>';
                        form.parentElement.insertBefore(div, form);
                        form.remove();
                    }

                    if (ret.status === 'error') {
                        //komunikat błędu, niepowodzenia
                        const div = document.createElement('div');
                        div.classList.add('send-error');
                        div.innerText = 'Wysłanie wiadomości się nie powiodło';
                    }
                }
            }).catch(_ => {
                submit.disabled = false;
                submit.classList.remove('element-is-busy');
            });
        }
    });
}