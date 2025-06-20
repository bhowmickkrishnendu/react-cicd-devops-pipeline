# 🚀 CI/CD Pipeline for React App using GitHub Actions, GHCR, SonarQube, Trivy, Docker & Appleboy SSH

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/bhowmickkrishnendu/react-cicd-devops-pipeline/ci-cd.yaml)
![License](https://img.shields.io/github/license/bhowmickkrishnendu/react-cicd-devops-pipeline)

---

## 📌 Overview

This project demonstrates a complete CI/CD pipeline setup for a production-grade **React** application using:

* **GitHub Actions** for automation
* **GitHub Container Registry (GHCR)** for Docker image storage
* **Multi-arch Docker builds** (linux/amd64 & linux/arm64)
* **Secure deployment over SSH** using `appleboy/ssh-action`
* **SonarQube** for Code Quality scanning
* **Trivy** for vulnerability scanning
* **Slack notification integration**

---

## 🏗️ Workflow Diagram

```
┌────────────┐   ┌──────────────┐   ┌────────────┐
│ Push Code  │ → │ GitHub Action│ → │ Build Docker│
└────────────┘   └──────────────┘   └────┬───────┘
                                         ↓
                                Push to GHCR
                                         ↓
                                Deploy via SSH
```

---

## ✅ Features

* Automated on push to `dev`, `uat`, and `main` branches
* Deploys to 3 environments (DEV, UAT, PROD)
* Builds multi-platform Docker images
* Trivy-based image scanning for vulnerabilities
* SonarQube scanning
* Sends success/failure messages to Slack

---

## 🔐 Required Secrets

Add the following in your repo's `Settings > Secrets`:

| Secret Name       | Description                     |
| ----------------- | ------------------------------- |
| `GHCR_TOKEN`      | GitHub PAT with `read:packages` |
| `SSH_PRIVATE_KEY` | Your server's private SSH key   |
| `DEV_HOST`        | IP of DEV server                |
| `DEV_USER`        | SSH user for DEV                |
| `UAT_HOST`        | IP of UAT server                |
| `UAT_USER`        | SSH user for UAT                |
| `PROD_HOST`       | IP of PROD server               |
| `PROD_USER`       | SSH user for PROD               |
| `SLACK_WEBHOOK`   | Slack webhook URL               |

Optional (for email):

\| `EMAIL_SERVER`, `EMAIL_USERNAME`, `EMAIL_PASSWORD`, `EMAIL_TO` |

---

## 📦 Project Structure

```
react-cicd-devops-pipeline/
├── ui/                            # React frontend
│   ├── src/
│   └── public/ 
├── .github/workflows/ci-cd.yaml  # Main workflow
├── README.md
├── Dockerfile
├── docker-compose.yaml
├── .env.example
├── sonar-project.properties
└── LICENSE ...
```

---

## 🧪 Errors Faced & Fixes

| Problem                                                     | Fix                                                               |                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| `ssh-copy-id` not available on Windows                      | Added manual `~/.ssh/id_rsa` to GitHub Secrets                    |                                     |
| `Cannot perform an interactive login from a non TTY device` | Used \`echo TOKEN                                                 | docker login ... --password-stdin\` |
| Slack sent success even if deploy failed                    | Need `if: success()` and `if: failure()` notifications separately |                                     |


## 📂 GitHub Template Repo Structure


```
react-cicd-devops-pipeline/
├── ui/                            # React frontend
│   ├── src/
│   └── public/ 
├── .github/workflows/ci-cd.yaml  # Main workflow
├── README.md
├── Dockerfile
├── docker-compose.yaml
├── .env.example
├── sonar-project.properties
└── LICENSE
```

---

## 📎 License

MIT License
