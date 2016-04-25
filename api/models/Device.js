/**
 * Device.js
 *
 * @description :: Devices
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        name: {
            type:       'string',
            defaultsTo: ''
        },

        locationWithinVenue: {
            type:       'string',
            defaultsTo: ''
        },
        
        wifiMacAddress: {
            type: 'string',
            defaultsTo: ''
        },

        ethMacAddress: {
            type:       'string',
            defaultsTo: ''
        },

        //TODO how will devices authenticate? Easiest is some JWT mechanism...
        apiToken: {
            type:  'string',
            defaultsTo: ''
        },

        blocked: {
            type: 'boolean',
            defaultsTo: false,
        },
        
        // For methods like YouTube where you type in a randomly generated 6 digit code to tie 
        // a device to an account.
        regCode: {
            type: 'string',
            defaultsTo: ''
        
        },

        //TODO this should autogenerate a UUID when registered?
        uniqueId: {
            type: 'string',
            defaultsTo: ''
        },

        // for now, can only be owned by one proprietor.owner
        deviceOwner: {
            model: 'User'
        }



    }
};

