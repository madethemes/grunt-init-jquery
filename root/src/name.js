/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

(function($) {

  // Collection method.
  $.fn.{%= name %} = function() {
    return this.each(function(i) {
       // Do something awesome to each selected element.
       $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.{%= name %} = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.{%= name %}.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.{%= name %}.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].{%= name %} = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
