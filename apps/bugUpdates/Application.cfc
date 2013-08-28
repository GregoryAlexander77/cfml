component {

	this.name		= "bugUpdates01";
	this.datasource	= "bugUpdates";
	this.ormEnabled	= true;
	this.ormSettings	= {
		cfcLocation	= getDirectoryFromPath(getCurrentTemplatePath()) & "components\orm",
		dbCreate	= "update",
		dialect		= "MySQL"
	};
	this.mappings	= {
		"/cfbugnotifier" = expandPath("../../com/daccf/cfbugnotifier"),
		"/javaloader"	 = expandPath("../../com/compoundtheory/javaloader"),
		"/twitter4j"	 = expandPath("../../org/twitter4j")
	};

	public void function onApplicationStart(){
		loadServices();
	}

	public void function onRequest(required string requestedTemplate){
		include arguments.requestedTemplate;
	}

	private void function loadServices(){
		application.twitterService	= createObject("cfbugnotifier.TwitterService");	// not init-ed on purpose, as they required secret values I'll initialise remotely
		application.bitlyService	= createObject("cfbugnotifier.BitlyService");	// ditto
		application.mailService		= createObject("cfbugnotifier.MailService");	// ditto

		application.bugbaseProxy	= new components.BugbaseProxy();	// this one is OK to init
	}

}