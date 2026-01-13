FROM python:3.11-slim

WORKDIR /app

# Copier les fichiers
COPY requirements.txt .
COPY app.py .
COPY config.py .
COPY styles.css .
COPY generer.py .
COPY pages ./pages
COPY documents ./documents
COPY images ./images

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port
EXPOSE 8501

# Lancer l'application
CMD ["streamlit", "run", "app.py", "--server.port=8501", "--server.address=0.0.0.0"]