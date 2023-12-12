import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sqlalchemy import Column, Integer, String, Float
from flask import Flask, jsonify
from flask_cors import CORS


#config a database connection
DATABASE_URL ='postgresql://postgres:jacky%402023@localhost:5432/us_museums_db'
engine = create_engine(DATABASE_URL)
Base = automap_base()
Base.prepare(autoload_with=engine)
Museums = Base.classes.museums
TripAdvisor = Base.classes.trip_advisor
MajorCities = Base.classes.major_cities

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes in your Flask app

@app.route("/")
def welcome():
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/museum_data<br/>"
        f"/api/v1.0/tripadvisor_data<br/>"
        f"/api/v1.0/major_cities<br/>"
    )

@app.route("/api/v1.0/museum_data")
def museum_data():
    session = Session(engine)
    museum_data = session.query(Museums).all()
    session.close()
    
    all_museums = []
    for museum in museum_data:
        museum_dict = {}
        for column in Museums.__table__.columns:
            museum_dict[column.name.lower()] = getattr(museum, column.name)
        all_museums.append(museum_dict)
    all_museums.append(museum_dict)
        
    return jsonify(all_museums)

@app.route("/api/v1.0/tripadvisor_data")
def tripadvisor_data():
    session = Session(engine)
    tripadvisor_data = session.query(TripAdvisor).all()
    session.close()
    
    all_tripadvisor = []
    for tripadvisor in tripadvisor_data:
        tripadvisor_dict = {}
        for column in TripAdvisor.__table__.columns:
            tripadvisor_dict[column.name.lower()] = getattr(tripadvisor, column.name)
        all_tripadvisor.append(tripadvisor_dict)
    all_tripadvisor.append(tripadvisor_dict)
        
    return jsonify(all_tripadvisor)

@app.route("/api/v1.0/major_cities")
def major_cities():
    session = Session(engine)
    major_cities_data = session.query(MajorCities).all()
    session.close()
    
    all_major_cities = []
    for major_city in major_cities_data:
        major_city_dict = {}
        for column in MajorCities.__table__.columns:
            major_city_dict[column.name.lower()] = getattr(major_city, column.name)
        all_major_cities.append(major_city_dict)
    all_major_cities.append(major_city_dict)
        
    return jsonify(all_major_cities)
    

if __name__ == '__main__':
    app.run(debug=True)