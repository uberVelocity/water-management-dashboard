FROM python:3

WORKDIR ptsensor

COPY ptSensor.py ./
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python","ptSensor.py"]

