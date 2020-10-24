#!/bin/sh

kubectl apply -f ../kafka/service.yaml
kubectl apply -f ../kafka/deployment.yaml