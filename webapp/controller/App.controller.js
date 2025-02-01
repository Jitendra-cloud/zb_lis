sap.ui.define(
  [
  "./BaseController",
  "sap/ui/model/json/JSONModel"
  ],
  function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("djp.listdetail.zblistdetail.controller.App", {
      onInit() {
        var oViewModel = new JSONModel({
          layout : "OneColumn"
          });
         
      this.getView().setModel(oViewModel, "mainView");
      }
  });
});