/*
 * File: app/view/SettingsView.js
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

Ext.define('Incident.view.SettingsView', {
    extend: 'Ext.Container',
    alias: 'widget.settingsview',

    config: {
        id: 'settingsviewid',
        layout: {
            type: 'card'
        },
        scrollable: false,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'settingsbackbuttonid',
                        width: 125,
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'mainsettingsviewid',
                ui: '',
                layout: {
                    align: 'center',
                    type: 'vbox'
                },
                scrollable: true,
                items: [
                    {
                        xtype: 'list',
                        id: 'settingslistid',
                        ui: 'round',
                        width: '100%',
                        scrollable: false,
                        itemTpl: [
                            '{value}'
                        ],
                        store: 'settingsstoreid',
                        disableSelection: true,
                        grouped: true
                    },
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'logoutbuttonid',
                        margin: 20,
                        maxWidth: 300,
                        ui: 'main-button',
                        width: '90%',
                        text: 'Logout'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'langviewid',
                layout: {
                    type: 'vbox'
                },
                scrollable: true,
                items: [
                    {
                        xtype: 'list',
                        id: 'langlistid',
                        ui: 'round',
                        scrollable: false,
                        itemTpl: [
                            '{value}'
                        ],
                        store: 'auxstoreid',
                        disableSelection: true
                    }
                ]
            }
        ]
    }

});