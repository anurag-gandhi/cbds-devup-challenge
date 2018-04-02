// global application configurations go here
global_config = {
	"app": {
		"name": "Advanced Analytics Center Home Activity",
		"build": "0.0.1",
		"authors": [
	    	"Nathan Katz <nathank@il.ibm.com>",
	    	"Roi Zahut <roy.zahut@ibm.com>"
	  	]
	},
	"node_starter": {
		"build": "1.3.0"
	},
	"errors": {
		// for standard HTTP status codes, see this link: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
		server: {code: 500, error: "There was a server error. Please try again soon."},
		email: {code: 401, error: "The email you've entered does not match any account. Contact an admin to sign up."},
		disabled: {code: 401, error: "This user has been disabled by an admin."},
		password: {code: 401, error: "The password is incorrect."},
		forbidden: {code: 403, error: "Access to this resource is forbidden."},
		authenticated: {code: 401, error: "No user session detected - user must login to application."},
	}
};