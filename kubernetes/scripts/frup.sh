#!/bin/sh

kubectl apply -f ../frontend/service.yaml
kubectl apply -f ../frontend/deployment.yaml