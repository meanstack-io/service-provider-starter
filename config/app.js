const path = require('path');

module.exports = {
    /*
     |--------------------------------------------------------------------------
     | Autoloaded Service Providers
     |--------------------------------------------------------------------------
     |
     */
    'providers': [
        //path.resolve(__dirname, '../app/providers/yourServiceProvider.js')
    ],

    /*
     |--------------------------------------------------------------------------
     | Application Environment
     |--------------------------------------------------------------------------
     |
     | File to configuration your application environment.
     |
     */
    'env': path.resolve(__dirname, '../.env.js')
};
