from flask import Flask, send_from_directory
import os

app = Flask(__name__,
            static_folder='static',
            template_folder='.')

# DÉSACTIVER le cache pour les fichiers statiques
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

@app.route('/')
def index():
    response = send_from_directory('.', 'index.html')
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    return response

@app.route('/test')
def test():
    return send_from_directory('.', 'test.html')

@app.route('/static/<path:path>')
def serve_static(path):
    response = send_from_directory('static', path)
    response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
    return response

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 7860))
    app.run(host='0.0.0.0', port=port, debug=False)
