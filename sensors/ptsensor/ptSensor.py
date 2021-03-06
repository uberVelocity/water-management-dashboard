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
    
    sensorType = "pressure"
    timestamp = time.time()
    
    variables = {
        'pressure': random.uniform(0, 1) ,
        'temperature' : random.randint(15,90)
    }
    msg = {
        'id': str(id),
        'type': sensorType,
        'timestamp': str(timestamp),
        'location' : location,
        'variables': variables
    }
    
    return msg


print('creating producer')

# Creating producer
producer = KafkaProducer(bootstrap_servers=['kafka:9092'],
        value_serializer=lambda x: 
        dumps(x).encode('utf-8'))

print('generating data')

count = 0
while True:
    count += 1
    time.sleep(5)
    data = generate_data()
    output = producer.send('sensor_data', value=data)
    print(f'message {count} sent!')
    print(f'output: {output}')






#
