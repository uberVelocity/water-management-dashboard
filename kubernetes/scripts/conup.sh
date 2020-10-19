#!/bin/sh

kubectl apply -f ../consumer/service.yaml
kubectl apply -f ../consumer/deployment.yaml