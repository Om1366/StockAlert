# System Architecture

## Architecture Overview

User Browser
|
v
React Frontend
|
v
Express Backend (AWS EC2)
|
v
AWS RDS MySQL

Additional Components:

AWS CloudWatch
|
Monitoring & Metrics

AWS S3
|
Storage & Reports

Docker
|
Containerized Deployment

GitHub
|
Source Control & CI Workflow

---

## AWS Components

### EC2

Hosts the Node.js and Express backend application.

### RDS MySQL

Stores stock data, reports, and operational records.

### S3

Provides object storage for reports and backups.

### CloudWatch

Monitors CPU utilization, resource usage, and system performance.

### Security Groups

Controls inbound and outbound traffic to cloud resources.

---

## Networking

* SSH Access: Port 22
* HTTP Access: Port 80
* HTTPS Access: Port 443
* Backend API Access: Port 3001

---

## Deployment Flow

Developer Machine
|
v
GitHub Repository
|
v
AWS EC2
|
v
Node.js + Express Application
|
v
AWS RDS MySQL
