from pydantic import BaseModel, EmailStr
from typing import Optional

class ProveedorBase(BaseModel):
    nombre: str
    contacto: Optional[str] = None
    telefono: Optional[str] = None
    email: Optional[EmailStr] = None
    direccion: Optional[str] = None

class ProveedorCreate(ProveedorBase):
    pass

class ProveedorRead(ProveedorBase):
    idProveedor: int

    class Config:
        orm_mode = True