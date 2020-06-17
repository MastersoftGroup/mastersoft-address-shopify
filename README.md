# mastersoft-address-shopify
Mastersoft Address Autocomplete extension for Shopify and Shopify Plus.

## Features
- Autocomplete billing and shipping address in Checkout page
- Only enabled when country is selected as Australia or New Zealand
- Configuration for address lookup options, such as Source of Truth

## Installation
Go to Shopify Plus Admin Dashboard of your Store: `Online Store` -> `Themes` -> `Actions` dropdown -> `Edit Code`.
1.	Download `mastersoft-shopify.js` file.
2.	Go to `Assets`: click `Add a new asset` and upload `mastersoft-shopify.js` file.
3.	Go to `Layout`: open `checkout.liquid` (otherwise add a new layout for `checkout.liquid`) and add this code before the closing `</body>` tag: 
	```javascript
	{{ "mastersoft-shopify.js"  | asset_url | script_tag }} 
	```

## Configuration
In `mastersoft-shopify.js` under `HarmonyShopifyConfig`:
-	**key** (Mandatory)  
  	Must be in this format: **username-without-domain:password**.    
  	**Get your FREE Trial licence key [here](https://hosted.mastersoftgroup.com/console/#/).**  

-	**url** (Optional)    
  	Default value: `https://hosted.mastersoftgroup.com`

-	**useAddressLine2** (Optional)  
	Since: **v1.7.0** (`harmony-shopify-1.7.0.min.js`)  
	Value `true` will output postal and street in AddressLine1 and building and subdwelling in AddressLine2.  
	Value `false` will output as previous behavior: building, subdwelling, postal and street in AddressLine1.  
	Default value: `false`   	

-	**options**    
  	Generic Options for both AUSTRALIA and NEW ZEALAND.    
  	Default value: `{ singleLineHitNumber: 20, caseType: 'UPPER' }`

-	**auOptions**
	Options specific for AUSTRALIA ("Australia" Country, "au" locale).  
  	Default value: `{ sot: 'AUPAF' }`

- 	**nzOptions**
	Options specific for NEW ZEALAND ("New Zealand" Country, "nz" locale).    
  	Default value: `{ sot: 'NZPAF' }`

For country-specific options (`auOptions`, `nzOptions`), if the same option key is defined in the generic options (`options`), the values in the country-specific options will take precedence over the value in the generic options.  

To configure the Options, here is the full list of [FeatureOption](http://developer.mastersoftgroup.com/harmony/api/object/address.html#FeatureOption) available.

## Uninstallation
Go to Shopify Plus Admin Dashboard of your Store: `Online Store` -> `Themes` -> `Actions` dropdown -> `Edit Code`.
1.	Go to `Layout`: open `checkout.liquid`, go to before the closing `</body>` tag and remove this code: 
	```javascript
	{{ "mastersoft-shopify.js"  | asset_url | script_tag }} 
	```
2.	(Optional) Go to `Assets` and delete `mastersoft-shopify.js` file.
	
## Support
If you have any questions or issues with this module, open an issue on [GitHub](https://github.com/MastersoftGroup/mastersoft-address-shopify/issues). Alternatively you can contact us via e-mail or via our website below.

E-mail: <msg.support@gbgplc.com>  
Homepage: <https://www.mastersoftgroup.com/>


## Copyright
(c) 2020 Mastersoft
