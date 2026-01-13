import streamlit as st
from config import PERSONAL_INFO
import base64

st.set_page_config(page_title="À propos", page_icon="👤", layout="wide")

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

# En-tête
st.markdown('<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">👤 À propos de moi</h1>', unsafe_allow_html=True)

# Photo de profil
profile_img = get_image_base64("images/profile/photo.jpg")
if profile_img:
    st.markdown(f'<img src="data:image/jpeg;base64,{profile_img}" class="profile-img" alt="Cheikh Niang">', unsafe_allow_html=True)

st.markdown(f'<h2 style="color: #00D9FF; text-align: center; margin: 1rem 0;">{PERSONAL_INFO["nom"]}</h2>', unsafe_allow_html=True)
st.markdown(f'<p style="color: #B8C5D6; text-align: center; font-size: 1.2rem; margin-bottom: 2rem;">{PERSONAL_INFO["titre"]}</p>', unsafe_allow_html=True)

# BOUTON TÉLÉCHARGEMENT CV
st.markdown('<div style="text-align: center; margin: 2rem 0;">', unsafe_allow_html=True)
try:
    with open("documents/CV_Cheikh_Niang.pdf", "rb") as pdf_file:
        pdf_bytes = pdf_file.read()
        st.download_button(
            label="📄 Télécharger mon CV complet",
            data=pdf_bytes,
            file_name="CV_Cheikh_Niang.pdf",
            mime="application/pdf",
            use_container_width=False
        )
except FileNotFoundError:
    st.info("📄 CV bientôt disponible en téléchargement")
st.markdown('</div>', unsafe_allow_html=True)

# Présentation
st.markdown('<div class="about-card"><h2 class="about-title">🎓 Présentation</h2><p class="about-text">Data Scientist / Data Analyst passionné par l\'exploitation des données pour la prise de décision et l\'optimisation de processus. Fort d\'une formation technique en Python, Machine Learning et SQL, j\'ai développé des solutions data complètes, de la préparation (ETL) à la visualisation interactive.</p><p class="about-text">Autodidacte, orienté résultats et rigoureux, je suis à la recherche d\'un poste me permettant de mettre en œuvre mes compétences en Analyse Statistique, Machine Learning et Ingénierie des Données (ETL / Data Pipeline).</p></div>', unsafe_allow_html=True)

# Parcours (SANS expérience professionnelle)
st.markdown('<div class="about-card"><h2 class="about-title">🚀 Parcours</h2><p class="about-text"><strong style="color: #00D9FF;">🎓 Formation Data Science (2024-2025)</strong><br>Certification Data Science chez GoMyCode : bootcamp intensif couvrant Python, SQL, Machine Learning, Deep Learning et déploiement d\'applications web.<br><br><strong style="color: #00D9FF;">🔬 Formation académique</strong><br>Licence 1 & 2 Physique-Chimie, Université Cheikh Anta Diop (2017-2020) : solides bases en sciences et méthodologie analytique.<br><br><strong style="color: #00D9FF;">📊 Portfolio actif</strong><br>4 projets data complets incluant prédiction ML, analyse NLP, gestion de bases de données et visualisation interactive. Compétences démontrées : Python, SQL, Streamlit, TensorFlow, Scikit-learn.</p></div>', unsafe_allow_html=True)

# Compétences clés
st.markdown('<div class="about-card"><h2 class="about-title">💡 Compétences clés</h2><p class="about-text"><strong style="color: #00D9FF;">Langages :</strong> Python, SQL, HTML/CSS<br><strong style="color: #00D9FF;">Frameworks :</strong> Streamlit, TensorFlow, Scikit-learn, Pandas, NumPy<br><strong style="color: #00D9FF;">Visualisation :</strong> Plotly, Matplotlib, Seaborn, Tableau<br><strong style="color: #00D9FF;">Outils :</strong> Git/GitHub, Jupyter, VS Code, BeautifulSoup, Selenium<br><strong style="color: #00D9FF;">Bases de données :</strong> MySQL, SQLite<br><strong style="color: #00D9FF;">Machine Learning :</strong> Modélisation supervisée, Feature Engineering, Deep Learning (LSTM)</p></div>', unsafe_allow_html=True)

# Contact
st.markdown(f'<div class="about-card"><h2 class="about-title">📬 Contact</h2><p class="about-text"><strong style="color: #00D9FF;">📧 Email :</strong> {PERSONAL_INFO["email"]}<br><strong style="color: #00D9FF;">📱 Téléphone :</strong> {PERSONAL_INFO["telephone"]}<br><strong style="color: #00D9FF;">📍 Localisation :</strong> Geule Tapé, Dakar, Sénégal 🇸🇳<br><strong style="color: #00D9FF;">🌐 Langues :</strong> Français (Courant), Anglais (Intermédiaire)</p></div>', unsafe_allow_html=True)

# Boutons réseaux sociaux
st.markdown('<h2 style="color: #00D9FF; text-align: center; margin: 3rem 0 1.5rem 0;">🌐 Retrouvez-moi</h2>', unsafe_allow_html=True)
col1, col2 = st.columns(2)
with col1:
    st.link_button("💼 LinkedIn", PERSONAL_INFO["linkedin"], use_container_width=True)
with col2:
    st.link_button("💻 GitHub", PERSONAL_INFO["github"], use_container_width=True)
