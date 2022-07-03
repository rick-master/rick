from matplotlib.collections import Collection


def getdatabase():
	from pymongo import MongoClient
	import pymongo
	conn = "mongodb+srv://daya:daya@cluster0.t86mm9d.mongodb.net/?retryWrites=true&w=majority"
	client = MongoClient(conn)
	return client['CRUD']

dbname = getdatabase()
collection_name = dbname["clouddata_students"]   # cloud data students is the collection name..
details = [{
    "Name" : "Karthick",
    "Reg no":"19IT046",
    "Department":"Information Technology",
    "year":3
},{
    "Name" : "daya",
    "Reg no":"19IT019",
    "Department":"Information Technology",
    "year":3
}]

collection_name.insert_many(details)
item_details = collection_name.find()
for item in item_details:
    print(item)
delt = collection_name.delete_one({"Name":"daya"})
for item in item_details:
    print(item)

myquery = { "Name": "asdf" }
newvalues = { "$set": { "Name": "qwer" } }

collection_name.update_one(myquery, newvalues)


