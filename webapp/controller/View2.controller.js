sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",

], function (Controller, JSONModel, MessageToast, Filter, FilterOperator){
    "use strict";

    return Controller.extend("app.chandhu177.controller.View2", {
        onInit: function () {

            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
            var sLocationID = oEvent.mParameters.arguments.id; // Get the LocationID from the route parameters
 
            // Assuming the Mining data is available in a model
            var oModel = this.getView().getModel(); // Use your model here
            var aMiningData = oModel.getProperty("/drillData"); // Assume data is stored in '/miningData'
            var aMiningData1 = oModel.getProperty("/miningData");
 
            // Find the mining location that matches the LocationID
            var oMiningLocation = aMiningData.find(function (location) {
                return location.Location_ID === sLocationID; // Match Location_ID
            });
            // Ensure they are arrays before filtering
            if (Array.isArray(aMiningData) && Array.isArray(aMiningData1)) {
                // Filter the data based on Location_ID
                var oFilteredMiningData = aMiningData.filter(function (location) {
                    return location.Location_ID === sLocationID; // Match Location_ID
                });
 
                // var oFilteredMiningData1 = aMiningData1.filter(function (location) {
                //     return location.Location_ID === sLocationID; // Match Location_ID
                // });
 
                // Combine filtered data from both arrays
                var oCombinedData = oFilteredMiningData
                console.log(oCombinedData,"combine")
 
                // Check if data was found
                if (oCombinedData.length > 0) {
                    var oMiningModel = new JSONModel(oCombinedData); // Combine data into new model
                    console.log(oMiningModel,"mininf")
                    this.getView().setModel(oMiningModel, "miningModel"); // Set the model to the view
                } else {
                    console.log("No matching mining locations found for Location ID:", sLocationID);
                }
            } else {
                console.error("drillData or miningData are not arrays.");
            }
        }
                
    });
});