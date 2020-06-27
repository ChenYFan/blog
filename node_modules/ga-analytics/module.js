var googleapis 	= require('googleapis'),
	OAuth2 		= googleapis.auth.OAuth2,
	fs			= require("fs"),
	_ 			= require("lodash"),
	moment 		= require("moment");

_.mixin({
  compactObject : function(o) {
     var clone = _.clone(o);
     _.each(clone, function(v, k) {
       if(!v) {
         delete clone[k];
       }
     });
     return clone;
  }
});

module.exports = function(settings, final_callback) {
	
	try {
		var GOOGLEAPI_CLIENTID = (settings.clientId ? settings.clientId : process.env.GOOGLEAPI_CLIENTID),
			GOOGLEAPI_EMAIL = (settings.serviceEmail ? settings.serviceEmail : process.env.GOOGLEAPI_EMAIL),
			GOOGLEAPI_KEY = (settings.key ? settings.key : process.env.GOOGLEAPI_KEY),
			GOOGLEAPI_ANALYTICS_TABLE = (settings.ids ? settings.ids : process.env.GOOGLEAPI_ANALYTICS_TABLE);

		var sessionFile = process.env.TMPDIR + "ga-analytics-" + GOOGLEAPI_EMAIL.replace(/[^a-zA-Z\-]/gi, "_");	
		
		if(!GOOGLEAPI_CLIENTID || !GOOGLEAPI_EMAIL || !GOOGLEAPI_KEY || !GOOGLEAPI_ANALYTICS_TABLE) throw "Missing";
		
	} catch(e) {
		var error = "\n A valid client id, service email, key, and table are required" +
					"\n\n OAuth Client id: " + settings.clientId +
					"\n Service Email: " + settings.serviceEmail + 
					"\n Path to Private Key: " + settings.key +
					"\n Google Analytics view: " + GOOGLEAPI_ANALYTICS_TABLE;
		
		final_callback(new Error(error));
		return;
	}

	if(!settings.startDate)
		settings.startDate = moment().subtract(moment.duration(1, 'M')).format('YYYY-MM-DD');
	
	if(!settings.endDate)
		settings.endDate = moment(settings.startDate).add(moment.duration(1, 'M')).format('YYYY-MM-DD')


	var oauth2Client = new OAuth2(GOOGLEAPI_CLIENTID, null, 'postmessage'),
		jwt 		 = new googleapis.auth.JWT(GOOGLEAPI_EMAIL, GOOGLEAPI_KEY, null, ['https://www.googleapis.com/auth/analytics.readonly']);

	var authorize = function(callback) {
		fs.exists(sessionFile, function(exists) {
			if(exists) {
				fs.readFile(sessionFile, function(err, res) {
					if(err) {
						jwt.authorize(callback);
						return;
					}
					
					try {
						var json = JSON.parse(res);
					} catch(e) {
						jwt.authorize(callback);
						return;
					}
					
					if(new Date(json.expiry_date) > Date.now()) {
						callback(null, json);
					} else {
						jwt.authorize(callback);
					}
					
				});
			} else {
				jwt.authorize(callback);
			}
			
		});
	}
	

	authorize(function(err, result) {
		if(err) {
			final_callback(err);
			return;
		}
		
		fs.writeFile(sessionFile, JSON.stringify(result));

		oauth2Client.setCredentials({
			access_token: result.access_token,
			refresh_token: result.refresh_token
		});
	
		// https://developers.google.com/analytics/devguides/reporting/core/dimsmets
		// https://developers.google.com/analytics/devguides/reporting/core/v3/coreDevguide
		googleapis.analytics('v3').data.ga.get(_.compactObject({
		    "ids": GOOGLEAPI_ANALYTICS_TABLE,
		    "start-date": settings.startDate,
		    "end-date": settings.endDate,
		    "metrics": settings.metrics,
			"filters": settings.filter,
			'dimensions': settings.dimensions,
			"max-results": settings.max,
			sort: settings.sort,
			auth: oauth2Client
		}), function(err, r) {
			
			if(err) {
				final_callback(err);
				return;
			}
			
			final_callback(null, r);
		});	
		
	});
	
}