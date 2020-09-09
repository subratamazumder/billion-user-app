# backend-app
## Serverless Architecture

1. Serverless Function (AWS Lambda) Based
- Pros
    - reasobaly easy to implement
    - don't bother writing code to create a container
- Cons
    - High Cost when request vloumns are 1000 per seconds?
    - cold start

![Design](billion-user-eprescription-arch.png)

2. Serverless Container (AWS Fargate) Based
- Pros
    - Low Cost when request vloumns are 1000 per seconds?
    - battle tested K8 tool
    - control plane management is OOB
- Cons
    - data plane management
    - up skill to k8

![Design](billion-user-eprescription-Fargate.png)

## Key Technology Components
- gRPC for APIs & service communication
- Docker to host & deploy app
- React js to create simple UI
- Kubernates (EKS) to manager cluster & container orchestration
- istio to provide servicemesh capability
- API Gateway for rate-limiting
- Elastic Cache (redis) for caching read request
- CF Distro + S3 to supply prescription pdfs
- Google Anthos for multi cloud support
