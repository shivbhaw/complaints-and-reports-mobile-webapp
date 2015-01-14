Ext.define('Incident.view.override.SingleView', {
    requires: 'Incident.view.SingleView'
}, function() {
    Ext.override(Incident.view.SingleView, {
        layout: Ext.os.is.Tablet ? 'hbox' : 'card'
    });
});