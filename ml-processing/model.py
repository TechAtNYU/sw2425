import numpy as np
import pandas as pd
import tensorflow as tf

CSV = 0
Supermomos_CSV = 1
Engage_CSV = 2


def ingest_form(file, ftype=CSV):
    if(type(ftype) != int):
        return
    if(type == Supermomos_CSV):
        return process_supermomos_data(file)
    else:
        return "you didnt choose a proper format"
def process_csv(file):
    return "something"

def process_supermomos_data(file):
    dataframe = pd.read_csv(file)
    #debugging
    dataframe.drop("Name", axis = 1, inplace = True)
    print(dataframe)
    return dataframe

process_supermomos_data("m-m-mentor-meet-tech-nyu-rsvp-list-10-29-2024 (2).csv")
