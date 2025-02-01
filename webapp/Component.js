sap.ui.define([
    "sap/ui/core/UIComponent",
    "djp/listdetail/zblistdetail/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("djp.listdetail.zblistdetail.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // enable routing
            this.getRouter().initialize();

            // set the device model
            this.setModel(models.createDeviceModel(), "device");
        }
    });
});