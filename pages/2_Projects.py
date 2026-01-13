import streamlit as st
from config import PROJECTS
import base64

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

def load_css():
    with open("styles.css", encoding="utf-8") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css()

def get_image_base64(image_path):
    try:
        with open(image_path, "rb") as img_file:
            return base64.b64encode(img_file.read()).decode()
    except:
        return None

st.markdown('<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">💼 Mes Projets Data Science</h1>', unsafe_allow_html=True)

for idx, proj in enumerate(PROJECTS):
    clean_title = proj['titre'].replace(proj['icon'], '').strip()
    
    # Badge
    if proj['statut'] == "Déployé":
        badge = '<span class="card-badge">✓ Déployé</span>'
    else:
        badge = '<span class="card-badge" style="background: #667EEA;">✓ Complet</span>'
    
    # CARTE PROJET
    st.markdown(f'''
    <div class="project-card">
        <h2 class="project-title">{proj["icon"]} {clean_title}{badge}</h2>
        <p style="color: #D5DAE1; font-size: 1.05rem; line-height: 1.8; margin: 1rem 0 1.5rem 0;">
            {proj["description"]}
        </p>
    ''', unsafe_allow_html=True)
    
    # Technologies (DANS la carte, pas en HTML)
    tech_cols = st.columns(len(proj['technologies']))
    for i, tech in enumerate(proj['technologies']):
        with tech_cols[i]:
            st.markdown(f'<span class="tech-pill">{tech}</span>', unsafe_allow_html=True)
    
    # Section Aperçu
    st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0; font-size: 1.3rem;">📸 Aperçu</h3>', unsafe_allow_html=True)
    
    # Images selon projet
    col1, col2 = st.columns(2)
    if idx == 0:  # Dakar
        for i in range(1, 5):
            img_data = get_image_base64(f"images/projects/dakar_{i}.png")
            if img_data:
                with col1 if i % 2 == 1 else col2:
                    st.image(f"data:image/png;base64,{img_data}", use_container_width=True)
    elif idx == 1:  # TidianeFlix
        for i in range(1, 5):
            img_data = get_image_base64(f"images/projects/tidianeflix_{i}.png")
            if img_data:
                with col1 if i % 2 == 1 else col2:
                    st.image(f"data:image/png;base64,{img_data}", use_container_width=True)
    elif idx == 2:  # SentimentScope
        for i in range(1, 5):
            img_data = get_image_base64(f"images/projects/sentimentscope_{i}.png")
            if img_data:
                with col1 if i % 2 == 1 else col2:
                    st.image(f"data:image/png;base64,{img_data}", use_container_width=True)
    elif idx == 3:  # Climat
        for i in range(1, 5):
            img_data = get_image_base64(f"images/projects/climate_change{i}.png")
            if img_data:
                with col1 if i % 2 == 1 else col2:
                    st.image(f"data:image/png;base64,{img_data}", use_container_width=True)
    
    # Section Liens
    st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0; font-size: 1.3rem;">🔗 Liens du projet</h3>', unsafe_allow_html=True)
    
    # Boutons
    cols = st.columns(len(proj['liens']))
    label_map = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
    for i, (key, url) in enumerate(proj['liens'].items()):
        with cols[i]:
            st.link_button(label_map.get(key, key.title()), url, use_container_width=True)
    
    # FERMER la carte
    st.markdown('</div>', unsafe_allow_html=True)
    
    # Espace entre projets
    if idx < len(PROJECTS) - 1:
        st.markdown('<br><br>', unsafe_allow_html=True)
