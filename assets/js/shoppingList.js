$("input[type='text']").keypress(function(e){

	if((e.which)===13){
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+$(this).val()+"</li>");
	$(this).val("");
	}

});

// check of specific shoping list item by clicking
$("ul").on("click", "li", function(){

$(this).toggleClass("completed");

});

//click on X to delete the list item
$("ul").on("click", "span", function(e){
$(this).parent().fadeOut(500,function(){

$(this).remove();

});
e.stopPropagation();
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
	
