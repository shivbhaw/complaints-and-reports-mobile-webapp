Ext.define('Override.dom.Element', {
    override : 'Ext.dom.Element',

    getXY : function() {
        var rect = this.dom.getBoundingClientRect(),
            round = Math.round;

        return [round(rect.left + window.pageXOffset), round(rect.top + window.pageYOffset)];
    }
});