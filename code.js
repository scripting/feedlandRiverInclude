const appConsts = {
	urlFeedlandServer: "https://feedland.com/"
	}

const riverSpec = {
	screenname: "davewiner", 
	catname: "All"
	};

function startup () {
	console.log ("startup");
	$("#idServerUrl").text ("Server URL: " + appConsts.urlFeedlandServer);
	$("#idRiverSpec").text ("River spec: " + jsonStringify (riverSpec));
	displayTraditionalRiver (riverSpec, $(".divRiverContainer"));
	}
