sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
 
], function (Controller, JSONModel, MessageToast, Filter, FilterOperator){
 
    "use strict";

    return Controller.extend("app.chandhu177.controller.View1", {
        onInit() {
        },

        onFilter: function (oEvent) {
            // Get the filter values from the input fields
            var sLocationID = this.getView().byId("idLocationFilter").getValue();
            var sDescription = this.getView().byId("idDescriptionFilter").getValue();
            var sResource = this.getView().byId("idResourceFilter").getValue();
 
            // Get the binding of the table
            var oTable = this.getView().byId("idMiningReportTable");
            var oBinding = oTable.getBinding("items");
 
            // Create an array for filters
            var aFilters = [];
 
            // Add filters based on the input values
            if (sLocationID) {
                aFilters.push(new Filter("Location_ID", FilterOperator.Contains, sLocationID));
            }
            if (sDescription) {
                aFilters.push(new Filter("Location_Description", FilterOperator.Contains, sDescription));
            }
            if (sResource) {
                aFilters.push(new Filter("Mining_Resource_Allocated", FilterOperator.Contains, sResource));
            }
 
            // Apply the filters to the binding
            oBinding.filter(aFilters);
        },
 
        onRowPress: function(oEvent){
          // Get the selected item
          var oSelectedItem = oEvent.getParameter("listItem");
           
          if (oSelectedItem) {
              var oContext = oSelectedItem.getBindingContext();
              var sLocationID = oContext.getProperty("Location_ID");
 
 
              console.log("Navigating to View2 with Location ID:", sLocationID); // Debugging line
 
              // Navigate to View2, passing the Location ID as a parameter
              var oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("RouteView2", {
                  id: sLocationID // Pass the Location ID as a route parameter
              });
 
              // Optionally show a message toast with the selected Location ID
               MessageToast.show("Navigating to Location ID: " + sLocationID);
          }
        },
        formatMinerals: function (aMinerals) {
            // Format the minerals array as a comma-separated string
            return aMinerals.join(", ");
        },
 
        onNavToShare: function () {
            // Implement navigation to share functionality
            MessageToast.show("Share functionality not implemented yet.");
        }
 
        
    });
});