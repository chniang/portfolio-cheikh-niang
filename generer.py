import os

print("🚀 Génération du portfolio...")

# Créer config.py
with open("config.py", "w", encoding="utf-8") as f:
    f.write(open("requirements.txt").read())  # Juste pour test
print("✅ Fichiers créés")
