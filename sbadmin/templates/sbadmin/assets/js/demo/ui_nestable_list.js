/*
 * ui_nestable_list.js
 *
 * Demo JavaScript used for nestable lists.
 */

"use strict";

$(document).ready(function(){

	//===== Nestable Lists =====//

	var updateOutput = function(e) {
		var list   = e.length ? e : $(e.target),
			output = list.data('output');
		if (window.JSON) {
			output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
		} else {
			output.val('JSON browser support required for this demo.');
		}
	};

	// activate Nestable for list 1
	$('#nestable_list_1').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 2
	$('#nestable_list_2').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 3
	$('#nestable_list_3').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 4
	$('#nestable_list_4').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 5
	$('#nestable_list_5').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 6
	$('#nestable_list_6').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 7
	$('#nestable_list_7').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// activate Nestable for list 8
	$('#nestable_list_8').nestable({
		group: 1
	})
	.on('change', updateOutput);

	// output initial serialised data
	updateOutput($('#nestable_list_1').data('output', $('#nestable_list_1_output')));
	updateOutput($('#nestable_list_2').data('output', $('#nestable_list_2_output')));
	updateOutput($('#nestable_list_3').data('output', $('#nestable_list_3_output')));
	updateOutput($('#nestable_list_4').data('output', $('#nestable_list_4_output')));
	updateOutput($('#nestable_list_5').data('output', $('#nestable_list_5_output')));
	updateOutput($('#nestable_list_6').data('output', $('#nestable_list_6_output')));
	updateOutput($('#nestable_list_7').data('output', $('#nestable_list_7_output')));
	updateOutput($('#nestable_list_8').data('output', $('#nestable_list_8_output')));

	$('#nestable_list_menu').on('click', function(e)
	{
		var target = $(e.target),
			action = target.data('action');
		if (action === 'expand-all') {
			$('.dd').nestable('expandAll');
		}
		if (action === 'collapse-all') {
			$('.dd').nestable('collapseAll');
		}
	});

	$('#nestable_list_1').nestable();
	$('#nestable_list_2').nestable();
	$('#nestable_list_3').nestable();
	$('#nestable_list_4').nestable();
	$('#nestable_list_5').nestable();
	$('#nestable_list_6').nestable();
	$('#nestable_list_7').nestable();
	$('#nestable_list_8').nestable();

});