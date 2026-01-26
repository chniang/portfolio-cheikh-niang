from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='../static', template_folder='..', static_url_path='/static')

@app.route('/')
def index():
    return send_from_directory('..', 'index.html')

@app.route('/test')
def test():
    return send_from_directory('..', 'test.html')

# Vercel handler
def handler(request):
    return app(request.environ, lambda *args: None)
