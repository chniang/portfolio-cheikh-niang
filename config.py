PERSONAL_INFO = {
    "nom": "Cheikh Niang",
    "titre": "Data Scientist / Analyst",
    "email": "cheikhniang159@gmail.com",
    "telephone": "+221 77 636 27 14",
    "linkedin": "https://www.linkedin.com/in/cheikh-niang-8b9418271/",
    "github": "https://github.com/chniang"
}

PROJECTS = [
    {
        "icon": "⚡",
        "titre": "Prédiction de puissance à Dakar",
        "tagline": "Prédiction des coupures d'électricité à Dakar",
        "description": "Application web de prédiction des risques de coupures d'électricité dans 8 quartiers de Dakar. Utilise deux modèles de Machine Learning : LightGBM (gradient boosting, ~88% précision) et LSTM (deep learning, ~90% précision) entraînés sur 70,001 enregistrements de données synthétiques. L'application calcule un risque combiné en pourcentage et le classe en 3 niveaux (FAIBLE 0-39%, MOYEN 40-69%, ÉLEVÉ 70-100%). Interface Streamlit avec 4 onglets : prédiction en temps réel avec jauge interactive, carte géographique Plotly des 8 quartiers, statistiques comparatives par zone, et historique des tendances temporelles. Export des prédictions en CSV.",     
        "technologies": ["Python", "LightGBM", "TensorFlow", "LSTM", "Streamlit", "Plotly"],
        "statut": "Déployé",
        "liens": {
            "github": "https://github.com/chniang/dakar_electricity_prediction",
            "demo": "https://huggingface.co/spaces/TIJAANI/dakar-power-prediction"
        }
    },
    {
        "icon": "🎬",
        "titre": "TidianeFlix",
        "tagline": "Système de billetterie cinéma avec Analytics & ML",
        "description": "Application full-stack de gestion de billetterie pour cinéma avec base de données SQLite (15 films, 3 salles, 20 séances, 20 clients, 34 billets vendus). Combine analytics business et machine learning : KPIs financiers en temps réel (109,000 FCFA de revenus, prix moyen 3,406 FCFA), segmentation automatique des clients en 3 catégories (VIP ≥10K, Fidèle ≥5K, Occasionnel <5K), prédiction des ventes futures par régression linéaire (7 jours), scoring de probabilité de réachat, et système de recommandation de films par genre (content-based filtering). Interface style Netflix avec landing page élégante et graphiques Plotly interactifs.",
        "technologies": ["Streamlit", "SQLite", "SQLAlchemy", "Pandas", "Plotly", "Scikit-learn"],
        "statut": "Déployé",
        "liens": {
            "github": "https://github.com/chniang/TidianeFlix",
            "demo": "https://huggingface.co/spaces/TIJAANI/tidiane-flix"
        }
    },
    {
        "icon": "📊",
        "titre": "SentimentScope",
        "tagline": "Analyse de sentiments NLP avec TextBlob",
        "description": "Application web d'analyse de sentiments utilisant le Natural Language Processing (TextBlob + NLTK) pour classifier automatiquement des textes selon leur tonalité émotionnelle. Propose 3 modes d'analyse : texte simple (analyse instantanée avec jauge visuelle), analyse multiple (comparaison de 2 à 10 textes avec graphiques camembert et barres), et traitement batch de fichiers CSV (analyse en masse illimitée). Calcule deux métriques : polarité de -1 (très négatif) à +1 (très positif) et subjectivité de 0 (objectif) à 1 (subjectif). Classifie en 3 catégories (Positif >0.1, Neutre -0.1 à 0.1, Négatif <-0.1). Inclut nuage de mots (WordCloud) et export CSV des résultats.",
        "technologies": ["Python", "TextBlob", "NLTK", "Streamlit", "Plotly", "WordCloud"],
        "statut": "Déployé",
        "liens": {
            "github": "https://github.com/chniang/SentimentScope",
            "demo": "https://huggingface.co/spaces/TIJAANI/sentiment-scope"
        }
    },
    {
        "icon": "🌍",
        "titre": "Analyse du climat africain",
        "tagline": "Visualisation des tendances thermiques 1980-2023",
        "description": "Analyse approfondie du changement climatique en Afrique sur 43 ans (1980-2023) basée sur 464,815 observations météorologiques quotidiennes couvrant 5 pays : Tunisie, Cameroun, Sénégal, Égypte et Angola. Révèle une augmentation moyenne de +1.51°F des températures avec le Cameroun le plus touché (+2.63°F). Compare les distributions thermiques avant/après 2000 et identifie l'accélération du réchauffement après 2010. Développé en Jupyter Notebook avec 8 types de visualisations : évolution temporelle interactive (Plotly), box plots comparatifs avant/après 2000, heatmap annuelle par pays, histogrammes de distribution (Matplotlib/Seaborn). Analyse les variables TAVG, TMAX, TMIN sur dataset de 18.5 MB.",
        "technologies": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
        "statut": "Complet",
        "liens": {
            "github": "https://github.com/chniang/Africa_climate_change_visualisation",
            "notebook": "https://github.com/chniang/Africa_climate_change_visualisation/blob/Master/climate_analysis.ipynb"
        }
    }
]