import streamlit as st
from config import PROJECTS
import base64
from pathlib import Path

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

with open("styles.css", encoding="utf-8") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

# Cache persistent avec fichier
@st.cache_data(ttl=3600)
def load_all_images():
    cache = {}
    images = [
        *[f"images/projects/dakar_{i}.png" for i in range(1, 5)],
        *[f"images/projects/tidianeflix_{i}.png" for i in range(1, 5)],
        *[f"images/projects/sentimentscope_{i}.png" for i in range(1, 5)],
        *[f"images/projects/climate_change{i}.png" for i in range(1, 5)]
    ]
    
    for img_path in images:
        try:
            with open(img_path, "rb") as f:
                cache[img_path] = base64.b64encode(f.read()).decode()
        except:
            cache[img_path] = None
    
    return cache

# Charger AVEC cache Streamlit
images_cache = load_all_images()

html = '<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">💼 Mes Projets Data Science</h1>'

for idx, proj in enumerate(PROJECTS):
    clean_title = proj["titre"].replace(proj["icon"], "").strip()
    badge_style = "" if proj["statut"] == "Déployé" else 'style="background: #667EEA;"'
    badge_text = "✓ Déployé" if proj["statut"] == "Déployé" else "✓ Complet"
    
    html += f'<div class="project-card" style="margin: 2rem 0;">'
    html += f'<h2 class="project-title">{proj["icon"]} {clean_title} <span class="card-badge" {badge_style}>{badge_text}</span></h2>'
    html += f'<p style="color: #D5DAE1; font-size: 1.05rem; line-height: 1.8;">{proj["description"]}</p>'
    
    html += '<div style="margin: 1rem 0;"><strong style="color: #00D9FF;">Technologies:</strong><br/>'
    for tech in proj["technologies"]:
        html += f'<span class="tech-pill">{tech}</span>'
    html += '</div>'
    
    html += '<h3 style="color: #00D9FF; margin: 1.5rem 0 1rem;">📸 Aperçu</h3>'
    html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">'
    
    prefix = ["dakar", "tidianeflix", "sentimentscope", "climate_change"][idx]
    for i in range(1, 5):
        suffix = f"_{i}" if idx < 3 else str(i)
        img_path = f"images/projects/{prefix}{suffix}.png"
        
        img_b64 = images_cache.get(img_path)
        if img_b64:
            html += f'<img src="data:image/png;base64,{img_b64}" style="width: 100%; border-radius: 8px; border: 2px solid rgba(0,217,255,0.3);" loading="lazy" decoding="async">'
    
    html += '</div><h3 style="color: #00D9FF; margin: 1.5rem 0 1rem;">🔗 Liens du projet</h3>'
    html += '<div style="display: flex; gap: 1rem; flex-wrap: wrap;">'
    
    labels = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
    for key, url in proj["liens"].items():
        html += f'<a href="{url}" target="_blank" style="flex: 1; min-width: 150px; background: rgba(26,31,58,0.9); color: #00D9FF; border: 2px solid #00D9FF; border-radius: 12px; padding: 0.8rem; text-align: center; text-decoration: none; font-weight: 700; transition: all 0.3s;">{labels.get(key, key)}</a>'
    
    html += '</div></div>'
    if idx < len(PROJECTS) - 1:
        html += '<hr style="margin: 3rem 0; border: 1px solid rgba(0,217,255,0.2);">'

st.markdown(html, unsafe_allow_html=True)