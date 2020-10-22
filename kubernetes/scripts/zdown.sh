#!/bin/sh

kubectl delete service zk-hs
kubectl delete service zk-cs
kubectl delete statefulset zk
