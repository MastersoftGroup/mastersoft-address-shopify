if(typeof Checkout === "object") {
    if(typeof Checkout.$ === "function") {     
        window.HarmonyShopifyConfig = {
        	//Get started with a FREE Trial licence key - https://hosted.mastersoftgroup.com/console/#/.
            key: "<username-without-domain>:<credentials>",
			
          	//================ START optional lines =======================
            
            //default url: "https://hosted.mastersoftgroup.com"
            url: "https://hosted.mastersoftgroup.com",
            
            //true to output street and postal in AddressLine1, building and subdwelling in AddressLine2 (default: false)
            useAddressLine2: true,
            
            //For all available options: http://developer.mastersoftgroup.com/harmony/api/object/address.html#FeatureOption.
            options: {
                singleLineHitNumber: 5,
                caseType: "TITLE"
            },
            
        	//default sot: "AUPAF"
            auOptions: {
                sot: "GNAF"
            },
            
            //default sot: "NZPAF"
            nzOptions: {
                caseType: "UPPER"
            }
          	//================ END optional lines =======================
        };     
        var s = document.createElement("script");      
        s.type = "text/javascript";
        s.async = 1;       
        s.src = "https://common.mastersoftgroup.com/scripts/harmony-shopify-current.min.js";
        document.getElementsByTagName("head")[0].appendChild(s);
    }
}
