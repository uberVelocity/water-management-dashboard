FROM python:3

WORKDIR sensors

COPY ptSensor.py ./
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python","ptSensor.py"]

