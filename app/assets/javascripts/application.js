// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation/foundation
//= require foundation/foundation.alerts
//= require foundation/foundation.clearing
//= require foundation/foundation.cookie
//= require foundation/foundation.dropdown
//= require foundation/foundation.forms
//= require foundation/foundation.joyride
//= require foundation/foundation.magellan
//= require foundation/foundation.orbit
//= require foundation/foundation.reveal
//= require foundation/foundation.section
//= require foundation/foundation.tooltips
//= require foundation/foundation.topbar
//= require foundation/foundation.interchange
//= require foundation/foundation.placeholder
//= require jquery.mmenu.js
//= require_tree .

$(document).foundation();


// Mmenu trigger - hardware acceleration has to be turned off to 
// keep the header fixed during animation
$(function() {
  $('nav#menu').mmenu({	configuration: {
		hardwareAcceleration: false
	}});
});


// <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->


var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src='//www.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));