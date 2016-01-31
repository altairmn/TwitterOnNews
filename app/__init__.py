from flask import Flask, render_template, url_for, redirect, request
import json

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analysis')
def analysis():
    return 'Reached analysis'
