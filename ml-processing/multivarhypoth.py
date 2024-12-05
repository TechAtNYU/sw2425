import csv
from io import StringIO
import numpy as np
import pandas as pd


def process_for_hypothesis_test(mydata):
    return mydata


# Features needed for model ( Ask for 1 : Event Type, #2; Intended Attendance )
# Predict Estimated RSVP

# We train on a data set that I will curate from


# Return the results as "Event Type", INTENDED AUDIENCE, "RSVP RATIO"
def engage_csv_to_bin(engagefile, intended_attendance: int):
    #read first few lines to extract title
    event_title = ""
    readable_buffer = []
    col_headers = []
    ### Read the file and
    with open(engagefile, 'r') as f:
        reader = csv.reader(f)
        i = 0
        for (i,line) in enumerate(reader):
            if i == 2:
                event_title = line
            elif i == 5:
                col_headers = line
            elif i >= 6:
                readable_buffer.append(line)
    # read readable buffer
    dataframe = pd.DataFrame(readable_buffer, columns=col_headers).drop(columns="Invitation Email")
    actual_attendance = dataframe[dataframe['Attendance Status'] == "Attended"]
    initial_RSVP = dataframe[dataframe["RSVP Status"] == "yes"]

    return event_title, dataframe, actual_attendance, initial_RSVP

def dataframe_to_db(dataframe):
    # Dataframe will be processed
    

print(engage_csv_to_bin("linkedinSocial_Full_data.csv", 50))
