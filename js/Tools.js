var rxManager = {
	ackManager : function (data){
		alert("message recu par le serveur");
	}
}
/**
  * Fonction d'orientation de message entrant
  */
var rxTools = {//@bm : bookMark switch de message de r�ception
//Orientation du message reçu
//    rxRouting : function (scope,rootScope,data/*,PartyStartService*/){
	rxRouting : function (scope,rootScope,data){
        var mType = data.messageType;
        
        switch(mType) {
            case "accueil":
                alert(data.message);
                break;
            
            case "ackLogin":
//console.info("[Test:] Blason de fin de tour recu: ",data.blasonColor);
            	rxManager.ackManager(data);
            	break;
				
            default:
                alert("Type de message inconnue!");
            	console.info("ORNI: ",data);
        }
    }
        
};