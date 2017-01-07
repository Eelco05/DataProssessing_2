#!/usr/bin/env python
'''
Programmeren 2
Pset 9

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

This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv
import unicodedata

from pattern.web import URL, DOM, ELEMENT

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

# global variables
titles = []
rankings = []
genres = []
actors = []
runtimes = []


def extract_tvseries(dom):
    
    # extracts title
    for title in dom.body.by_class("lister-item-header"):
        titles.append(title.by_tag("a")[0].content)
    # print titles
    
    # extracts ranking
    for row in dom.body.by_class("rating-rating"):
        for ranking in row.by_class("value"):
            rankings.append(ranking.content)
    # print rankings
    
    # extracts genres
    for row in dom.body.by_class("text-muted"):
        for genre in row.by_class("genre"):
            genres.append(genre.content)

    
    # extracts actors
    for row in dom.body.by_class("lister-item-content"):
        for line in row.by_tag("p"):
            actor_line = ""
            for actor in line.by_tag("a"):
                actor = actor.content.encode('utf-8')
                actor_line = actor_line + actor + ", "
            actors.append(actor_line)
        
    # print actors
    
    # extracts runtime
    for runtime in dom.body.by_class("runtime"):
        minutes = runtime.content
        runtimes.append(minutes[:2])
    # print runtimes

    return titles, rankings, genres, actors, runtimes


def save_csv(f, tvseries):
    
    print tvseries

    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    
    # itterating over the 50 series
    row = 0
    while row < 50:
        writer.writerow([
            titles[row], rankings[row], genres[row], actors[row], 
            runtimes[row]
        ])
        row += 1

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)
