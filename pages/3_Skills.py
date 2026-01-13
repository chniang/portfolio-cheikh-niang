import streamlit as st

st.set_page_config(page_title="Compétences", page_icon="🎯", layout="wide")

def load_css():
    with open("styles.css", encoding="utf-8") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

load_css()

st.markdown('<h1 style="color: #00D9FF; text-align: center; margin-bottom: 3rem; font-weight: 800;">🎯 Stack Technique</h1>', unsafe_allow_html=True)

st.markdown('<div class="skill-card"><h3 class="skill-title">💻 Langages et frameworks</h3><p class="about-text"><strong style="color: #00D9FF;">Python</strong><br>Pandas, NumPy, Scikit-learn, TensorFlow, Keras, Matplotlib, Seaborn, Plotly<br><br><strong style="color: #00D9FF;">SQL</strong><br>MySQL, SQLite, SQLAlchemy, requêtes complexes, optimisation<br><br><strong style="color: #00D9FF;">HTML & CSS</strong><br>Développement web, mise en page responsive, stylisation avancée</p></div>', unsafe_allow_html=True)

st.markdown('<div class="skill-card"><h3 class="skill-title">🤖 Apprentissage automatique</h3><p class="about-text"><strong style="color: #00D9FF;">Apprentissage supervisé</strong><br>Régression, Classification, Random Forest, XGBoost, LightGBM<br><br><strong style="color: #00D9FF;">Apprentissage profond</strong><br>CNN, RNN, LSTM, TensorFlow/Keras, Prévision de séries temporelles<br><br><strong style="color: #00D9FF;">NLP</strong><br>Analyse des sentiments, TextBlob, NLTK, TF-IDF, plongements lexicaux</p></div>', unsafe_allow_html=True)

st.markdown('<div class="skill-card"><h3 class="skill-title">🔧 Automatisation & Web Scraping</h3><p class="about-text"><strong style="color: #00D9FF;">Web Scraping</strong><br>BeautifulSoup, Scrapy, Selenium, extraction de données web à grande échelle<br><br><strong style="color: #00D9FF;">Automatisation</strong><br>Scripts Python d\'automatisation, planification de tâches, traitement batch<br><br><strong style="color: #00D9FF;">APIs</strong><br>Consommation et intégration d\'APIs REST, gestion de données externes</p></div>', unsafe_allow_html=True)

st.markdown('<div class="skill-card"><h3 class="skill-title">📊 Visualisation</h3><p class="about-text"><strong style="color: #00D9FF;">Streamlit</strong><br>Applications web interactives, tableaux de bord temps réel, déploiement<br><br><strong style="color: #00D9FF;">Plotly</strong><br>Graphiques interactifs avancés, animations<br><br><strong style="color: #00D9FF;">Tableau</strong><br>Création de dashboards professionnels, visualisations de données business, storytelling data</p></div>', unsafe_allow_html=True)
