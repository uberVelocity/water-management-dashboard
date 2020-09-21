FROM python:3

WORKDIR sensors

COPY sensor1.py ./
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

CMD ["python","sensor1.py"]

