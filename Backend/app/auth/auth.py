from sqlalchemy.orm import Session
from models.models import Usuario
from auth.hashing import verify_password
from auth.jwt import create_access_token

def authenticate_user(email: str, password: str, db: Session):
    usuario = db.query(Usuario).filter(Usuario.email == email).first()
    if not usuario or not verify_password(password, usuario.password):
        return None
    return usuario

def login_and_generate_token(usuario, expires_minutes: int = 60):
    return create_access_token(data={"sub": usuario.email})
