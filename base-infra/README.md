# base-infra
- eksctl create cluster --name my-cluster --version 1.17 --region us-west-2 --fargate --profile devtest
- kubectl get svc
- kubectl get nodes
- kubectl apply -f sample-service.yaml
- kubeclt describe service my-service
- kubectl get pods
- kubectl describe pod my-deployment-65dcf7d447-446nk
- kubectl get svc [get my-service IP]
- kubectl exec -it my-deployment-65dcf7d447-446nk -- /bin/bash

- root@my-deployment-65dcf7d447-446nk:/# curl my-service-ip
- Output - 
```
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
```

- aws eks --region region-code update-kubeconfig --name cluster_name
