from flask import Flask, send_from_directory
import os

app = Flask(__name__,
            static_folder='static',
            static_url_path='/static',
            template_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/test')
def test():
    return send_from_directory('.', 'test.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 7860))
    app.run(host='0.0.0.0', port=port, debug=False)
