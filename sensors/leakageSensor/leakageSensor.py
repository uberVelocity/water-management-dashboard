from time import sleep
from json import dumps
from kafka import KafkaProducer
import time
import uuid
import random

listOfCities = ["Asmterdam","Rotterdam","Hague","Groningen","Zwolle","Assen","Meppel","Almere","Tilburg","Haarlem","Delft","Amersfoort","Utrecht"]
strengthOfLeakage = ["mild","moderate","severe"]
#Creating uniq id
id = uuid.uuid4()
location = random.choice(listOfCities)
#Generating random data
def generateLeakage(leakage):
    
    sensorType = "leakage"
    timestamp = time.time()
    variables = {
        'leakage' : leakage
    }
    msg = {
        'id': str(id),
        'type': sensorType,
        'timestamp': str(timestamp),
        'location' : location,
        'variables' : variables
    }
    
    return msg



# #Creating producer
producer = KafkaProducer(bootstrap_servers=['kafka:9092'],
        value_serializer=lambda x: 
        dumps(x).encode('utf-8'))

while True:
    time.sleep(5)
    leak = random.uniform(0, 1)
    leak = leak;
    if leak < 0.01:
        data = generateLeakage(strengthOfLeakage[2])
        producer.send('sensor_data', value=data)
    elif leak < 0.05:
        data = generateLeakage(strengthOfLeakage[1])
        producer.send('sensor_data', value=data)
    elif leak < 0.2:
        data = generateLeakage(strengthOfLeakage[0])
        producer.send('sensor_data', value=data)
    
    






#