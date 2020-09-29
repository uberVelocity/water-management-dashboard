import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

import pandas.util.testing as testing
import numpy as np

from time import sleep
from json import dumps
from kafka import KafkaProducer
import time
import json


#Generating random data
def generate_data():
    rows,cols = 1,2
    data = np.random.randint(90,size=(rows,cols)) # You can use other random functions to generate values with constraints
    tidx = pd.date_range(pd.to_datetime("now"), periods=rows, freq='s') # freq='MS'set the frequency of date in months and start from day 1. You can use 'T' for minutes and so on
    data_frame = pd.DataFrame(data, columns=['pressure','temperature'], index=tidx)
    return data_frame


# #Creating producer
producer = KafkaProducer(bootstrap_servers=['kafka:9092'],
        value_serializer=lambda x: 
        json.dumps(x).encode('utf-8'))

while True:
    time.sleep(5)
    data = generate_data()
    producer.send('sensor1', data.to_json())



# msg = {
#     'id': str(self.id),
#     'model': self.model,
#     'timestamp': str(timestamp),
#     't': t.seconds,
#     'variables': variable_dict
# }

# self.producer.send('sensor_data', value=msg)
