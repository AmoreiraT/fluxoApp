#!/usr/bin/env bash

set -eo pipefail

echo "🔧 Iniciando setup do projeto Firebase Fluxo..."

# Verificar se Firebase CLI está instalada
if ! command -v firebase &> /dev/null
then
    echo "❌ Firebase CLI não encontrada. Instale com: npm install -g firebase-tools"
    exit 1
fi

# Login no Firebase
firebase login

# Inicializar projeto Firebase (usuário escolhe opções)
firebase init hosting firestore functions

# Copiar arquivos de configuração
cp firebase.json .
cp firestore.rules .
cp -r functions ./functions

echo "✅ Setup concluído! Agora execute:"
echo "  firebase emulators:start"