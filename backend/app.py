from fastapi import FastAPI
from fastapi.middleware.cors  import CORSMiddleware
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Users


app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

orgins = [
    "http://localhost:3000" ,
    "http://192.168.187.171:3000" ,
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware , 
    allow_origins = orgins ,
    allow_credentials = True ,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/")
def homeAPI():
    return {
        "apidata" : "welcom"
    }


