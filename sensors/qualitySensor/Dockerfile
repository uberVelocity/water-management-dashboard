FROM python:3

WORKDIR qualitySensor

COPY qualitySensor.py ./
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python","qualitySensor.py"]

