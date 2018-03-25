//JavaScript File
var xpos = 0;
var ypos = 0;
var xpos1 = 0;
var ypos1 = 0;
$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "Dialer"
	$("#content_list").hide(); // hide the element with ID "Dialer"
	$("#content_add").hide(); // hide the element with ID "Dialer"
	$("#gesture_output").hide();
	$("#gesture_area").hide();
	
});
$("#AddContact").click(function() { // when "button_id" is clicked
	$("#content_add").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_dialer").hide();	// hide other element
	$("#gesture_output").hide();
	$("#gesture_area").hide();
});
$("#Contacts").click(function() { // when "button_id" is clicked
	$("#content_add").hide(); // show element
	$("#content_list").show();	// hide other element
	$("#content_dialer").hide();	// hide other element
	$("#gesture_output").hide();
	$("#gesture_area").hide();
});
$("#Dialer").click(function() { // when "button_id" is clicked
	$("#content_add").hide(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_dialer").show();	// hide other element
	$("#gesture_output").hide();
	$("#gesture_area").hide();
});
$("#TestGestures").click(function() { // when "button_id" is clicked
	$("#content_add").hide(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_dialer").hide();	// hide other element
	$("#gesture_output").show();
	$("#gesture_area").show();
});
$("#One").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"1");
});
$("#Two").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"2");
	
});
$("#Three").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"3");
});
$("#Four").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"4");
})
$("#Five").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"5");
});
$("#Six").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"6");
})
$("#Seven").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"7");
});
$("#Eight").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"8");
});
$("#Nine").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"9");
});
$("#Star").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"*");
});
$("#Zero").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"0");
});
$("#Hash").click(function() { // when "button_id" is clicked
	var stringval = $("#dial_input").val();	// hide other element
	$("#dial_input").val(stringval+"#");
});;
$("#Clear").click(function() { // when "button_id" is clicked
	$("#dial_input").val("");
});;
$("#gesture_area").mousedown(function(event) { // when "button_id" is clicked
	$("#gesture_output").val("Mousedown");
	xpos = event.pageX;
	ypos = event.pageY;

	
});;
$("#gesture_area").mouseup(function(event) { // when "button_id" is clicked
	$("#gesture_output").val("Mouseup");
	xpos1 = event.pageX;
	ypos1 = event.pageY;
	if(xpos1 > xpos)
	{
		$("#gesture_output").val("Swipe Right");
	}
	else if (xpos1 < xpos) 
	{
	
		$("#gesture_output").val("Swipe Left");
	}
	else if (xpos1==xpos)
	{
		$("#gesture_output").val("Mouse Up");
	}
});;
