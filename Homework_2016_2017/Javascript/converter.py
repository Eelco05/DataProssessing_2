import csv

dates = []
tmps = []
reader = csv.reader(open('raw_data.csv', 'rb'), delimiter=',')
for row in reader:
    date = row[0][0:4] + '/' + row[0][4:6] + '/' + row[0][6:8]
    #print date
    tmp = row[1]
    #print tmp
    dates.append(date)
    tmps.append(tmp)


counter = 0
writer = csv.writer(open("converted.csv", "wb"))
for date in dates:
    writer.writerow([dates[counter]] + [tmps[counter]])
    counter = counter + 1
    #print date
    #print tmps[counter]

        
                        