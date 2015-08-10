/*================================================
=            DOCUMENT READY FUNCTIONS            =
================================================*/

$(document).ready(function () {

	/*================================================
	=            REMOVE GEROBAK-LOAD ATTR            =
	================================================*/
	
	var gerobakLoad = document.querySelectorAll('[gerobak-load]');
	$(gerobakLoad).remove();
	
	/*-----  End of REMOVE GEROBAK-LOAD ATTR  ------*/


	/*==========  CALCULATE HEIGHT  ==========*/
	calculateHeight();


	/*==========  INPUT PLUGINS  ==========*/
	$(".inside").children('input').blur(function () {
		$(this).parent().children('.add-on').removeClass('input-focus');
	});

	$(".inside").children('input').focus(function () {
		$(this).parent().children('.add-on').addClass('input-focus');
	});

	$(".input-group.transparent").children('input').blur(function () {
		$(this).parent().children('.input-group-addon').removeClass('input-focus');
	});

	$(".input-group.transparent").children('input').focus(function () {
		$(this).parent().children('.input-group-addon').addClass('input-focus');
	});

	$(".bootstrap-tagsinput input").blur(function () {
		$(this).parent().removeClass('input-focus');
	});

	$(".bootstrap-tagsinput input").focus(function () {
		$(this).parent().addClass('input-focus');
	});

	
	/*==========  Element Background and height  ==========*/
	$('[data-height-adjust="true"]').each(function () {
		var h = $(this).attr('data-elem-height');
		$(this).css("min-height", h);
		$(this).css('background-image', 'url(' + $(this).attr("data-background-image") + ')');
		$(this).css('background-repeat', 'no-repeat');
		if ($(this).attr('data-background-image')) {
		}
	});

	$('[data-aspect-ratio="true"]').each(function () {
			$(this).height($(this).width());
	});

	$('[data-sync-height="true"]').each(function () {
			equalHeight($(this).children());
	});

	$(window).resize(function () {
			$('[data-aspect-ratio="true"]').each(function () {
					$(this).height($(this).width());
			});
			$('[data-sync-height="true"]').each(function () {
					equalHeight($(this).children());
			});
	});


	/*==========  TOOLTIP  ==========*/
	$('.tip').tooltip();


	/*==========  BEGIN Lazyload images  ==========*/
	$('.lazy').unveil(0,function(){
		$(this).load(function() {
			// console.log('ads');
		});
	});


	/*==========  GRID  ==========*/
	$('.grid .tools a.remove').on('click', function () {
			var removable = jQuery(this).parents(".grid");
			if (removable.next().hasClass('grid') || removable.prev().hasClass('grid')) {
					jQuery(this).parents(".grid").remove();
			} else {
					jQuery(this).parents(".grid").parent().remove();
			}
	});

	$('.grid .tools a.reload').on('click', function () {
			var el = jQuery(this).parents(".grid");
			blockUI(el);
			window.setTimeout(function () {
					unblockUI(el);
			}, 1000);
	});

	$('.grid .tools .collapse, .grid .tools .expand').on('click', function () {
			var el = jQuery(this).parents(".grid").children(".grid-body");
			if (jQuery(this).hasClass("collapse")) {
					jQuery(this).removeClass("collapse").addClass("expand");
					el.slideUp(200);
			} else {
					jQuery(this).removeClass("expand").addClass("collapse");
					el.slideDown(200);
			}
	});
	

	/*==========  BEGIN Layout Readjust  ==========*/
	$(window).setBreakpoints({
			distinct: true,
			breakpoints: [
			320,
			480,
			768,
			1024]
	});
	//Break point entry 
	$(window).bind('enterBreakpoint320', function () {
			$('#main-menu-toggle-wrapper').show();
			$('#header_inbox_bar').hide();
			$('#main-menu').removeClass('mini');
			$('.page-content').removeClass('condensed');
	});

	$(window).bind('enterBreakpoint480', function () {
			$('#main-menu-toggle-wrapper').show();
			$('.header-seperation').show();
			$('#header_inbox_bar').hide();
			//Incase if condensed layout is applied
			$('#main-menu').removeClass('mini');
			$('.page-content').removeClass('condensed');
	});

	$(window).bind('enterBreakpoint768', function () {
			$('#main-menu-toggle-wrapper').show();
			$('#header_inbox_bar').hide();

			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					$('#main-menu').removeClass('mini');
					$('.page-content').removeClass('condensed');
			}

	});
	
	
	$(window).bind('enterBreakpoint1024', function () {
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
					var elem = jQuery('.page-sidebar ul');
					elem.children('li.open').children('a').children('.arrow').removeClass('open');
					elem.children('li.open').children('a').children('.arrow').removeClass('active');
					elem.children('li.open').children('.sub-menu').slideUp(200);
					elem.children('li').removeClass('open');
			}
			$('.bar').show();
			$('.bar').css('overflow','visible');
	});

	$(window).bind('exitBreakpoint320', function () {
			$('#main-menu-toggle-wrapper').hide();
			$('#header_inbox_bar').show();
	});

	$(window).bind('exitBreakpoint480', function () {
			$('#main-menu-toggle-wrapper').hide();
			$('#header_inbox_bar').show();
	});

	$(window).bind('exitBreakpoint768', function () {
			$('#main-menu-toggle-wrapper').hide();
			$('#header_inbox_bar').show();
	});

	
});

/*-----  End of DOCUMENT READY FUNCTIONS  ------*/