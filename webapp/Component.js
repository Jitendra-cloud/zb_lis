sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "djp/listdetail/zblistdetail/model/models",
    "djp/listdetail/zblistdetail/controller/ListSelector"
],
    function (UIComponent, Device, models, ListSelector) {
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

                // instantiation of the listselector
                this.oListSelector = new ListSelector();

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    });