# Implementation Notes

This project demonstrates how to build and deploy a React application with a CI/CD pipeline on GitHub Actions, Docker, SonarQube, Trivy, Slack notifications, and SSH-based deployment to AWS EC2.

## Prerequisites for a Student

Before starting, make sure you have:

* Windows 11
* Visual Studio Code
* Git installed
* Node.js 18 or later
* Docker Desktop installed and running
* A GitHub account
* An AWS account
* One or more AWS EC2 instances for deployment
* An EC2 security group that allows SSH (22) and the app port you plan to use
* A GitHub repository with the project pushed to it
* A SonarQube server or SonarCloud account
* A Slack webhook URL for notifications

## What the Pipeline Does

The workflow is designed to do the following:

* Install dependencies using `npm ci`
* Run unit tests with coverage
* Build the React application
* Scan the repository and Docker image with Trivy
* Run SonarQube code quality analysis
* Build and push a multi-architecture Docker image to GitHub Container Registry
* Deploy the image to the correct EC2 server for `dev`, `uat`, or `main`
* Send Slack notifications for success or failure

## Required Setup in GitHub

Create the following repository secrets:

* `SONAR_TOKEN`
* `SONAR_HOST_URL`
* `GHCR_TOKEN`
* `SSH_PRIVATE_KEY`
* `DEV_HOST`
* `DEV_USER`
* `UAT_HOST`
* `UAT_USER`
* `PROD_HOST`
* `PROD_USER`
* `SLACK_WEBHOOK`

If you use email alerts, also add the optional email secrets in the same way.

## EC2 Preparation Steps

1. Launch an EC2 instance for each environment you want to deploy to.
2. Update the EC2 security group to allow SSH from your IP and allow inbound traffic on the application port.
3. Install Docker on each EC2 instance.
4. Create or upload an SSH key pair and make sure the private key is stored in GitHub Secrets.
5. Make sure the EC2 user in GitHub Secrets has permission to run Docker.
6. Confirm that the server can pull images from GitHub Container Registry.

## How to Implement It

1. Clone the repository in VS Code on your Windows 11 machine.
2. Open the `ui` folder and install dependencies with `npm ci`.
3. Run the app locally with `npm start` to verify the UI works.
4. Push the repository to GitHub and configure the secrets listed above.
5. Configure SonarQube or SonarCloud with the same project key used in `sonar-project.properties`.
6. Create EC2 instances for `dev`, `uat`, and `prod`, or start with one instance and expand later.
7. Add the SSH private key and server credentials to GitHub Secrets.
8. Commit changes to a branch such as `dev`, `uat`, or `main` and open a pull request.
9. Merge the pull request to trigger the workflow.
10. Watch the GitHub Actions run to confirm tests, scans, image build, and deployment complete successfully.

## Recommended Student Workflow

* Use `dev` for initial validation.
* Promote to `uat` after tests and scans pass.
* Deploy to `main` only after the UAT environment is confirmed stable.
* Review SonarQube and Trivy results before merging.

## Notes

* The workflow now uses `npm ci` for reproducible installs.
* Vulnerability scanning is configured to fail the pipeline on high or critical findings.
* The deployment step selects the correct EC2 target based on the branch name.
* GitHub environment approvals can be added later in the repository settings for an extra release gate.