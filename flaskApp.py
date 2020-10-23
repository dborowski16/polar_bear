from flask import Flask

app = Flask(__name__)


import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import jsonify, render_template

engine = create_engine("sqlite:///Resources/BearsOver300Points.sqlite")

Base=automap_base()

Base.prepare(engine, reflect=True)


session=Session(engine)

@app.route("/")
def home():
    # session=Session(engine)
    return render_template('index1.html')
    


@app.route("/moreData.html")
def precipitation():
#     session=Session(engine)
    return render_template('moreData.html')
    # results=engine.execute('select * from limited_polar_bears').fetchall()
    # results_list=[{'idc': result[0], 'id': result[1], 'timestamp': result[2], 'lat': result[3], 'lon': result[4]} for result in results]
    # return jsonify(results_list)


        


if __name__ == "__main__":
    app.run(debug=True)