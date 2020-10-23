# import pandas as pd
# import json

# data=pd.read_csv("Polar_bear_data.csv")

# ids=data["BearID_mcp"].drop_duplicates()

# outDict={}
# for currId in ids:
#     currData=data[data["BearID_mcp"]==currId]
#     outDict[currId]=currData.to_dict(orient="records")
    
# with open("bears.json","w") as f:
#     json.dump(outDict,f,indent=4)


# import pandas as pd
# import json

# data=pd.read_csv("Polar_bear_data.csv")

# data.to_json('bears1.json')

# ids=data["BearID_mcp"].drop_duplicates()

# outDict={}
# for currId in ids:
#     currData=data[data["BearID_mcp"]==currId]
#     outDict[currId]=currData.to_dict(orient="records")
    
# with open("bears.json","w") as f:
#     json.dump(outDict,f,indent=4)    



import csv
import json

file = 'Polar_bear_data.csv'
json_file = 'bears1.json'

#Read CSV File
def read_CSV(file, json_file):
    csv_rows = []
    with open(file) as csvfile:
        reader = csv.DictReader(csvfile)
        field = reader.fieldnames
        for row in reader:
            csv_rows.extend([{field[i]:row[field[i]] for i in range(len(field))}])
        convert_write_json(csv_rows, json_file)

#Convert csv data into json
def convert_write_json(data, json_file):
    with open(json_file, "w") as f:
        f.write(json.dumps(data, sort_keys=False, indent=4, separators=(',', ': '))) #for pretty
        f.write(json.dumps(data))


read_CSV(file,json_file)