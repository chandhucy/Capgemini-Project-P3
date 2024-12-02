sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
  
], (Controller,JSONModel) => {
  "use strict";

  return Controller.extend("app.chandhu177.controller.View1", {
      onInit: function() {

        var oModel = new JSONModel();
 
          // Load the data from tools.json
          oModel.loadData("/model/coredata/data.json"); // Update the path accordingly
 
          // Set the model to the view
          this.getView().setModel(oModel);
                 
        }
 
      
    
  });
});