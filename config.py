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
        "icon": "âš¡",
        "titre": "PrÃ©diction de puissance Ã  Dakar",
        "tagline": "PrÃ©diction des coupures d'Ã©lectricitÃ© Ã  Dakar",
        "description": "Application web de prÃ©diction des risques de coupures d'Ã©lectricitÃ© dans 8 quartiers de Dakar. Utilise deux modÃ¨les de Machine Learning : LightGBM (gradient boosting, ~88% prÃ©cision) et LSTM (deep learning, ~90% prÃ©cision) entraÃ®nÃ©s sur 70,001 enregistrements de donnÃ©es synthÃ©tiques. L'application calcule un risque combinÃ© en pourcentage et le classe en 3 niveaux (FAIBLE 0-39%, MOYEN 40-69%, Ã‰LEVÃ‰ 70-100%). Interface Streamlit avec 4 onglets : prÃ©diction en temps rÃ©el avec jauge interactive, carte gÃ©ographique Plotly des 8 quartiers, statistiques comparatives par zone, et historique des tendances temporelles. Export des prÃ©dictions en CSV.",     
        "technologies": ["Python", "LightGBM", "TensorFlow", "LSTM", "Streamlit", "Plotly"],
        "statut": "DÃ©ployÃ©",
        "liens": {
            "github": "https://github.com/chniang/dakar-power-prediction",
            "demo": "https://huggingface.co/spaces/TIJAANI/dakar-power-prediction"
        }
    },
    {
        "icon": "ðŸŽ¬",
        "titre": "TidianeFlix",
        "tagline": "SystÃ¨me de billetterie cinÃ©ma avec Analytics & ML",
        "description": "Application full-stack de gestion de billetterie pour cinÃ©ma avec base de donnÃ©es SQLite (15 films, 3 salles, 20 sÃ©ances, 20 clients, 34 billets vendus). Combine analytics business et machine learning : KPIs financiers en temps rÃ©el (109,000 FCFA de revenus, prix moyen 3,406 FCFA), segmentation automatique des clients en 3 catÃ©gories (VIP â‰¥10K, FidÃ¨le â‰¥5K, Occasionnel <5K), prÃ©diction des ventes futures par rÃ©gression linÃ©aire (7 jours), scoring de probabilitÃ© de rÃ©achat, et systÃ¨me de recommandation de films par genre (content-based filtering). Interface style Netflix avec landing page Ã©lÃ©gante et graphiques Plotly interactifs.",
        "technologies": ["Streamlit", "SQLite", "SQLAlchemy", "Pandas", "Plotly", "Scikit-learn"],
        "statut": "DÃ©ployÃ©",
        "liens": {
            "github": "https://github.com/chniang/TIDIANE_FLIX",
            "demo": "https://huggingface.co/spaces/TIJAANI/tidiane-flix"
        }
    },
    {
        "icon": "ðŸ“Š",
        "titre": "SentimentScope",
        "tagline": "Analyse de sentiments NLP avec TextBlob",
        "description": "Application web d'analyse de sentiments utilisant le Natural Language Processing (TextBlob + NLTK) pour classifier automatiquement des textes selon leur tonalitÃ© Ã©motionnelle. Propose 3 modes d'analyse : texte simple (analyse instantanÃ©e avec jauge visuelle), analyse multiple (comparaison de 2 Ã  10 textes avec graphiques camembert et barres), et traitement batch de fichiers CSV (analyse en masse illimitÃ©e). Calcule deux mÃ©triques : polaritÃ© de -1 (trÃ¨s nÃ©gatif) Ã  +1 (trÃ¨s positif) et subjectivitÃ© de 0 (objectif) Ã  1 (subjectif). Classifie en 3 catÃ©gories (Positif >0.1, Neutre -0.1 Ã  0.1, NÃ©gatif <-0.1). Inclut nuage de mots (WordCloud) et export CSV des rÃ©sultats.",
        "technologies": ["Python", "TextBlob", "NLTK", "Streamlit", "Plotly", "WordCloud"],
        "statut": "DÃ©ployÃ©",
        "liens": {
            "github": "https://github.com/chniang/sentiment-analysis-nlp",
            "demo": "https://huggingface.co/spaces/TIJAANI/sentiment-scope"
        }
    },
    {
        "icon": "ðŸŒ",
        "titre": "Analyse du climat africain",
        "tagline": "Visualisation des tendances thermiques 1980-2023",
        "description": "Analyse approfondie du changement climatique en Afrique sur 43 ans (1980-2023) basÃ©e sur 464,815 observations mÃ©tÃ©orologiques quotidiennes couvrant 5 pays : Tunisie, Cameroun, SÃ©nÃ©gal, Ã‰gypte et Angola. RÃ©vÃ¨le une augmentation moyenne de +1.51Â°F des tempÃ©ratures avec le Cameroun le plus touchÃ© (+2.63Â°F). Compare les distributions thermiques avant/aprÃ¨s 2000 et identifie l'accÃ©lÃ©ration du rÃ©chauffement aprÃ¨s 2010. DÃ©veloppÃ© en Jupyter Notebook avec 8 types de visualisations : Ã©volution temporelle interactive (Plotly), box plots comparatifs avant/aprÃ¨s 2000, heatmap annuelle par pays, histogrammes de distribution (Matplotlib/Seaborn). Analyse les variables TAVG, TMAX, TMIN sur dataset de 18.5 MB.",
        "technologies": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter"],
        "statut": "Complet",
        "liens": {
            "github": "https://github.com/chniang/Africa_climate_change_visualisation",
            "notebook": "https://github.com/chniang/Africa_climate_change_visualisation/blob/Master/climate_analysis.ipynb"
        }
    }
]