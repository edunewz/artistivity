$(document).ready(function() {
	
/**************************************************/
			// Sidebar toggle script //
/**************************************************/
    $(".deploy-sidebar").click( function() {
		if(!$("#sidebar").hasClass('cbp-spmenu-open')){
			$(".page-content, .page-header").addClass('cbp-spmenu-push-toleft');
			$("#sidebar").addClass('cbp-spmenu-open');
		}else{
			$(".page-content, .page-header").removeClass('cbp-spmenu-push-toleft');
			$("#sidebar").removeClass('cbp-spmenu-open');
		}
	})

	$("#sidebar a").click(function(){
		$(this).addClass('active').siblings('a').removeClass('active');
		return true;
	})
		
/**************************************************/	
			    // Tab script //
/**************************************************/	
	
	$(".tabs li a").live('click',function(){
		var currTab = $(this).attr('href')+"-content";
		$(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
		$(".tabContentWrapper > div").hide();
		$(".tabContentWrapper "+currTab).fadeIn();
		return false;
	})
	
	$(".tabs02 li a").live('click',function(){
		var currTab = $(this).attr('href')+"-content";
		$(this).addClass('active').parent('li').siblings('li').find('a').removeClass('active');
		$(".tabContentWrapper2 > div").hide();
		$(".tabContentWrapper2 "+currTab).fadeIn();
		return false;
	})
	
/**************************************************/
		// Booking History table script //
/**************************************************/

	$(".bookingTable h2").live('click',function(){
		if($(this).next('div.table-wrapper').is(":visible")){
			$(this).find("span").html("[+]").css({letterSpacing:1});
			$(this).next('div.table-wrapper').stop(true, true).slideUp();
		}else{
			$(this).find("span").html("[-]").css({letterSpacing:3});
			$(this).next('div.table-wrapper').stop(true, true).slideDown();
		}
	})

/**************************************************/
			   // Swipe script //
/**************************************************/	

$("#content").swipe({
	triggerOnTouchEnd : true,
		allowPageScroll:"vertical",
		swipe:function(event, direction, distance, duration, fingerCount)
        {
			if (direction=="left") {
				//alert("left");
				$(".page-content, .page-header").addClass('cbp-spmenu-push-toleft');
				$("#sidebar").addClass('cbp-spmenu-open');
			 }
			
			 if (direction=="right") {
				//alert("right");
				$(".page-content, .page-header").removeClass('cbp-spmenu-push-toleft');
				$("#sidebar").removeClass('cbp-spmenu-open');
			 }
		},
		threshold:180
		
	})

	
// End jQuery
});