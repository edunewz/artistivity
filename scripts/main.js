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
	
	$("#editProfileButton").live('click', function(){
		$("#tab01-view").hide(500);
		$("#tab01-edit").show(500);
	})
	
	$("#personalFormSubmit").live('click', function () {
		$('#personalStatus').fadeIn(100).html("Saving your information...");    
		$.post('http://artistivity.com/new/mobile/updatePersonal.php',
			$("#personalForm").serialize(),
			function(data){
				console.log(data);
				if (data.toLowerCase().indexOf("success") >= 0)
				{
					$('#personalStatus').fadeIn(100).html("Information saved");    
				}
				else
				{
					$('#personalStatus').fadeIn(100).html("An error occured. Please try again.");    
				}
			}
		);
	    return false;   
	})
	
	$("#talentFormSubmit").live('click', function () {
		//window.scrollTo(0,0);
		$('#talentStatus').fadeIn(100).html("Saving your information...");    
		//$('#php_profile_userprofile').fadeIn(100).html("<img src='http://artistivity.com/images/loader.gif' style='float:left' />");
		//alert("coming here");
		$.post('http://artistivity.com/new/mobile/updateTalent.php',
			$("#talentForm").serialize(),
			function(data){
			$("#php_profile_userprofile").html(data)
				console.log(data);
				if (data.toLowerCase().indexOf("success") >= 0)
				{
					$('#talentStatus').fadeIn(100).html("Information saved");
				}
				else
				{
					$('#talentStatus').fadeIn(100).html("An error occured. Please try again.");    
				}
			}
		);
	    return false;   
	})
	
	$("#feeFormSubmit").live('click', function () {
		//window.scrollTo(0,0);
		$('#feeStatus').fadeIn(100).html("Saving your information...");    
		//$('#php_profile_userprofile').fadeIn(100).html("<img src='http://artistivity.com/images/loader.gif' style='float:left' />");
		//alert("coming here");
		$.post('http://artistivity.com/new/mobile/updateFee.php',
			$("#feeForm").serialize(),
			function(data){
			$("#php_profile_userprofile").html(data)
				console.log(data);
				if (data.toLowerCase().indexOf("success") >= 0)
				{
					$('#feeStatus').fadeIn(100).html("Information saved");
				}
				else
				{
					$('#feeStatus').fadeIn(100).html("An error occured. Please try again.");    
				}
			}
		);
	    return false;   
	})
	
	$("#preferencesFormSubmit").live('click', function () {
		//window.scrollTo(0,0);
		$('#preferencesStatus').fadeIn(100).html("Saving your information...");    
		//$('#php_profile_userprofile').fadeIn(100).html("<img src='http://artistivity.com/images/loader.gif' style='float:left' />");
		//alert("coming here");
		$.post('http://artistivity.com/new/mobile/updatePreferences.php',
			$("#preferencesForm").serialize(),
			function(data){
			$("#php_profile_userprofile").html(data)
				console.log(data);
				if (data.toLowerCase().indexOf("success") >= 0)
				{
					$('#preferencesStatus').fadeIn(100).html("Information saved");
				}
				else
				{
					$('#preferencesStatus').fadeIn(100).html("An error occured. Please try again.");    
				}
			}
		);
	    return false;   
	})

	
	$(".moreLink01").live('click', function(){
		$(".morebio").show();
		$(this).hide();
	})

/**************************************************/
			   // Swipe script //
/**************************************************/	

/*$("#content").swipe({
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
		
	})*/

/**************************************************/
			   // Profile form submissions //
/**************************************************/	
	
// End jQuery
});

function deleteEntity(type,id) 
	{
		todelete = "."+type+id;
		//$(todelete).html("");
		//$(todelete).css('background-image','url(img/1.jpg)');
		
		$.post('http://artistivity.com/new/mobile/deleteEntity?type='+type+"&id="+id,
			function(data){
				console.log(data);
				if (data.toLowerCase().indexOf("success") >= 0)
				{
					if(type == "image")
					{
						$(todelete).html("Image Deleted");
					}
					else if(type == "video" || type == "audio")
					{
						$(todelete).remove();
						//alert("coming here");
					}
					else
					{
						alert("locha");
					}
				}
				else
				{
					$(todelete).html("Error deleting.")
				}
			}
		);
	    return false;
	}