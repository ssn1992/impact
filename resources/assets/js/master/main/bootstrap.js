
window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    // jQuery
    window.$ = window.jQuery = require('jquery');
    require('webpack-jquery-ui');

    /**
     * Data Tables Dependencies
     */
    require('datatables.net-bs');
    require('datatables.net-buttons-bs');
    require('datatables.net-buttons/js/buttons.colVis.js');
    //require('datatables.net-buttons/js/buttons.print.js');
    window.JSZip = require('jszip');
    //require('pdfmake/build/pdfmake');
    //require('pdfmake/build/vfs_fonts');
    require('datatables.net-buttons/js/buttons.html5.js');
    require('datatables.net-colreorder');
    require('../plugins/ellipsis/ellipsis');

    // Bootstrap Sass
    require('bootstrap-sass');

    // Bootstrap Tour
    require('bootstrap-tour');

    // Bootstrap select
    require('bootstrap-select');

    // Boostrap Tgs
    require('bootstrap-tagsinput');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.baseURL = '/';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = $('meta[name="csrf-token"]').attr("content");

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });