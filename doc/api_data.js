define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_caojo_Desktop_apidoc_test_doc_main_js",
    "groupTitle": "C__Users_caojo_Desktop_apidoc_test_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/infrastructure/get",
    "title": "Get Infrastructure",
    "name": "GetInfrastructure",
    "group": "Infrastructure",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i http://sensoria.ics.uci.edu:8059/infrastructure/get?",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>Area infrastructure is located in.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of infrastructure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of infrastructure.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type of infrastructure.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "The",
            "description": "<p>xyz coordinates of the top-left corner, followed by bottom-right corner, where z is the floor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "building",
            "description": "<p>Building where infrastructure is located.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "capacity",
            "description": "<p>How many people can fit inside the infrastructure.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n        \"area\": \"ISG\",\n        \"name\": \"2065\",\n        \"id\": 28,\n        \"type\": \"conference_room\",\n        \"region\": {\n            \"geometry\": [\n                {\n                    \"x\": 55,\n                    \"y\": 8,\n                    \"z\": 2\n                },\n                {\n                    \"x\": 60,\n                    \"y\": 19,\n                    \"z\": 2\n                }\n            ],\n            \"id\": 28,\n            \"floor\": 2\n        },\n        \"building\": \"DBH\",\n        \"capacity\": 20\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Infrastructure"
  },
  {
    "type": "get",
    "url": "/observation/add",
    "title": "Add Observation",
    "name": "AddObservation",
    "group": "Observation",
    "examples": [
      {
        "title": "Example Usage (If your gonna add data for testing, do it for an older timestamp):",
        "content": "curl -X POST  -d '{\"timestamp\":\"2018-10-11+12%3A30%3A01\",\"payload\":{\"weight\":100},\"sensor_id\":\"ZBin1\",\"type\":2}' http://sensoria.ics.uci.edu:8059/observation/add",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp of when the observation occured.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>The payload of the observation</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sensor_id",
            "description": "<p>The ID of the sensor</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type",
            "description": "<p>The type of the observation. 2 for weight, 3 for distance.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Observation"
  },
  {
    "type": "get",
    "url": "/observation/get",
    "title": "Get Observation",
    "name": "GetObservation",
    "group": "Observation",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "http://sensoria.ics.uci.edu:8059/observation/get?sensor_id=ZBin1&start_timestamp=2019-08-10+12%3A30%3A00&end_timestamp=2019-11-20+05%3A30%3A00",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sensor_id",
            "description": "<p>ID of sensor to obtain observations from.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_timestamp",
            "description": "<p>The timestamp representing the beginning of the range in which to obtain observations from. Expected in format: 'YYYY-MM-DD HH:mm:SS', or encoded as 'YYYY-MM-DD+HH%3Amm%3ASS'</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_timestamp",
            "description": "<p>The timestamp representing the end of the range in which to obtain observations from. Expected in format: 'YYYY-MM-DD HH:mm:SS', or encoded as 'YYYY-MM-DD+HH%3Amm%3ASS'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sensor_id",
            "description": "<p>ID of sensor that collected the observation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>The payload of the observation collected by the sensor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of observation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "timestamp",
            "description": "<p>The timestamp of when the observation occured.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n        \"sensor_id\": \"ZBin6\",\n        \"payload\": {\n            \"weight\": 12722\n        },\n        \"id\": 88663022,\n        \"timestamp\": \"2018-10-10 13:59:31\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Observation"
  },
  {
    "type": "get",
    "url": "/semanticobservation/presence/getLast",
    "title": "Get Last Location",
    "name": "GetLastLocation",
    "group": "Presence",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i http://sensoria.ics.uci.edu:8059/semanticobservation/presence/getLast?type=4&subject_id=dhrubajg@uci.edu&requestor_id=primal@uci.edu&service_id=7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>??? The only example I see uses '4'.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject_id",
            "description": "<p>Email of the subject to find the last location of.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "requestor_id",
            "description": "<p>Email of the requestor (logged in user).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "service_id",
            "description": "<p>??? The only example I see uses '7'.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "end_timestamp",
            "description": "<p>The end of the range of time that the subject was in the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "start_timestamp",
            "description": "<p>The beginning of the range of time that the subject was in the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>The last location of the subject.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "confidence",
            "description": "<p>How confident TIPPERS is in the accuracy of the presence observation (?).</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the presence observation.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "virtual_sensor_id",
            "description": "<p>??? who cares really</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n        \"end_timestamp\": \"2019-04-24 20:51:05\",\n        \"start_timestamp\": \"2019-04-24 20:44:42\",\n        \"payload\": {\n            \"location\": \"2051\"\n        },\n        \"confidence\": 0.007692310027778149,\n        \"id\": 254268735,\n        \"virtual_sensor_id\": 1\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Presence"
  },
  {
    "type": "get",
    "url": "/sensor/add",
    "title": "Add Sensor",
    "name": "AddSensor",
    "group": "Sensor",
    "examples": [
      {
        "title": "Example Usage (IDK if this actually works. I don't want to test it cause we don't have access to remove sensors):",
        "content": "curl -X POST -i -H \"Content-Type:application/json\" -H \"Accept:application/json\" -d \"[{'id': 'Fake ID', 'name': 'Rthis is recycling', 'description': 'Owen is team leader',^\n'location': {'x': 10, 'y': 20, 'z': 2}, type_id: 2, user_id: 8438}]\" http://sensoria.ics.uci.edu:8059/sensor/add",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID of the sensor</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the bin. Make sure to include 'L' for landfill, 'R' for recycling, or 'C' for compost as the first character.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the sensor (useless).</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "location",
            "description": "<p>{&quot;x&quot;: x, &quot;y&quot;, y, &quot;z&quot;: z}. x is [0,69], y is [0,65], z is the floor number, or [1,6].</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "type_id",
            "description": "<p>The type ID of the sensor. 6 for weight sensor, 7 for distance sensor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>The user ID of the owner. You can use 8438, which is the user ID of the lord and savior Primal Pappachan.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Sensor"
  },
  {
    "type": "get",
    "url": "/sensor/get",
    "title": "Get Sensor",
    "name": "GetSensor",
    "group": "Sensor",
    "examples": [
      {
        "title": "Example Usage:",
        "content": "curl -i http://sensoria.ics.uci.edu:8059/sensor/get?sensor_type_id=6",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>ID of owner of sensor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "Type",
            "description": "<p>type of sensor, 6 for weight sensor, 7 for distance sensor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of sensor, first letter represents waste type (L:landfill, R:recycling, C:compost).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of sensor (useless).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "x",
            "description": "<p>X location of sensor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "y",
            "description": "<p>Y location of sensor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "z",
            "description": "<p>Floor in which sensor is located.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of bin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response Example:",
          "content": "{\n        \"owner\": \"8438\",\n        \"Type\": \"6\",\n        \"name\": \"RZotBin1 WeightSensor\",\n        \"x\": \"47\",\n        \"description\": \"ZotBin1 Weight Sensor for Recycling\",\n        \"y\": \"16\",\n        \"z\": \"1\",\n        \"id\": \"ZBin1\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./documentation.py",
    "groupTitle": "Sensor"
  }
] });
