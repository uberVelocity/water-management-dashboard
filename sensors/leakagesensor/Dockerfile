FROM python:3

WORKDIR leakagesensor

COPY leakageSensor.py ./
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python","leakageSensor.py"]

