from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models.models import Usuario as UsuarioModel
from schemas.Usuario import UsuarioCreate, UsuarioRead

router = APIRouter(prefix="/usuarios", tags=["Usuarios"])

@router.post("/")
def crear_usuario(usuario: UsuarioCreate, db: Session = Depends(get_db)) -> UsuarioRead:
    db_usuario = UsuarioModel(**usuario.dict())
    try:
        db.add(db_usuario)
        db.commit()
        db.refresh(db_usuario)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail="Error al crear el usuario")
    return db_usuario

@router.get("/")
def obtener_usuarios(db: Session = Depends(get_db)) -> list[UsuarioRead]:
    usuarios = db.query(UsuarioModel).all()
    return usuarios 

@router.get("/{usuario_id}")
def obtener_usuario(usuario_id: int, db: Session = Depends(get_db)) -> UsuarioRead:
    usuario = db.query(UsuarioModel).filter(UsuarioModel.id_Usuario == usuario_id).first()
    if not usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    return usuario

@router.put("/{usuario_id}")
def actualizar_usuario(usuario_id: int, usuario: UsuarioCreate, db: Session = Depends(get_db)) -> UsuarioRead:
    db_usuario = db.query(UsuarioModel).filter(UsuarioModel.id_Usuario == usuario_id).first()
    if not db_usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    for key, value in usuario.dict().items():
        setattr(db_usuario, key, value)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario

@router.delete("/{usuario_id}")
def eliminar_usuario(usuario_id: int, db: Session = Depends(get_db)) -> dict:
    db_usuario = db.query(UsuarioModel).filter(UsuarioModel.id_Usuario == usuario_id).first()
    if not db_usuario:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    db.delete(db_usuario)
    db.commit()
    return {"detail": "Usuario eliminado"}
