import streamlit as st
from config import PERSONAL_INFO

st.set_page_config(page_title="Contact - Cheikh Niang", page_icon="📬", layout="wide")

def load_css():
    with open("styles.css", encoding="utf-8") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css()




st.markdown('<h1 style="color: #00D9FF; text-align: center; margin-bottom: 2rem; font-weight: 800;">📬 Me Contacter</h1>', unsafe_allow_html=True)

st.markdown('<div style="text-align: center; background: #1A1F3A; padding: 3rem; border-radius: 15px; margin: 2rem 0;"><h2 style="color: #FFFFFF; margin-bottom: 1rem; font-weight: 800;">💬 Disponible pour</h2><p style="color: #B8C5D6; font-size: 1.1rem; line-height: 2;">🔹 Postes Data Scientist / Data Analyst<br>🔹 Missions Freelance<br>🔹 Alternance / Stage<br>🔹 Collaborations ML/AI</p></div>', unsafe_allow_html=True)

col1, col2 = st.columns(2)
with col1:
    st.markdown(f'<div class="metric-card"><div style="font-size: 3rem; margin-bottom: 1rem;">📧</div><div class="metric-label">Email</div><div style="color: #00D9FF; font-size: 1.1rem; margin-top: 0.5rem;">{PERSONAL_INFO["email"]}</div></div>', unsafe_allow_html=True)
with col2:
    st.markdown(f'<div class="metric-card"><div style="font-size: 3rem; margin-bottom: 1rem;">📱</div><div class="metric-label">Téléphone</div><div style="color: #00D9FF; font-size: 1.1rem; margin-top: 0.5rem;">{PERSONAL_INFO["telephone"]}</div></div>', unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

col3, col4 = st.columns(2)
with col3:
    st.link_button("💼 LinkedIn", PERSONAL_INFO["linkedin"], use_container_width=True)
with col4:
    st.link_button("💻 GitHub", PERSONAL_INFO["github"], use_container_width=True)




