import streamlit as st
from config import PROJECTS

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

@st.cache_data
def load_css():
    with open("styles.css", encoding="utf-8") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css()

# METTRE TOUT LE CONTENU STATIQUE EN CACHE
@st.cache_data
def render_projects_content():
    content = '<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">💼 Mes Projets Data Science</h1>'
    
    for idx, proj in enumerate(PROJECTS):
        clean_title = proj['titre'].replace(proj['icon'], '').strip()
        
        badge = '<span class="card-badge">✓ Déployé</span>' if proj['statut'] == "Déployé" else '<span class="card-badge" style="background: #667EEA;">✓ Complet</span>'
        
        content += f'''
        <div class="project-card">
            <h2 class="project-title">{proj["icon"]} {clean_title}{badge}</h2>
            <p style="color: #D5DAE1; font-size: 1.05rem; line-height: 1.8; margin: 1rem 0 1.5rem 0;">
                {proj["description"]}
            </p>
        </div>
        '''
    
    return content

# Afficher le contenu statique
st.markdown(render_projects_content(), unsafe_allow_html=True)

# Afficher les projets avec boutons (pas de cache ici car boutons interactifs)
for idx, proj in enumerate(PROJECTS):
    with st.container():
        # Technologies
        tech_cols = st.columns(len(proj['technologies']))
        for i, tech in enumerate(proj['technologies']):
            with tech_cols[i]:
                st.markdown(f'<span class="tech-pill">{tech}</span>', unsafe_allow_html=True)
        
        # Boutons
        st.markdown('<h3 style="color: #00D9FF; margin: 1rem 0;">🔗 Liens du projet</h3>', unsafe_allow_html=True)
        cols = st.columns(len(proj['liens']))
        label_map = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
        for i, (key, url) in enumerate(proj['liens'].items()):
            with cols[i]:
                st.link_button(label_map.get(key, key.title()), url, use_container_width=True)
        
        st.markdown('<br>', unsafe_allow_html=True)