#!/bin/sh

kubectl apply -f ../backend-auth/service.yaml
kubectl apply -f ../backend-auth/deployment.yaml