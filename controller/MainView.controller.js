sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel"],function(e,t){"use strict";return e.extend("gitpg.myapp.controller.MainView",{onInit:function(){let e=new t;this.getView().setModel(e,"myNode");e.loadData("https://port-8921-nodejs-billowy-sandwich-seetmrw287880.codeanyapp.com/files").then(function(){debugger}.bind(this))}})});