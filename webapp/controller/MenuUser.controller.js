sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	'sap/ui/model/Sorter',
	"sap/ui/export/Spreadsheet",
	"sap/ui/export/library",
	"sap/m/PDFViewer",
	'sap/ui/core/Fragment',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, MessageBox, Utilities, History, MessageToast, Sorter, Spreadsheet, exportLibrary, PDFViewer,Fragment,Filter,FilterOperator) {
	"use strict";
	
	var contfilasGlob	= 0;
	var that;
	var oView;
	var tamanio = 0;
	
	return BaseController.extend("appDirisTesis.controller.MenuUser", {
		// handleRouteMatched: function(oEvent) {
		// 	var sAppId = "App5fe3d3a48407573fd2d7deb4";

		// 	var oParams = {};

		// 	if (oEvent.mParameters.data.context) {
		// 		this.sContext = oEvent.mParameters.data.context;

		// 	} else {
		// 		if (this.getOwnerComponent().getComponentData()) {
		// 			var patternConvert = function(oParam) {
		// 				if (Object.keys(oParam).length !== 0) {
		// 					for (var prop in oParam) {
		// 						if (prop !== "sourcePrototype" && prop.includes("Set")) {
		// 							return prop + "(" + oParam[prop][0] + ")";
		// 						}
		// 					}
		// 				}
		// 			};

		// 			this.sContext = patternConvert(this.getOwnerComponent().getComponentData().startupParameters);

		// 		}
		// 	}

		// 	var oPath;

		// 	if (this.sContext) {
		// 		oPath = {
		// 			path: "/" + this.sContext,
		// 			parameters: oParams
		// 		};
		// 		this.getView().bindObject(oPath);
		// 	}

		// },
		// onInit: function() {
		// 	this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		// 	this.oRouter.getTarget("MenuUser").attachDisplay(jQuery.proxy(this.handleRouteMatched, this));
			
		// 	// this.colocarVista();
		// },
		
		onInit: function(){
			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		},

		onAfterRendering: function(oEvent){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			
			sistema.setProperty("/vistaWelcomeV", true);
			
			var data = [
						  {
						    IdProducto: "0001",
						    codPatrim: "10101011",
						    Nombre: "TEROKAL",
						    Descripcion: "TARRO DE 1/4 DE GALON",
						    Cantidad: "150",
						    Modelo: "1/4 GALON",
						    Marca: "AFRIKANO",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0002",
						    codPatrim: "10101012",
						    Nombre: "CAJA DE GRAPAS N°9",
						    Descripcion: "USADAS PARA ASEGURAR CABLES",
						    Cantidad: "120",
						    Modelo: "GRAPA N°9",
						    Marca: "PLUMER",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0003",
						    codPatrim: "10101013",
						    Nombre: "MARTILLO",
						    Descripcion: "MARTILLO CABEZA DE METAL Y MANGO DE GOMA",
						    Cantidad: "5",
						    Modelo: "MARTILLO DE UÑA",
						    Marca: "TRUPER",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0004",
						    codPatrim: "10101014",
						    Nombre: "CINCEL",
						    Descripcion: "USADO PARA HACER ORIFICIOS EN LOS MUROS",
						    Cantidad: "5",
						    Modelo: "AVOR",
						    Marca: "CHINTEL",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0005",
						    codPatrim: "10101015",
						    Nombre: "CUTTER",
						    Descripcion: "UTILIZADA PARA CORTAR",
						    Cantidad: "15",
						    Modelo: "CUTT",
						    Marca: "CETER",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0006",
						    codPatrim: "10101016",
						    Nombre: "CRIMPIADOR",
						    Descripcion: "SE USA PARA UNIR LOS RJ CON EL CABLE",
						    Cantidad: "20",
						    Modelo: "MANTE",
						    Marca: "CITRIAN",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0007",
						    codPatrim: "10101017",
						    Nombre: "RJ45",
						    Descripcion: "CAJA DE RJ-45",
						    Cantidad: "20",
						    Modelo: "RJ-45 CAT 6",
						    Marca: "DIXON",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0008",
						    codPatrim: "10101018",
						    Nombre: "CAJA DE CABLE UTP CAT 6",
						    Descripcion: "CAJA DE CABLE UTP CAT 6",
						    Cantidad: "30",
						    Modelo: "CAT 6",
						    Marca: "DIXON",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0009",
						    codPatrim: "10101019",
						    Nombre: "MOUSE",
						    Descripcion: "MOUSE DE ESCRITORIO",
						    Cantidad: "50",
						    Modelo: "BASIC",
						    Marca: "HP",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0010",
						    codPatrim: "10101020",
						    Nombre: "TECLADO",
						    Descripcion: "TECLADO DE ESCRITORIO",
						    Cantidad: "20",
						    Modelo: "DESKTOP",
						    Marca: "HP",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0011",
						    codPatrim: "10101021",
						    Nombre: "MONITOR",
						    Descripcion: "PANTALLA DE 28 PULGADAS",
						    Cantidad: "50",
						    Modelo: "LTNS-489",
						    Marca: "HP",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0012",
						    codPatrim: "10101022",
						    Nombre: "FUENTE DE PODER",
						    Descripcion: "UTILIZADA DENTRO DE LA PC",
						    Cantidad: "60",
						    Modelo: "SS-33",
						    Marca: "HALION",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0013",
						    codPatrim: "10101023",
						    Nombre: "TARJETA DE VIDEO",
						    Descripcion: "TARJETA DE VIDOE DE PRUEBAS",
						    Cantidad: "4",
						    Modelo: "GTX 1050 2GB",
						    Marca: "NVIDIA",
						    Estado: "NUEVO"
						  },
						  {
						    IdProducto: "0014",
						    codPatrim: "10101024",
						    Nombre: "CASE",
						    Descripcion: "PROTECTOR DE LOS COMPONENTES DEL CPU",
						    Cantidad: "14",
						    Modelo: "KOLINK",
						    Marca: "DEEPCOOL",
						    Estado: "NUEVO"
						  }
						  //,
						  //{
						  //  IdProducto: "0015",
						  //  codPatrim: "10101025",
						  //  Nombre: "IMPRESORA",
						  //  Descripcion: "IMPRESORA TINTA CONTINUA",
						  //  Cantidad: "300",
						  //  Modelo: "LPS-44",
						  //  Marca: "EPSON",
						  //  Estado: "NUEVO"
						  //}
						  //,
						  //{
						  //  IdProducto: "0016",
						  //  codPatrim: "10101026",
						  //  Nombre: "MEMORIA RAM",
						  //  Descripcion: "TIPO DDR4",
						  //  Cantidad: "18",
						  //  Modelo: "DDR4",
						  //  Marca: "KINGSTON",
						  //  Estado: "NUEVO"
						  //}
					];
			
			// sistema.setProperty("/keyIdProdActEn"	, false);
			// sistema.setProperty("/keyDescActEn"		, false);
			// sistema.setProperty("/keyCantActEn"		, false);
			// sistema.setProperty("/keyUmActEn"		, false);
			sistema.setProperty("/btnActualizarE"	, false);
			
			sistema.setProperty("/keyIdProdActEn"	, false);
			sistema.setProperty("/keyDescActEn"		, false);
			sistema.setProperty("/keyCantActEn"		, false);
			sistema.setProperty("/keyEstActEn"		, false);
			
			sistema.setProperty("/keyNombreActEn"	, false);
			sistema.setProperty("/keyMarcaActEn"	, false);
			sistema.setProperty("/keyCodPatActEn"	, false);
			sistema.setProperty("/keyModActEn"		, false);
			
			sistema.setProperty("/btnFlowT"	, false);
			
			
			var dataNomIns =   [{NombreIns : "CANALETAS"},
								{NombreIns : "TEROKAL"},
								{NombreIns : "GRAPAS N°9"},
								{NombreIns : "MARTILLO"},
								{NombreIns : "CINCEL"},
								{NombreIns : "CUTTER"},
								{NombreIns : "CRIMPIADOR"},
								{NombreIns : "RJ45"},
								{NombreIns : "CAJA DE CABLE UTP CAT 6"},
								{NombreIns : "MOUSE"},
								{NombreIns : "TECLADO"},
								{NombreIns : "MONITOR"},
								{NombreIns : "FUENTE DE PODER"},
								{NombreIns : "TARJETA DE VIDEO"},
								{NombreIns : "CASE"},
								{NombreIns : "IMPRESORA"},
								{NombreIns : "MEMORIA RAM"}];
			
			sistema.setProperty("/dataNombreIns", dataNomIns);
			sistema.setProperty("/dataReporte", data);
			
			tamanio = data.length;
			
			sistema.setProperty("/titulo", "Insumos (" + tamanio + ")");
		},
		
		_onToggleButtonPress: function(oEvent) {
			var oToolPage = oEvent.getSource().getParent().getParent();
			var oSideNavigation = oToolPage.getAggregation('sideContent');
			var bExpanded = oSideNavigation.getExpanded();
			oSideNavigation.setExpanded(!bExpanded);
		},
		
		colocarVista: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
				
				vista.byId("idPrincipalPage").destroyMainContents();
				vista.byId("idPrincipalPage").addMainContent(tablaM);
				
				sistema.setProperty("/vistaWelcomeV", false);
				// vista.byId("idPrincipalPage").insertMainContent();
		},
		
		colocarRegistrar: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaRegistraInsumos", this);
				
				vista.byId("idPrincipalPage").destroyMainContents();
			
				vista.byId("idPrincipalPage").addMainContent(tablaM);
				
				sistema.setProperty("/vistaWelcomeV", false);
				// vista.byId("idPrincipalPage").insertMainContent();
		},
		
		colocarEliminar: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaEliminaInsumos", this);
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
			
			sistema.setProperty("/vistaWelcomeV", false);
				// vista.byId("idPrincipalPage").insertMainContent();
		},
		
		colocarActualizar: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaActualizaInsumos", this);
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
			
			sistema.setProperty("/vistaWelcomeV", false);
				// vista.byId("idPrincipalPage").insertMainContent();
		},
		
		colocarRegSoli: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaRegistraSolicitud", this);
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
			
			sistema.setProperty("/vistaWelcomeV", false);
		}, 
		
		colocarConSoli: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaConsultaSolicitud", this);
			
			// var vista = this.getView();
			sap.ui.getCore().byId("processflow1").zoomOut();
				
			var nodesAndLane =	{
							"nodes": [],
							"lanes": [
								{
									"id": "0",
									"icon": "sap-icon://order-status",
									"label": "Solicitud Realizada",
									"position": 0,
									"state": [
										{
											"state": "Positive",
											"value": 100
										}
									]
								}, {
									"id": "1",
									"icon": "sap-icon://monitor-payments",
									"label": "Solicitud Recibida",
									"position": 1,
									"state":[
												{
													"state": "Positive",
													"value": 100
												}
											]
								}, {
									"id": "2",
									"icon": "sap-icon://payment-approval",
									"label": "Revisando",
									"position": 2,
									"state":[
												{ 
													"state": "Positive",
													"value": 100 
												}
											]
								}, {
									"id": "3",
									"icon": "sap-icon://money-bills",
									"label": "Inoperativo",
									"position": 3,
									"state":[
												{
													"state": "Negative",
													"value": 100
												}
											]
								}, {
									"id": "4",
									"icon": "sap-icon://payment-approval",
									"label": "Trabajo Completo",
									"position": 4,
									"state":[
												{
													"state": "Positive",
													"value": 100
												}
											]
								}											
									]
						};
						
			sistema.setProperty("/nodesAndLane", nodesAndLane);	
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
			
			sistema.setProperty("/vistaWelcomeV", false);
		}, 
		
		ValueHelpCreadoPor : function (oEvent){
			var that = this;
			var vista = this.getView();
			
			  	if (!that._pValueHelpDialog) {
						that._pValueHelpDialog = Fragment.load({
							id: vista.getId(),
							name: "appDirisTesis/Fragments/UsuariosCreadoPor",
							controller: that
						}).then(function (oDialog) {
							vista.addDependent(oDialog);
							return oDialog;
						});
					}
						that._pValueHelpDialog.then(function(oDialog) {
						oDialog.getBinding("items").filter([]);
						oDialog.open();
					});
		},
		
		ValueHelpCreadoPor2 : function (oEvent){
			var that = this;
			var vista = this.getView();
			
		  	if (!that._pValueHelpDialog2) {
					that._pValueHelpDialog2 = Fragment.load({
						id: vista.getId(),
						name: "appDirisTesis/Fragments/UsuariosCreadoPor2",
						controller: that
					}).then(function (oDialog) {
						vista.addDependent(oDialog);
						return oDialog;
					});
				}
					that._pValueHelpDialog2.then(function(oDialog) {
					oDialog.getBinding("items").filter([]);
					oDialog.open();
				});
		},
		
		onSearch: function (oEvent) {
			var sValue = oEvent.getParameter("value");
			var oFilter = new Filter("NombreIns", FilterOperator.Contains, sValue);
			var oBinding = oEvent.getParameter("itemsBinding");
			oBinding.filter([oFilter]);
		},
		
		onValueHelpDialogClose: function (oEvent) {
			var vista			= this.getView();
			var sistema		= vista.getModel("sistema");
			var oSelectedItem	= oEvent.getParameter("selectedItem"),
				oInput			= sap.ui.getCore().byId("CreadoPor1");

			if (!oSelectedItem) {
				oInput.resetProperty("value");
				return;
			}
			sistema.setProperty("/dialogTipo",oSelectedItem.getTitle() ); 
			oInput.setValue(oSelectedItem.getTitle());
		},
		
		onValueHelpDialogClose2: function (oEvent) {
			var vista			= this.getView();
			var sistema		= vista.getModel("sistema");
			var oSelectedItem	= oEvent.getParameter("selectedItem"),
				oInput			= sap.ui.getCore().byId("CreadoPor2");

			if (!oSelectedItem) {
				oInput.resetProperty("value");
				return;
			}
			sistema.setProperty("/dialogNombreAct",oSelectedItem.getTitle() ); 
			oInput.setValue(oSelectedItem.getTitle());
		},
		
		
		registrarNuevo: function(){
			var vista				= this.getView();
			var sistema 			= vista.getModel("sistema");
			var obj					= {};
			var dataReporte 		= sistema.getProperty("/dataReporte");
			var keyDialogTipDoc 	= sistema.getProperty("/keyDialogTipDoc");
			var dialogidProdct		= sistema.getProperty("/dialogidProdct");
			var dialogDescrip		= sistema.getProperty("/dialogDescrip");
			var dialogCantidad		= sistema.getProperty("/dialogCantidad");
			var dialogNombre		= sistema.getProperty("/dialogNombre");
			var dialogMarca			= sistema.getProperty("/dialogMarca");
			var dialogCodPat		= sistema.getProperty("/dialogCodPat");
			var dialogModelo		= sistema.getProperty("/dialogModelo");
			var nomExs				= false;
			
			var tablaM				= sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
			
			if(dialogNombre){
				dataReporte.forEach(function(objeto){
					
					if(objeto.Nombre === dialogNombre){
						nomExs = true;
					}
					
				});
				
				if(nomExs){
					MessageBox.show(
					"El nombre " + dialogNombre + " ya ha sido agregado", {
						icon: sap.m.MessageBox.Icon.WARNING,
						title: "Guardar Insumo",
						actions: ['OK'],
						onClose: function (sActionClicked) {
							}
						}
					);
						
					return;	
				}
				
			}
			
			MessageBox.show(
					"¿Está seguro de que desea guardar el insumo?", {
						icon: sap.m.MessageBox.Icon.SUCCESS,
						title: "Guardar Insumo",
						actions: ['SI' , 'NO'],
						onClose: function (sActionClicked) {
							if (sActionClicked === 'SI') {
								
								obj.IdProducto	= dialogidProdct;
								obj.Descripcion = dialogDescrip;
								obj.Cantidad	= dialogCantidad;
								obj.Estado		= keyDialogTipDoc;
								obj.Nombre		= dialogNombre;
								obj.Marca		= dialogMarca;
								obj.codPatrim	= dialogCodPat;
								obj.Modelo		= dialogModelo;
								
								dataReporte.push(obj);
								
								sistema.setProperty("/dataReporte", dataReporte);
								
								tamanio ++;
								sistema.setProperty("/titulo", "Insumos (" + tamanio + ")");
													
								sistema.refresh(true);
								
								// MessageBox.("¡Se guardó corréctamente!");
								
								MessageBox.show(
										"¡Se guardó corréctamente!", {
											icon: sap.m.MessageBox.Icon.SUCCESS,
											title: "Guardado Exitoso",
											actions: ['OK'],
											onClose: function (sActionClicked) {
												if (sActionClicked === 'OK') {
													
													sistema.setProperty("/keyDialogTipDoc", "0");
													sistema.setProperty("/dialogidProdct", "");
													sistema.setProperty("/dialogDescrip", "");
													sistema.setProperty("/dialogCantidad", "");
													sistema.setProperty("/dialogNombre", "");
													sistema.setProperty("/dialogMarca", "");
													sistema.setProperty("/dialogCodPat", "");
													sistema.setProperty("/dialogModelo", "");
													
													vista.byId("idPrincipalPage").destroyMainContents();
													vista.byId("idPrincipalPage").addMainContent(tablaM);
													
												}
											}
										}
									);	
							}
						}
					}
				);
			
		},
		
		cancelarRegistro: function(){
			var vista	= this.getView();
			var tablaM	= sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
			var sistema = vista.getModel("sistema");
			
			sistema.setProperty("/keyDialogTipDoc", "0");
			sistema.setProperty("/dialogidProdct", "");
			sistema.setProperty("/dialogDescrip", "");
			sistema.setProperty("/dialogCantidad", "");
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
		},
		
		botonBuscar: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var dataReporte = sistema.getProperty("/dataReporte");
			var dialogidProdctAct = sistema.getProperty("/dialogidProdctActInp");
			var valida = false; 
			
			dataReporte.forEach(function(objeto){
				if(objeto.IdProducto === dialogidProdctAct){
					valida = true;
				}else{
					valida = false;
				}	
			});
			
			dataReporte.forEach(function(objeto){
				if(objeto.IdProducto === dialogidProdctAct){
					
					sistema.setProperty("/keyIdProdActEn"	, true);
					sistema.setProperty("/keyDescActEn"		, true);
					sistema.setProperty("/keyCantActEn"		, true);
					sistema.setProperty("/keyEstActEn"		, true);
					
					sistema.setProperty("/keyNombreActEn"	, true);
					sistema.setProperty("/keyMarcaActEn"	, true);
					sistema.setProperty("/keyCodPatActEn"	, true);
					sistema.setProperty("/keyModActEn"		, true);
					
					sistema.setProperty("/btnActualizarE"	, true);
					
					sistema.setProperty("/dialogNombreAct"	, objeto.Nombre);
					sistema.setProperty("/dialogMarcaAct"	, objeto.Marca);
					sistema.setProperty("/dialogCodPatAct"	, objeto.codPatrim);
					sistema.setProperty("/dialogModeloAct"	, objeto.Modelo);
					sistema.setProperty("/keyDialogTipDocAct"	, objeto.Estado);
					sistema.setProperty("/dialogidProdctAct"	, objeto.IdProducto);
					sistema.setProperty("/dialogCantidadAct"	, objeto.Cantidad);
					sistema.setProperty("/dialogDescripAct"		, objeto.Descripcion);
					
					MessageToast.show("¡Se encontró el Insumo!");
					
					valida = true;
				}
			});
			
			if(valida === false){
				
				MessageToast.show("¡Insumo no Existe!");
				
				// sistema.setProperty("/keyIdProdActEn"	, false);
				// sistema.setProperty("/keyDescActEn"		, false);
				// sistema.setProperty("/keyCantActEn"		, false);
				// sistema.setProperty("/keyUmActEn"		, false);
				sistema.setProperty("/btnActualizarE"	, false);
				
				sistema.setProperty("/keyIdProdActEn"	, false);
				sistema.setProperty("/keyDescActEn"		, false);
				sistema.setProperty("/keyCantActEn"		, false);
				sistema.setProperty("/keyEstActEn"		, false);
				
				sistema.setProperty("/keyNombreActEn"	, false);
				sistema.setProperty("/keyMarcaActEn"	, false);
				sistema.setProperty("/keyCodPatActEn"	, false);
				sistema.setProperty("/keyModActEn"		, false);
				
				
				sistema.setProperty("/keyDialogTipDocAct"	, "0");
				sistema.setProperty("/dialogidProdctAct"	, "");
				sistema.setProperty("/dialogCantidadAct"	, "");
				sistema.setProperty("/dialogDescripAct"		, "");
				sistema.setProperty("/dialogNombreAct"		, "");
				sistema.setProperty("/dialogCodPatAct"		, "");
				sistema.setProperty("/dialogModeloAct"		, "");
				sistema.setProperty("/dialogMarcaAct"		, "");
					
			}
			
		},
		
		botonActualizar: function(){
			var vista		= this.getView();
			var sistema 	= vista.getModel("sistema");
			var dataReporte = sistema.getProperty("/dataReporte");
			var dialogidProdctActInp = sistema.getProperty("/dialogidProdctActInp");
			
			var keyDialogTipDocAct = sistema.getProperty("/keyDialogTipDocAct");
			var dialogidProdctAct = sistema.getProperty("/dialogidProdctAct");
			var dialogCantidadAct = sistema.getProperty("/dialogCantidadAct");
			var dialogDescripAct = sistema.getProperty("/dialogDescripAct");
			var dialogNombreAct = sistema.getProperty("/dialogNombreAct");
			var dialogCodPatAct = sistema.getProperty("/dialogCodPatAct");
			var dialogModeloAct = sistema.getProperty("/dialogModeloAct");
			var dialogMarcaAct = sistema.getProperty("/dialogMarcaAct");
			
			
			
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
			
			MessageBox.show(
				"¿Está seguro que desea actualizar los cambios?", {
					icon: sap.m.MessageBox.Icon.SUCCESS,
					title: "Actualizar Insumo",
					actions: ['SI','NO'],
					onClose: function (sActionClicked) {
						if (sActionClicked === 'SI') {
							dataReporte.forEach(function(objeto){
								if(objeto.IdProducto === dialogidProdctActInp){
									
									objeto.Estado			= keyDialogTipDocAct;
									objeto.IdProducto		= dialogidProdctAct;
									objeto.Descripcion		= dialogDescripAct;
									objeto.Cantidad			= dialogCantidadAct;
									
									objeto.Nombre			= dialogNombreAct;
									objeto.Marca			= dialogMarcaAct;
									objeto.codPatrim		= dialogCodPatAct;
									objeto.Modelo			= dialogModeloAct;
									
									
								}	
							});
							
							MessageBox.show(
								"¡Se actualizó corréctamente!", {
									icon: sap.m.MessageBox.Icon.SUCCESS,
									title: "Actualizado Exitoso",
									actions: ['OK'],
									onClose: function (sActionClicked) {
										if (sActionClicked === 'OK') {
											
											sistema.refresh(true);
											
											sistema.setProperty("/keyDialogTipDocAct"	, "0");
											sistema.setProperty("/dialogidProdctAct"	, "");
											sistema.setProperty("/dialogCantidadAct"	, "");
											sistema.setProperty("/dialogDescripAct"		, "");
											sistema.setProperty("/dialogidProdctActInp" , "");
											
											sistema.setProperty("/dialogNombreAct"	, "");
											sistema.setProperty("/dialogCodPatAct"	, "");
											sistema.setProperty("/dialogModeloAct"	, "");
											sistema.setProperty("/dialogMarcaAct"	, "");
											
											sistema.setProperty("/btnActualizarE"	, false);
											sistema.setProperty("/keyIdProdActEn"	, false);
											sistema.setProperty("/keyDescActEn"		, false);
											sistema.setProperty("/keyCantActEn"		, false);
											sistema.setProperty("/keyEstActEn"		, false);
											
											sistema.setProperty("/keyNombreActEn"	, false);
											sistema.setProperty("/keyMarcaActEn"	, false);
											sistema.setProperty("/keyCodPatActEn"	, false);
											sistema.setProperty("/keyModActEn"		, false);
											sistema.setProperty("/btnActualizarE"	, false);
											
											vista.byId("idPrincipalPage").destroyMainContents();
											vista.byId("idPrincipalPage").addMainContent(tablaM);
											
										}
									}
								}
							);
							
						}
					}
				}
			);
		},
		
		cancelActualizar: function(){
			var vista	= this.getView();
			var tablaM	= sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
			var sistema = vista.getModel("sistema");
			
			sistema.setProperty("/dialogidProdctActInp" , "");
			sistema.setProperty("/keyDialogTipDocAct"	, "0");
			sistema.setProperty("/dialogidProdctAct"	, "");
			sistema.setProperty("/dialogCantidadAct"	, "");
			sistema.setProperty("/dialogDescripAct"		, "");
			
			sistema.setProperty("/dialogNombreAct"	, "");
			sistema.setProperty("/dialogCodPatAct"	, "");
			sistema.setProperty("/dialogModeloAct"	, "");
			sistema.setProperty("/dialogMarcaAct"	, "");
			
			// sistema.setProperty("/keyIdProdActEn"	, false);
			// sistema.setProperty("/keyDescActEn"		, false);
			// sistema.setProperty("/keyCantActEn"		, false);
			// sistema.setProperty("/keyUmActEn"		, false);
			sistema.setProperty("/btnActualizarE"	, false);
			sistema.setProperty("/keyIdProdActEn"	, false);
			sistema.setProperty("/keyDescActEn"		, false);
			sistema.setProperty("/keyCantActEn"		, false);
			sistema.setProperty("/keyEstActEn"		, false);
			
			sistema.setProperty("/keyNombreActEn"	, false);
			sistema.setProperty("/keyMarcaActEn"	, false);
			sistema.setProperty("/keyCodPatActEn"	, false);
			sistema.setProperty("/keyModActEn"		, false);
			
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
		},
		
		botonBuscarDelete: function(){
			var vista				= this.getView();
			var sistema 			= vista.getModel("sistema");
			var dataReporte 		= sistema.getProperty("/dataReporte");
			var idProductoDelete	= sistema.getProperty("/idProductoDelete");
			var valida				= false; 
			
			dataReporte.forEach(function(objeto){
				if(objeto.IdProducto === idProductoDelete){
					valida = true;
				}else{
					valida = false;
				}	
			});
			
			dataReporte.forEach(function(objeto){
				if(objeto.IdProducto === idProductoDelete){
					
					sistema.setProperty("/dialogEstDel"			, objeto.Estado);
					sistema.setProperty("/dialogidProdctDel"	, objeto.IdProducto);
					sistema.setProperty("/dialogCantidadDel"	, objeto.Cantidad);
					sistema.setProperty("/dialogDescripDel"		, objeto.Descripcion);
					
					sistema.setProperty("/dialogNombDel"			, objeto.Nombre);
					sistema.setProperty("/dialogMarcaDel"	, objeto.Marca);
					sistema.setProperty("/dialogCodPatDel"	, objeto.codPatrim);
					sistema.setProperty("/dialogModeloDel"		, objeto.Modelo);
					
					MessageToast.show("¡Se encontró el Insumo!");
					
					valida = true;
				}
			});
			
			if(valida === false){
				
				MessageToast.show("¡Insumo no Existe!");
				
				// sistema.setProperty("/dialogUmDel"			, "");
				// sistema.setProperty("/dialogidProdctDel"	, "");
				// sistema.setProperty("/dialogCantidadDel"	, "");
				// sistema.setProperty("/dialogDescripDel"		, "");
				
				sistema.setProperty("/dialogEstDel"			, "");
				sistema.setProperty("/dialogidProdctDel"	, "");
				sistema.setProperty("/dialogCantidadDel"	, "");
				sistema.setProperty("/dialogDescripDel"		, "");
				
				sistema.setProperty("/dialogNombDel"			, "");
				sistema.setProperty("/dialogMarcaDel"	, "");
				sistema.setProperty("/dialogCodPatDel"	, "");
				sistema.setProperty("/dialogModeloDel"		, "");
				
				
			}
			
		},
		
		cancelDelete: function(){
			var vista	= this.getView();
			var tablaM	= sap.ui.xmlfragment("appDirisTesis.Fragments.vistaReporteInsumos", this);
			var sistema = vista.getModel("sistema");
			
			// sistema.setProperty("/dialogUmDel"			, "");
			// sistema.setProperty("/dialogidProdctDel"	, "");
			// sistema.setProperty("/dialogCantidadDel"	, "");
			// sistema.setProperty("/dialogDescripDel"		, "");
			
			sistema.setProperty("/dialogEstDel"			, "");
			sistema.setProperty("/dialogidProdctDel"	, "");
			sistema.setProperty("/dialogCantidadDel"	, "");
			sistema.setProperty("/dialogDescripDel"		, "");
			
			sistema.setProperty("/dialogNombDel"	, "");
			sistema.setProperty("/dialogMarcaDel"	, "");
			sistema.setProperty("/dialogCodPatDel"	, "");
			sistema.setProperty("/dialogModeloDel"	, "");
			
			sistema.setProperty("/idProductoDelete"		, "");
				
			vista.byId("idPrincipalPage").destroyMainContents();
			vista.byId("idPrincipalPage").addMainContent(tablaM);
		},
		
		botonBorrar: function(){
			var vista					= this.getView();
			var sistema 				= vista.getModel("sistema");
			var dataReporte 			= sistema.getProperty("/dataReporte");
			var dialogidProdctActInp	= sistema.getProperty("/dialogidProdctActInp");
			var tablaM					= sap.ui.xmlfragment("appDirisTesis.Fragments.vistaEliminaInsumos", this);
			
			MessageBox.show(
				"¿Está seguro que desea borrar el registro?", {
					icon: sap.m.MessageBox.Icon.SUCCESS,
					title: "Borrar Insumo",
					actions: ['SI','NO'],
					onClose: function (sActionClicked) {
						if (sActionClicked === 'SI') {
							dataReporte.forEach(function(objeto){
								if(objeto.IdProducto === dialogidProdctActInp){
								}	
							});
							
							MessageBox.show(
								"¡Se borró corréctamente!", {
									icon: sap.m.MessageBox.Icon.SUCCESS,
									title: "Borrado Exitoso",
									actions: ['OK'],
									onClose: function (sActionClicked) {
										if (sActionClicked === 'OK') {
											
											sistema.refresh(true);
											
											sistema.setProperty("/keyDialogTipDocAct"	, "0");
											sistema.setProperty("/dialogidProdctAct"	, "");
											sistema.setProperty("/dialogCantidadAct"	, "");
											sistema.setProperty("/dialogDescripAct"		, "");
											sistema.setProperty("/dialogidProdctActInp" , "");
											
											// sistema.setProperty("/keyIdProdActEn"	, false);
											// sistema.setProperty("/keyDescActEn"		, false);
											// sistema.setProperty("/keyCantActEn"		, false);
											// sistema.setProperty("/keyUmActEn"		, false);
											sistema.setProperty("/btnActualizarE"	, false);
											
											sistema.setProperty("/keyIdProdActEn"	, false);
											sistema.setProperty("/keyDescActEn"		, false);
											sistema.setProperty("/keyCantActEn"		, false);
											sistema.setProperty("/keyEstActEn"		, false);
											
											sistema.setProperty("/keyNombreActEn"	, false);
											sistema.setProperty("/keyMarcaActEn"	, false);
											sistema.setProperty("/keyCodPatActEn"	, false);
											sistema.setProperty("/keyModActEn"		, false);
											
											
											vista.byId("idPrincipalPage").destroyMainContents();
											vista.byId("idPrincipalPage").addMainContent(tablaM);
											
										}
									}
								}
							);
							
						}
					}
				}
			);
			
		},
		
		masFilas: function(){
		var vista			= this.getView();
		var ModelProyect	= vista.getModel("sistema");
        var jsonData		= ModelProyect.getProperty("/jsonData");
        
		    if(contfilasGlob > 0){
		    	
		    	contfilasGlob ++;
		   	
		    	var gastos =	{	
		    						numSolcER		: "ER-10245",
				    				numDesglose 	: contfilasGlob,
									tipoGasto		: "",
									ceCo			: "",
									ordenInterna	: "",
									elemenPep		: "",
									noGravada		: "",
									importe 		: "",
									motivo			: ""
			    				};
		    				
		    	jsonData.push(gastos);			
		    	ModelProyect.setProperty("/jsonData", jsonData);
		    	ModelProyect.refresh(true);
		    	
		    }else{
		    	
		    	contfilasGlob = 1;
		    	
		    	var json = [
			    				{	
			    					numSolcER		: "ER-10245",
				    				numDesglose 	: contfilasGlob,
									tipoGasto		: "",
									ceCo			: "",
									ordenInterna	: "",
									elemenPep		: "",
									noGravada		: "",
									importe 		: "",
									motivo			: ""
			    				}
		    				];
		    				
		    	ModelProyect.setProperty("/jsonData", json);
		    	ModelProyect.refresh(true);
		    }
        },
		
		deleteRow : function(oArg){
        var that			= this;
		var oView			= this.getView();
		var ModelProyect	= oView.getModel("sistema");
		var jsonData		= ModelProyect.getProperty("/jsonData");	
		var deleteRecord	= oArg.getSource().oPropagatedProperties.oBindingContexts.sistema.sPath;
		var datos			= ModelProyect.getProperty(deleteRecord);
		
			for(var i=0;i<jsonData.length;i++){
				if(jsonData[i] === datos ){
					jsonData.splice(i,1); //removing 1 record from i th index.
					ModelProyect.refresh(true);
					contfilasGlob--;
				}
			}
		},
		
		cancelRegistraSolic: function(){
			var vista = this.getView();
			var sistema = vista.getModel("sistema");
			var tablaM = sap.ui.xmlfragment("appDirisTesis.Fragments.vistaWelcome", this);
			
			
			MessageBox.warning("¿Estás seguro que deseas cancelar?", {
			actions: ["Aceptar", "Cancelar"],
			emphasizedAction: MessageBox.Action.OK,
			onClose: function (sAction) {
				if (sAction === "Aceptar") {
					
					vista.byId("idPrincipalPage").destroyMainContents();
					vista.byId("idPrincipalPage").addMainContent(tablaM);
					
					sistema.setProperty("/vistaWelcomeV", false);
					
				}
			}
			});
				
			
				// vista.byId("idPrincipalPage").insertMainContent();
		},
		
		// cancelRegistraSolic : function (oEvent){
		// 	var that = this;
		// 	var vista = this.getView();
			
		// 	  	if (!that._pValueHelpDialog3) {
		// 				that._pValueHelpDialog3 = Fragment.load({
		// 					id: vista.getId(),
		// 					name: "appDirisTesis/Fragments/vistaWelcome",
		// 					controller: that
		// 				}).then(function (oDialog) {
		// 					vista.addDependent(oDialog);
		// 					return oDialog;
		// 				});
		// 			}
		// 				that._pValueHelpDialog3.then(function(oDialog) {
		// 				oDialog.getBinding("items").filter([]);
		// 				oDialog.open();
		// 			});
		// },
		   
		enviarSistema: function(){
			var prueba = "pru"; 
			MessageBox.warning("¿Estás seguro que deseas cerrar la sesión?", {
			actions: ["Aceptar", "Cancelar"],
			emphasizedAction: MessageBox.Action.OK,
			onClose: function (sAction) {
				if (sAction === "Aceptar") {

					this.oRouter.navTo("Login");
					// window.location.replace("https://webidetesting4681421-joxjyia7sf.dispatcher.us2.hana.ondemand.com/webapp/index.html?hc_orionpath=%2FDI_webide_di_workspace9cu63wt6nu0cw448%2FzTesisLoginJeremy&neo-di-affinity=BIGipServerdisapwebide.us2.hana.ondemand.com+%21DALDSubjosY00puY9%2Fh48zaAbljjXA1KOAs9qq00FlCCLJoWmq3mgB5IJI%2BPEm0WNtAeydEi7341IWs%3D&origional-url=index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off", "_blank");
					
				}
			}
			});
			
		},
		
		botonActiva: function(){
			var vista					= this.getView();
			var sistema 				= vista.getModel("sistema");
			
			sistema.setProperty("/btnFlowT"	, true);
		},
		
		// enviarSistema: function(){
			
		// 	this.oRouter.navTo("Login");
			
		// 	// window.location.replace("https://webidetesting3140588-joxjyia7sf.dispatcher.us2.hana.ondemand.com/webapp/index.html?hc_orionpath=%2FDI_webide_di_workspace9cu63wt6nu0cw448%2FzTesisMenuJeremy&neo-di-affinity=BIGipServerdisapwebide.us2.hana.ondemand.com+%21gTJOMZIeqhgjjUAw0dmbiy1eP2d8B15sHsE26G71qRNsqp46eBz%2BIgcbObopQKlG07QL3o8KrRxFxGc%3D&origional-url=index.html&sap-ui-appCacheBuster=..%2F&sap-ui-xx-componentPreload=off", "_blank");
		// }

	});
}, /* bExport= */ true);
