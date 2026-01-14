import streamlit as st
from config import PROJECTS

st.set_page_config(page_title="Projets", page_icon="💼", layout="wide")

# Charger CSS
with open("styles.css", encoding="utf-8") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

st.markdown('<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">💼 Mes Projets Data Science</h1>', unsafe_allow_html=True)

for idx, proj in enumerate(PROJECTS):
    # Créer un container avec clé unique pour éviter re-renders
    with st.container(key=f"project_{idx}"):
        clean_title = proj['titre'].replace(proj['icon'], '').strip()
        
        # Badge
        badge_html = '<span class="card-badge">✓ Déployé</span>' if proj['statut'] == "Déployé" else '<span class="card-badge" style="background: #667EEA;">✓ Complet</span>'
        
        # Titre et description
        st.markdown(f'''
        <div class="project-card">
            <h2 class="project-title">{proj["icon"]} {clean_title} {badge_html}</h2>
            <p style="color: #D5DAE1; font-size: 1.05rem; line-height: 1.8; margin: 1rem 0 1.5rem 0;">
                {proj["description"]}
            </p>
        </div>
        ''', unsafe_allow_html=True)
        
        # Technologies
        st.markdown("**Technologies :**")
        tech_cols = st.columns(len(proj['technologies']))
        for i, tech in enumerate(proj['technologies']):
            with tech_cols[i]:
                st.markdown(f'<span class="tech-pill">{tech}</span>', unsafe_allow_html=True)
        
        # Section Aperçu avec images
        st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0;">📸 Aperçu</h3>', unsafe_allow_html=True)
        
        col1, col2 = st.columns(2)
        
        # Déterminer les images selon le projet
        if idx == 0:  # Dakar
            images = [f"images/projects/dakar_{i}.png" for i in range(1, 5)]
        elif idx == 1:  # TidianeFlix
            images = [f"images/projects/tidianeflix_{i}.png" for i in range(1, 5)]
        elif idx == 2:  # SentimentScope
            images = [f"images/projects/sentimentscope_{i}.png" for i in range(1, 5)]
        elif idx == 3:  # Climat
            images = [f"images/projects/climate_change{i}.png" for i in range(1, 5)]
        
        # Afficher les images
        for i, img_path in enumerate(images):
            try:
                with col1 if i % 2 == 0 else col2:
                    st.image(img_path, use_container_width=True)
            except:
                pass
        
        # Liens avec clés uniques
        st.markdown('<h3 style="color: #00D9FF; margin: 2rem 0 1rem 0;">🔗 Liens du projet</h3>', unsafe_allow_html=True)
        
        cols = st.columns(len(proj['liens']))
        label_map = {"github": "💻 GitHub", "demo": "🌐 Démo en direct", "notebook": "📓 Carnet"}
        
        for i, (key, url) in enumerate(proj['liens'].items()):
            with cols[i]:
                # Clé unique pour chaque bouton
                st.link_button(
                    label_map.get(key, key.title()), 
                    url, 
                    use_container_width=True,
                    key=f"btn_{idx}_{key}"
                )
        
        # Séparateur
        if idx < len(PROJECTS) - 1:
            st.markdown("---")