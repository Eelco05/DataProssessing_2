'''
Data Prossessing
SVG 2
svg.py

By Eelco Alink <eelco.alink@gmail.com>

                ====
                \\// 
           <=>===[]===<=>
                 []
                 []
                 []
                _[]_
                \  /
                 \/

converts raw data to JSON
'''
import csv
import json

# reads and formats raw data
json_pop = {}
eur_pop = csv.reader(open('euPopDen.csv', 'rb'), delimiter=',')
for row in eur_pop:
	json_pop['"' + 'country' + ':' +'"'+row[0] +'"'] = "data"+'"'+':'+'"'+row[1]+'"'

# outputs JSON, though not entirely correct. 
# finetuning of finale JSON done with find and replace commands
with open("output.json", "w") as outfile:
	json.dump(json_pop, outfile)