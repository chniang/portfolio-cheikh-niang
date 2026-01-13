import streamlit as st
from config import PROJECTS

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

@st.cache_data
def load_css():
    with open("styles.css", encoding="utf-8") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css()

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
    </div>
    ''', unsafe_allow_html=True)
    
    # Technologies
    tech_cols = st.columns(len(proj['technologies']))
    for i, tech in enumerate(proj['technologies']):
        with tech_cols[i]:
            st.markdown(f'<span class="tech-pill">{tech}</span>', unsafe_allow_html=True)
    
    # Section Aperçu - UTILISER CHEMINS DIRECTS
    st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0; font-size: 1.3rem;">📸 Aperçu</h3>', unsafe_allow_html=True)
    
    # Images selon projet - CHEMINS DIRECTS (plus rapide)
    col1, col2 = st.columns(2)
    
    if idx == 0:  # Dakar
        images = [f"images/projects/dakar_{i}.png" for i in range(1, 5)]
    elif idx == 1:  # TidianeFlix
        images = [f"images/projects/tidianeflix_{i}.png" for i in range(1, 5)]
    elif idx == 2:  # SentimentScope
        images = [f"images/projects/sentimentscope_{i}.png" for i in range(1, 5)]
    elif idx == 3:  # Climat
        images = [f"images/projects/climate_change{i}.png" for i in range(1, 5)]
    
    for i, img_path in enumerate(images):
        try:
            with col1 if i % 2 == 0 else col2:
                st.image(img_path, use_container_width=True)
        except:
            pass
    
    # Section Liens
    st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0; font-size: 1.3rem;">🔗 Liens du projet</h3>', unsafe_allow_html=True)
    
    # Boutons
    cols = st.columns(len(proj['liens']))
    label_map = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
    for i, (key, url) in enumerate(proj['liens'].items()):
        with cols[i]:
            st.link_button(label_map.get(key, key.title()), url, use_container_width=True)
    
    # Espace entre projets
    if idx < len(PROJECTS) - 1:
        st.markdown('<br><br>', unsafe_allow_html=True)