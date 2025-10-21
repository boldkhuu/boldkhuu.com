# Docker Deployment to Azure App Service

This document provides instructions for deploying the boldkhuu.com Next.js application to Azure App Service using Docker containers.

## Prerequisites

1. **Azure Account**: Active Azure subscription
2. **Azure CLI**: Installed and configured
3. **Docker**: Installed locally for testing
4. **Azure Container Registry**: Created for storing Docker images
5. **Azure App Service**: Web app configured for container deployment

## Local Development

### Build and Run Locally

```bash
# Build production Docker image
pnpm run docker:build

# Run production container
pnpm run docker:run

# Run development environment with hot reload
pnpm run docker:dev

# Run production environment
pnpm run docker:prod

# Stop all containers
pnpm run docker:stop
```

### Manual Docker Commands

```bash
# Build image
docker build -t boldkhuu-website .

# Run container
docker run -p 3000:3000 boldkhuu-website

# Run with environment variables
docker run -p 3000:3000 -e NODE_ENV=production boldkhuu-website
```

## Azure Setup

### 1. Create Azure Container Registry (ACR)

```bash
# Create resource group
az group create --name rg-boldkhuu --location "East US"

# Create container registry
az acr create --resource-group rg-boldkhuu --name boldkhuu --sku Basic --admin-enabled true

# Get ACR credentials
az acr credential show --name boldkhuu
```

### 2. Create Azure App Service

```bash
# Create App Service plan (Linux)
az appservice plan create --name boldkhuu-plan --resource-group rg-boldkhuu --sku B1 --is-linux

# Create web app with container
az webapp create --resource-group rg-boldkhuu --plan boldkhuu-plan --name boldkhuu-website --deployment-container-image-name boldkhuu.azurecr.io/boldkhuu-website:latest
```

### 3. Configure App Service

```bash
# Configure container settings
az webapp config container set --name boldkhuu-website --resource-group rg-boldkhuu --docker-custom-image-name boldkhuu.azurecr.io/boldkhuu-website:latest --docker-registry-server-url https://boldkhuu.azurecr.io

# Set environment variables
az webapp config appsettings set --resource-group rg-boldkhuu --name boldkhuu-website --settings NODE_ENV=production PORT=80 WEBSITES_PORT=3000
```

## GitHub Actions Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/azure-deploy.yml`) that automatically builds and deploys the application on push to the master branch.

### Required GitHub Secrets

Set the following secrets in your GitHub repository:

1. **REGISTRY_LOGIN_SERVER**: Your ACR login server (e.g., `boldkhuu.azurecr.io`)
2. **REGISTRY_USERNAME**: ACR admin username
3. **REGISTRY_PASSWORD**: ACR admin password
4. **AZUREAPPSERVICE_PUBLISHPROFILE**: App Service publish profile (download from Azure portal)

### Getting Publish Profile

1. Go to Azure portal
2. Navigate to your App Service
3. Click "Get publish profile" in the overview section
4. Copy the entire XML content to the GitHub secret

## Manual Deployment

### Build and Push to ACR

```bash
# Login to ACR
az acr login --name boldkhuu

# Build and tag image
docker build -t boldkhuu.azurecr.io/boldkhuu-website:latest .

# Push to ACR
docker push boldkhuu.azurecr.io/boldkhuu-website:latest

# Restart App Service to pull new image
az webapp restart --name boldkhuu-website --resource-group rg-boldkhuu
```

## Environment Variables

The following environment variables are configured for the production deployment:

- `NODE_ENV=production`
- `PORT=80`
- `WEBSITES_PORT=3000`
- `NEXT_TELEMETRY_DISABLED=1`

## Monitoring and Logging

### View Application Logs

```bash
# Stream live logs
az webapp log tail --name boldkhuu-website --resource-group rg-boldkhuu

# Download logs
az webapp log download --resource-group rg-boldkhuu --name boldkhuu-website
```

### Container Insights

Enable Application Insights for monitoring:

```bash
az webapp config appsettings set --resource-group rg-boldkhuu --name boldkhuu-website --settings APPINSIGHTS_INSTRUMENTATIONKEY=your-instrumentation-key
```

## Troubleshooting

### Common Issues

1. **Container fails to start**: Check logs and ensure PORT environment variable is set correctly
2. **Build failures**: Verify Dockerfile syntax and dependencies
3. **Registry authentication**: Ensure ACR credentials are correct and admin is enabled

### Health Check

The application exposes port 3000 internally. Azure App Service maps this to port 80/443 externally.

Test the deployment:

```bash
curl https://boldkhuu-website.azurewebsites.net
```

## Scaling

### Scale Up (Vertical)

```bash
az appservice plan update --name boldkhuu-plan --resource-group rg-boldkhuu --sku S1
```

### Scale Out (Horizontal)

```bash
az appservice plan update --name boldkhuu-plan --resource-group rg-boldkhuu --number-of-workers 2
```

## Cost Optimization

- Use Basic (B1) tier for development
- Use Standard (S1) or higher for production
- Enable auto-scaling based on CPU/memory usage
- Consider Azure Container Instances for lower-cost scenarios

## Security

- ACR admin account is enabled for simplicity; consider using service principals for production
- Configure custom domain and SSL certificate
- Enable Azure Security Center recommendations
- Regularly update base Docker images
