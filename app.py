from flask import Flask, send_from_directory
from flask_compress import Compress
import os

app = Flask(__name__,
            static_folder='static',
            template_folder='.')

# Activer la compression Gzip
Compress(app)

# Configuration optimisée pour production
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000
app.config['COMPRESS_MIMETYPES'] = ['text/html', 'text/css', 'text/xml', 'application/json', 'application/javascript']
app.config['COMPRESS_LEVEL'] = 6
app.config['COMPRESS_MIN_SIZE'] = 500

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 7860))
    app.run(host='0.0.0.0', port=port, debug=False)
