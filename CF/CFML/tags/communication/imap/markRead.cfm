<cftry>
	Trying to open IMAP connection&hellip;
	<cfset stCreds = {
		server		= "imap.gmail.com",
		secure		= "true",
		port		= "993",
		username	= "adam.cameron.junkmail@googlemail.com",
		password	= "temp.pwd"
	
	}>
	
	<cfimap	action				= "open"
			connection			= "myImapCon"
			attributecollection	= "#stCreds#"	<!--- these are set further up, and are all valid --->
	>
	Opened<br />

	Trying to mark messages read from folder&hellip;
	<cfimap connection="myImapCon" action="markread" folder="Munk" messagenumber="1">
	
	<cfcatch>
		<cfoutput>Error: #cfcatch.message# #cfcatch.detail#<br /></cfoutput>
		<cftry>
			Attempting to close connection&hellip;
			<cfimap action="close" connection="myImapCon">
			Closed<br />
			<cfcatch>
				<cfoutput>Error: #cfcatch.message# #cfcatch.detail#<br /></cfoutput>
			</cfcatch>
		</cftry>		
	</cfcatch>
	<cffinally>
		<cftry>
			Attempting to close connection&hellip;
			<cfimap action="close" connection="myImapCon">
			Closed<br />
			<cfcatch>
				<cfoutput>Error: #cfcatch.message# #cfcatch.detail#<br /></cfoutput>
			</cfcatch>
		</cftry>		
	</cffinally>
</cftry>



