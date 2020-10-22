#!/bin/sh

kubectl apply -f ../ptsensor/service.yaml
kubectl apply -f ../ptsensor/deployment.yaml