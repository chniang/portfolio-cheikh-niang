from flask import Flask, send_from_directory
import os

app = Flask(__name__,
            static_folder='static',
            template_folder='.')

# Configuration optimisée pour production
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000  # Cache 1 an pour fichiers statiques

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 7860))
    app.run(host='0.0.0.0', port=port, debug=False)
