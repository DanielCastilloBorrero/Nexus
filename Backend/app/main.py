from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from models import models
from database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)