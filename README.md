This document summarizes my experience setting up a canary deployment with Argo Rollouts on a local Kubernetes cluster. Since this was my first time using Argo CD, I encountered some challenges understanding its concepts and functionalities.
Stack
Github
Github actions 
Kubernetes
Argo CD
Initial Steps and Challenges:
Resource Creation: As a primer, I started by creating essential Kubernetes resources:
deployment.yaml: Defined the initial deployment configuration for the application.
service.yaml: Created a service to expose the deployed application.
ci-action.yaml inside .github/workflow:
Learning Argo CD: Since I was new to Argo CD, familiarizing myself with its workflow and how it interacts with Kubernetes resources for deployments was a key challenge.
Canary Deployment with Argo Rollouts:
Deployment Manifest Modification: The existing deployment manifest (deployment.yaml) was edited to remove the replicas field to utilize Argo Rollouts for managing replicas during the rollout process.
Canary Service Creation: A separate service manifest (canary-service.yaml) was created to target the canary pod during the rollout, allowing for controlled traffic routing.
Rollout Definition Creation: A rollout.yaml file was created defining the Argo Rollout configuration, including:
Total desired replicas (stable + canary)
Canary strategy with reference to the canary service


Clean Up:
Identify Resources: Using kubectl get commands to identify resources created, including Rollout, Services, and potentially Pods.
Delete Resources: Using kubectl delete commands with the resource names to remove them:
kubectl delete rollout my-app-rollout
kubectl delete service my-app-service
kubectl delete service my-app-canary-service

Verify Cleanup: Using kubectl get commands again to ensure the resources have been removed successfully.
