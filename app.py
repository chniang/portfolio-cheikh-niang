import streamlit as st
from config import PERSONAL_INFO, PROJECTS
import base64

st.set_page_config(page_title="Portfolio - Cheikh Niang", page_icon="📊", layout="wide")

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

profile_img = get_image_base64("images/profile/photo.jpg")
if profile_img:
    st.markdown(f'<img src="data:image/jpeg;base64,{profile_img}" class="profile-img" alt="Cheikh Niang">', unsafe_allow_html=True)

st.markdown(f'<h1 class="hero-name">{PERSONAL_INFO["nom"]}</h1>', unsafe_allow_html=True)
st.markdown(f'<p class="hero-title">{PERSONAL_INFO["titre"]}</p>', unsafe_allow_html=True)
st.markdown('<p class="hero-quote">"Transformer les données en insights actionnables"</p>', unsafe_allow_html=True)
st.markdown("<br>", unsafe_allow_html=True)

col1, col2, col3, col4 = st.columns(4)
with col1:
    st.markdown('<div class="metric-card"><div class="metric-value">4</div><div class="metric-label">Projets</div></div>', unsafe_allow_html=True)
with col2:
    st.markdown('<div class="metric-card"><div class="metric-value">3</div><div class="metric-label">Apps en direct</div></div>', unsafe_allow_html=True)
with col3:
    st.markdown('<div class="metric-card"><div class="metric-value">534K+</div><div class="metric-label">Données</div></div>', unsafe_allow_html=True)
with col4:
    st.markdown('<div class="metric-card"><div class="metric-value">90%</div><div class="metric-label">Précision</div></div>', unsafe_allow_html=True)

st.markdown("<br><br>", unsafe_allow_html=True)
st.markdown('<h2 style="color: #00D9FF; text-align: center; margin: 2rem 0;">🚀 Projets Récents</h2>', unsafe_allow_html=True)

col1, col2 = st.columns(2)
for i, proj in enumerate(PROJECTS[:2]):
    with col1 if i == 0 else col2:
        clean_title = proj['titre'].replace(proj['icon'], '').strip()
        tech_pills = "".join([f'<span class="tech-pill">{tech}</span>' for tech in proj['technologies'][:3]])
        st.markdown(f'<div class="equal-card"><h3 class="card-title">{proj["icon"]} {clean_title}<span class="card-badge">{proj["statut"]}</span></h3><p class="card-desc">{proj["tagline"]}</p><div class="tech-pills">{tech_pills}</div></div>', unsafe_allow_html=True)

st.markdown('<p style="text-align: center; color: #8B9DC3; margin-top: 4rem; padding: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">© 2025 Cheikh Niang • Data Scientist Junior • Dakar, Sénégal 🇸🇳</p>', unsafe_allow_html=True)

