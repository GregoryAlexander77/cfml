<!-----------------------------------------------------------------------
	<cffunction name="about" access="public" returntype="void" output="false" hint="">
		<cfargument name="Event" type="any" required="yes">
	    <cfset var rc = event.getCollection()>
	    <!--- Display View --->    	
	<cffunction name="blog" access="public" returntype="void" output="false" hint="Displays the blog page" cache="true" cacheTimeout="10">
		<cfargument name="Event" type="any" required="yes">
	    <cfscript>
	</cffunction>
	<cffunction name="newPost" access="public" returntype="void" output="false" hint="">
		<cfargument name="Event" type="any" required="yes">
	    <cfset var rc = event.getCollection()>
	        
	</cffunction>
	<cffunction name="doNewPost" access="public" returntype="void" output="false" hint="Action to handle new post operation">
		<cfargument name="Event" type="any" required="yes">
	    <cfset var rc = event.getCollection()>
	    <cfset var newPost = "">
	     
	</cffunction>
	<cffunction name="viewPost" access="public" returntype="void" output="false" hint="Shows one particular post and related comments" cache="true" cacheTimeout="10" >
		<cfargument name="Event" type="any" required="yes">
	    <cfset var rc = event.getCollection()>
	    <cfscript>
	<cffunction name="doAddComment" access="public" returntype="void" output="false" hint="action that adds comment">
		<cfargument name="Event" type="any" required="yes">
	    <cfset var rc = event.getCollection()>
	</cffunction>