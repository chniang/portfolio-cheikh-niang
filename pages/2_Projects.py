import streamlit as st
from config import PROJECTS

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

with open("styles.css", encoding="utf-8") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

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
        html += f'<img src="app/static/images/projects/{prefix}{suffix}.png" style="width: 100%; border-radius: 8px; border: 2px solid rgba(0,217,255,0.3);">'
    
    html += '</div><h3 style="color: #00D9FF; margin: 1.5rem 0 1rem;">🔗 Liens du projet</h3>'
    html += '<div style="display: flex; gap: 1rem;">'
    
    labels = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
    for key, url in proj["liens"].items():
        html += f'<a href="{url}" target="_blank" class="stButton"><span>{labels.get(key, key)}</span></a>'
    
    html += '</div></div>'
    if idx < len(PROJECTS) - 1:
        html += '<hr style="margin: 3rem 0; border: 1px solid rgba(0,217,255,0.2);">'

st.markdown(html, unsafe_allow_html=True)