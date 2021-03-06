/*
 * File: app/store/AuxStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Incident.store.AuxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.auxstore',

    requires: [
        'Incident.model.AuxConfig'
    ],

    config: {
        model: 'Incident.model.AuxConfig',
        storeId: 'auxstoreid',
        proxy: {
            type: 'ajax',
            url: '/json_dependency_files/auxdata.json',
            reader: {
                type: 'json',
                rootProperty: 'langdata'
            }
        }
    }
});