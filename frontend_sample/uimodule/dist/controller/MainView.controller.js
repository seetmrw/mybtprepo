sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","sap/ui/core/Fragment"],function(e,t,i){"use strict";return e.extend("gitpg.myapp.controller.MainView",{onInit:function(){let e=new t;this.getView().setModel(e,"myNode");e.loadData("http://localhost:8921/files").then(function(){debugger}.bind(this))},onPress:function(e){let t=e.getSource().getId();let n=this.getView().byId("link0").getId();let l=this.getView().byId("link1").getId();let g=this.getView().byId("link2").getId();let a=this.getView().byId("link3").getId();let s=this.getView().byId("link4").getId();let d=this.getView().byId("link5").getId();let o;if(t===n){o=i.load({name:"gitpg.myapp.view.fragments.link0",type:"XML",id:"link0Fragment",controller:this})}else if(t===l){o=i.load({name:"gitpg.myapp.view.fragments.link1",type:"XML",id:"link1Fragment",controller:this})}else if(t===g){o=i.load({name:"gitpg.myapp.view.fragments.link2",type:"XML",id:"link2Fragment",controller:this})}else if(t===a){o=i.load({name:"gitpg.myapp.view.fragments.link3",type:"XML",id:"link3Fragment",controller:this})}else if(t===s){o=i.load({name:"gitpg.myapp.view.fragments.link4",type:"XML",id:"link4Fragment",controller:this})}else if(t===d){o=i.load({name:"gitpg.myapp.view.fragments.link5",type:"XML",id:"link5Fragment",controller:this})}o.then(function(e){let t=this.getView().byId("myExtend");t.destroyItems();t.addItem(e)}.bind(this))}})});