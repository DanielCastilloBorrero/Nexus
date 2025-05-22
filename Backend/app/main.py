from fastapi import FastAPI
from models import models
from database import engine
from routers import usuarios
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Nexus Inventory API",
    description="API for managing inventory in Nexus",
    version="1.0.0",
    openapi_tags=[
        {
            "name": "Usuarios",
            "description": "Operations with users"
        },
        {
            "name": "Productos",
            "description": "Operations with products"
        },
        {
            "name": "Proveedores",
            "description": "Operations with suppliers"
        },
        {
            "name": "Inventario",
            "description": "Operations with inventory"
        }
    ]
)

# Declarar los orígenes permitidos para CORS
origenes = [
    "http://localhost:5173/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origenes,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crear tablas en la base de datos en caso de que no existan
models.Base.metadata.create_all(bind=engine)

# Incluir las rutas de los routers
app.include_router(usuarios.router)

@app.get("/")
def root() -> dict:
    mensaje = {"message": "Welcome to the Nexus Inventory API"}
    return mensaje