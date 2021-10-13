sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	'sap/m/MessageToast'
], function(BaseController, MessageBox, Utilities, History, MessageToast) {
	"use strict";

	return BaseController.extend("appDirisTesis.controller.Login", {
		
		onInit: function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		validarUser: function(){
			var vista = this.getView();
			var modelo = vista.getModel("sistema");
			var usuarioLog = modelo.getProperty("/usuarioLog");
			var contraseniaLog = modelo.getProperty("/contraseniaLog");
			
			if(usuarioLog !== "soportePrueba" && contraseniaLog !== "soportePrueba" || (usuarioLog === undefined && contraseniaLog === undefined)){
				
				
				if(usuarioLog === undefined && contraseniaLog === undefined){
					modelo.setProperty("/userTextState", "Error");
					modelo.setProperty("/userStateText", "Coloque un usuario");
					modelo.setProperty("/contraTextState", "Error");
					modelo.setProperty("/contraStateText", "Coloque una contraseña");
					
					return;
					
				}else{
					
					modelo.setProperty("/userTextState", "None");
					modelo.setProperty("/userStateText", "");
					modelo.setProperty("/contraTextState", "None");
					modelo.setProperty("/contraStateText", "");
				}
				
				if(usuarioLog !== "soportePrueba" && (contraseniaLog === "" || contraseniaLog === undefined)){
					modelo.setProperty("/contraTextState", "Error");
					modelo.setProperty("/contraStateText", "Coloque una contraseña");
					
					return;
					
				}else{
					modelo.setProperty("/userTextState", "None");
					modelo.setProperty("/userStateText", "");
				}
				
				if(contraseniaLog !== "soportePrueba" && (usuarioLog === "" || usuarioLog === undefined)){
					modelo.setProperty("/userTextState", "Error");
					modelo.setProperty("/userStateText", "Coloque un usuario");
					
					return;
					
				}else{
					modelo.setProperty("/contraTextState", "None");
					modelo.setProperty("/contraStateText", "");
				}
				
				if(usuarioLog !== "soportePrueba" && contraseniaLog !== "soportePrueba"){
					
					modelo.setProperty("/userTextState", "Error");
					modelo.setProperty("/userStateText", "Coloque el usuario correcto");
					modelo.setProperty("/contraTextState", "Error");
					modelo.setProperty("/contraStateText", "Coloque la contraseña correcta");
					
					MessageBox.error("Usuario o contraseña incorrectos", {
					actions: ["OK"],
					emphasizedAction: MessageBox.Action.OK,
					onClose: function (sAction) {
						if (sAction === "OK") {
							
						}
					}
					});
					
					return;
					
				}
				
				
			}else{
					
					MessageToast.show("¡Se inició sesión correctamente!");
					
					this.enviarSistema();
				
					modelo.setProperty("/userTextState", "None");
					modelo.setProperty("/userStateText", "");
					modelo.setProperty("/contraTextState", "None");
					modelo.setProperty("/contraStateText", "");
				
			}
			
		},
		
		enviarSistema: function(){
			
			this.oRouter.navTo("MenuUser");
			
			// window.location.replace("https://webidetesting3140588-joxjyia7sf.dispatcher.us2.hana.ondemand.com/webapp/index.html?hc_orionpath=%2FDI_webide_di_workspace9cu63wt6nu0cw448%2FzTesisMenuJeremy&neo-di-affinity=BIGipServerdisapwebide.us2.hana.ondemand.com+%21gTJOMZIeqhgjjUAw0dmbiy1eP2d8B15sHsE26G71qRNsqp46eBz%2BIgcbObopQKlG07QL3o8KrRxFxGc%3D&origional-url=index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off", "_blank");
		}
		
	});
}, /* bExport= */ true);
