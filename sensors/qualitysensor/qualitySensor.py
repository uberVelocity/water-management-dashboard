from time import sleep
from json import dumps
from kafka import KafkaProducer
import time
import uuid
import random

listOfCities = ["Asmterdam","Rotterdam","Hague","Groningen","Zwolle","Assen","Meppel","Almere","Tilburg","Haarlem","Delft","Amersfoort","Utrecht"]
#Creating uniq id
id = uuid.uuid4()
location = random.choice(listOfCities)
#Generating random data
def generate_data():
    
    sensorType = "quality"
    timestamp = time.time()
    
    variables = {
        'quality': random.uniform(0, 1)*100 ,
        
    }
    msg = {
        'id': str(id),
        'type': sensorType,
        'timestamp': str(timestamp),
        'location' : location,
        'variables': variables
    }
    
    return msg



# #Creating producer
producer = KafkaProducer(bootstrap_servers=['kafka1:9091', 'kafka2:9092', 'kafka3:9093'],
        value_serializer=lambda x: 
        dumps(x).encode('utf-8'))

while True:
    time.sleep(5)
    data = generate_data()
    producer.send('sensor_data', value=data)






#
    
    






#