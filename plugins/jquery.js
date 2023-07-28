import $ from 'jquery'
window.jQuery = window.$ = $
jQuery.fn.load = function(callback){ $(document).on("load", callback) };
export default jQuery;