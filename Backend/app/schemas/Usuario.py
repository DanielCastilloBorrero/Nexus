from pydantic import BaseModel, EmailStr
from datetime import date

class UsuarioBase(BaseModel):
    nombre: str
    apellido: str
    fecha_nacimiento: date
    telefono: str
    email: EmailStr

class UsuarioCreate(UsuarioBase):
    password: str

class UsuarioRead(UsuarioBase):
    id_Usuario: int

    class Config:
        orm_mode = True