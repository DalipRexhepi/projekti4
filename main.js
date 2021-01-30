/*Menu item JS code*/
$(document).ready(function(){
	$('.dr_ft-list').click(function(){
		const value = $(this).attr('data-filter');
		if(value == 'all'){
			$('.dr_p-itemBox').show('1000');
		}
		else{
			$('.dr_p-itemBox').not('.'+value).hide('1000');
			$('.dr_p-itemBox').filter('.'+value).show('1000');
		}
	})
	//add active class on selected item
	$('.dr_ft-list').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})