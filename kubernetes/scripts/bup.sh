#!/bin/sh

kubectl apply -f ../backend/service.yaml
kubectl apply -f ../backend/deployment.yaml