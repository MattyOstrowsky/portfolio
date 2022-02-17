from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from MLmodel import StrokePredictor
from database import fetch_all_projects, fetch_few_projects
from models import MlParams

app = FastAPI()

origins = ["*"]

# Allow communication between backend and frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

predictor = StrokePredictor()


@app.get("/")
async def get_few_projects():
    projects = await fetch_few_projects()
    return projects


@app.get("/projects")
async def get_all_projects():
    projects = await fetch_all_projects()
    return projects


@app.post("/strokemodel")
async def save_model_param(params: MlParams):
    try:
        res = predictor.predict(params)
        res = float(format(res, '.2f'))*100
        return {res}
    except:
        raise print('Model failed')
