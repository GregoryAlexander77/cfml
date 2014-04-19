component persistent=true rest=true restPath="todo" {

	property name="id" fieldtype="id" ormtype="integer" unique=true generator="native";
	property name="description";
	property name="status";

	remote array function getAll() httpmethod="GET" restPath="" {
		return entityLoad("Todo")
	}

	remote Todo function getById(required numeric id restArgSource="path") httpmethod="GET" restPath="{id}" {
		return entityLoad("Todo", arguments.id, true)
	}



	remote query function getAllAsQuery() httpmethod="GET" restPath="asquery" {
		return executeQuery("SELECT * FROM todo")
	}

}