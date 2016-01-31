from flask import Flask, request, url_for, Blueprint, render_template, redirect

analysis = Blueprint('analysis', __name__, url_prefix='/analysis')


@analysis.route('/headline/')
def headline():
