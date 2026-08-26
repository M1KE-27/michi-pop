#!/usr/bin/env bash

# ==============================================================================
#  Michi Pop - Script de Despliegue Universal (Hostinger)
# ==============================================================================
set -e

# Configuración del Servidor Remoto
SSH_USER="u333974886"
SSH_HOST="147.93.73.153"
SSH_PORT="65002"
REMOTE_PATH="domains/lightgray-ostrich-908108.hostingersite.com/public_html/"
SITE_URL="https://lightgray-ostrich-908108.hostingersite.com"

# Colores para la salida
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Asegurar que siempre corremos desde la raíz del proyecto
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

echo -e "${BLUE}====================================================${NC}"
echo -e "${BLUE}       🚀 Michi Pop - Despliegue a Hostinger        ${NC}"
echo -e "${BLUE}====================================================${NC}"

# 1. Comprobar herramientas necesarias
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ Error: Node.js / npm no está instalado en este sistema.${NC}"
    exit 1
fi

if ! command -v ssh &> /dev/null; then
    echo -e "${RED}❌ Error: SSH no está instalado en este sistema.${NC}"
    exit 1
fi

# 2. Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo -e "\n${YELLOW}📦 Instalando dependencias con npm install...${NC}"
    npm install
fi

# 3. Compilar el proyecto Astro
echo -e "\n${YELLOW}🔨 Compilando el proyecto (npm run build)...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: No se encontró la carpeta 'dist' tras compilar.${NC}"
    exit 1
fi

# 4. Sincronizar archivos al servidor Hostinger
echo -e "\n${YELLOW}📡 Subiendo archivos a Hostinger (${SSH_USER}@${SSH_HOST}:${SSH_PORT})...${NC}"

if command -v rsync &> /dev/null; then
    # Usar rsync para sincronización rápida e incremental
    rsync -avz --delete \
        -e "ssh -p ${SSH_PORT} -o StrictHostKeyChecking=accept-new" \
        dist/ "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}"
else
    echo -e "${YELLOW}⚠️  rsync no disponible, usando scp como alternativa...${NC}"
    scp -P "${SSH_PORT}" -o StrictHostKeyChecking=accept-new -r dist/* "${SSH_USER}@${SSH_HOST}:${REMOTE_PATH}"
fi

echo -e "\n${GREEN}====================================================${NC}"
echo -e "${GREEN}  ✅ ¡Despliegue completado con éxito!               ${NC}"
echo -e "${GREEN}  🌐 Visita: ${SITE_URL}                             ${NC}"
echo -e "${GREEN}====================================================${NC}"
