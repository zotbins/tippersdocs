
"""
@api {get} /sensor/add Add Sensor
@apiName AddSensor
@apiGroup Sensor

@apiExample {curl} Example Usage (IDK if this actually works. I don't want to test it cause we don't have access to remove sensors):
	curl -X POST -i -H "Content-Type:application/json" -H "Accept:application/json" -d "[{'id': 'Fake ID', 'name': 'Rthis is recycling', 'description': 'Owen is team leader',^
	'location': {'x': 10, 'y': 20, 'z': 2}, type_id: 2, user_id: 8438}]" http://sensoria.ics.uci.edu:8059/sensor/add

@apiParam {String} id The ID of the sensor
@apiParam {String} name The name of the bin. Make sure to include 'L' for landfill, 'R' for recycling, or 'C' for compost as the first character.
@apiParam {String} description The description of the sensor (useless).
@apiParam {Object[]} location {"x": x, "y", y, "z": z}. x is [0,69], y is [0,65], z is the floor number, or [1,6].
@apiParam {Integer} type_id The type ID of the sensor. 6 for weight sensor, 7 for distance sensor.
@apiParam {String} user_id The user ID of the owner. You can use 8438, which is the user ID of the lord and savior Primal Pappachan.
"""


"""
@api {get} /sensor/get Get Sensor
@apiName GetSensor
@apiGroup Sensor

@apiExample {curl} Example Usage:
	curl -i http://sensoria.ics.uci.edu:8059/sensor/get?sensor_type_id=6

@apiSuccess {String} owner ID of owner of sensor.
@apiSuccess {Integer} Type type of sensor, 6 for weight sensor, 7 for distance sensor.
@apiSuccess {String} name Name of sensor, first letter represents waste type (L:landfill, R:recycling, C:compost).
@apiSuccess {String} description Description of sensor (useless).
@apiSuccess {Number} x X location of sensor.
@apiSuccess {Number} y Y location of sensor.
@apiSuccess {Number} z Floor in which sensor is located.
@apiSuccess {String} id ID of bin.

@apiSuccessExample Success Response Example:
	{
        "owner": "8438",
        "Type": "6",
        "name": "RZotBin1 WeightSensor",
        "x": "47",
        "description": "ZotBin1 Weight Sensor for Recycling",
        "y": "16",
        "z": "1",
        "id": "ZBin1"
    }
"""


"""
@api {get} /observation/add Add Observation
@apiName AddObservation
@apiGroup Observation

@apiExample {curl} Example Usage (If your gonna add data for testing, do it for an older timestamp):
	curl -X POST  -d '{"timestamp":"2018-10-11+12%3A30%3A01","payload":{"weight":100},"sensor_id":"ZBin1","type":2}' http://sensoria.ics.uci.edu:8059/observation/add

@apiParam {String} timestamp The timestamp of when the observation occured.
@apiParam {Object[]} payload The payload of the observation
@apiParam {String} sensor_id The ID of the sensor
@apiParam {Integer} type The type of the observation. 2 for weight, 3 for distance.
"""


"""
@api {get} /observation/get Get Observation
@apiName GetObservation
@apiGroup Observation

@apiExample {curl} Example Usage:
	curl -X POST -i -H "Content-Type:application/json" -H "Accept:application/json" -d "[{'timestamp': '2018-03-01 00:00:00', 'payload': {'weight': 123.456}, 'sensor_id': 'ZBin1', 'type': 2}]" http://sensoria.ics.uci.edu:8059/observation/add

@apiParam {String} sensor_id ID of sensor to obtain observations from.
@apiParam {String} start_timestamp The timestamp representing the beginning of the range in which to obtain observations from. 
									Expected in format: 'YYYY-MM-DD HH:mm:SS', or encoded as 'YYYY-MM-DD+HH%3Amm%3ASS'
@apiParam {String} end_timestamp The timestamp representing the end of the range in which to obtain observations from.
									Expected in format: 'YYYY-MM-DD HH:mm:SS', or encoded as 'YYYY-MM-DD+HH%3Amm%3ASS'

@apiSuccess {String} sensor_id ID of sensor that collected the observation.
@apiSuccess {Object[]} payload The payload of the observation collected by the sensor.
@apiSuccess {Integer} id ID of observation
@apiSuccess {String} timestamp The timestamp of when the observation occured.

@apiSuccessExample Success Response Example:
	{
        "sensor_id": "ZBin6",
        "payload": {
            "weight": 12722
        },
        "id": 88663022,
        "timestamp": "2018-10-10 13:59:31"
    }
"""


"""
@api {get} /infrastructure/get Get Infrastructure
@apiName GetInfrastructure
@apiGroup Infrastructure

@apiExample {curl} Example Usage:
	curl -i http://sensoria.ics.uci.edu:8059/infrastructure/get?

@apiSuccess {String} area Area infrastructure is located in.
@apiSuccess {String} name Name of infrastructure.
@apiSuccess {String} id ID of infrastructure.
@apiSuccess {String} type Type of infrastructure.
@apiSuccess {Object[]} The xyz coordinates of the top-left corner, followed by bottom-right corner,
						where z is the floor.
@apiSuccess {String} building Building where infrastructure is located.
@apiSuccess {Number} capacity How many people can fit inside the infrastructure.

@apiSuccessExample Success Response Example:
	{
        "area": "ISG",
        "name": "2065",
        "id": 28,
        "type": "conference_room",
        "region": {
            "geometry": [
                {
                    "x": 55,
                    "y": 8,
                    "z": 2
                },
                {
                    "x": 60,
                    "y": 19,
                    "z": 2
                }
            ],
            "id": 28,
            "floor": 2
        },
        "building": "DBH",
        "capacity": 20
    }
"""


"""
@api {get} /semanticobservation/presence/getLast Get Last Location
@apiName GetLastLocation
@apiGroup Presence

@apiExample {curl} Example Usage:
	curl -i http://sensoria.ics.uci.edu:8059/semanticobservation/presence/getLast?type=4&subject_id=dhrubajg@uci.edu&requestor_id=primal@uci.edu&service_id=7

@apiParam {Number} type ??? The only example I see uses '4'.
@apiParam {String} subject_id Email of the subject to find the last location of.
@apiParam {String} requestor_id Email of the requestor (logged in user).
@apiParam {Number} service_id ??? The only example I see uses '7'.

@apiSuccess {String} end_timestamp The end of the range of time that the subject was in the location.
@apiSuccess {String} start_timestamp The beginning of the range of time that the subject was in the location.
@apiSuccess {Object[]} payload The last location of the subject.
@apiSuccess {Number} confidence How confident TIPPERS is in the accuracy of the presence observation (?).
@apiSuccess {Integer} id The ID of the presence observation.
@apiSuccess {Number} virtual_sensor_id ??? who cares really

@apiSuccessExample Success Response Example:
	{
        "end_timestamp": "2019-04-24 20:51:05",
        "start_timestamp": "2019-04-24 20:44:42",
        "payload": {
            "location": "2051"
        },
        "confidence": 0.007692310027778149,
        "id": 254268735,
        "virtual_sensor_id": 1
    }
"""
