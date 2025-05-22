from sqlalchemy import Column, Integer, String, Date, DateTime, ForeignKey, Text, DECIMAL
from sqlalchemy.orm import relationship
from database import Base

class Usuario(Base):
    __tablename__ = "Usuarios"

    id_Usuario = Column(Integer, primary_key=True)
    nombre = Column(String(100), nullable=False)
    apellido = Column(String(100), nullable=False)
    fecha_nacimiento = Column(Date, nullable=False)
    telefono = Column(String(20), nullable=False)
    email = Column(String(200), nullable=False, index=True)  # índice útil para login
    password = Column(String(255), nullable=False)

    movimientos = relationship("MovimientoInventario", back_populates="usuario")

class Proveedor(Base):
    __tablename__ = "Proveedores"

    idProveedor = Column(Integer, primary_key=True)
    nombre = Column(String(150), nullable=False, index=True)  # común en búsquedas
    contacto = Column(String(150))
    telefono = Column(String(50))
    email = Column(String(150))
    direccion = Column(String(255))

    productos = relationship("Productos", back_populates="proveedor")

class Categoria(Base):
    __tablename__ = "Categorias"

    idCategoria = Column(Integer, primary_key=True)
    nombre = Column(String(100), nullable=False, index=True)  # útil para filtros
    descripcion = Column(Text)

    productos = relationship("Productos", back_populates="categoria")

class Producto(Base):
    __tablename__ = "Productos"

    idProducto = Column(Integer, primary_key=True)
    nombre = Column(String(200), nullable=False, index=True)  # para búsquedas
    descripcion = Column(Text)
    precioCompra = Column(DECIMAL(10, 2))
    precioVenta = Column(DECIMAL(10, 2))
    stockActual = Column(Integer, nullable=False)
    stockMinimo = Column(Integer, nullable=False)
    idCategoria = Column(Integer, ForeignKey("Categorias.idCategoria"), index=True)
    idProveedor = Column(Integer, ForeignKey("Proveedores.idProveedor"), index=True)

    categoria = relationship("Categoria", back_populates="productos")
    proveedor = relationship("Proveedor", back_populates="productos")
    movimientos = relationship("MovimientoInventario", back_populates="producto")

class MovimientoInventario(Base):
    __tablename__ = "MovimientoInventario"

    idMovimiento = Column(Integer, primary_key=True)
    idProducto = Column(Integer, ForeignKey("Productos.idProducto"), nullable=False, index=True)
    tipoMovimiento = Column(String(100), nullable=False, index=True)  # puede usarse en filtros
    cantidad = Column(Integer, nullable=False)
    fechaHora = Column(DateTime, nullable=False, index=True)  # útil para ordenar/buscar
    motivo = Column(Text)
    id_Usuario = Column(Integer, ForeignKey("Usuarios.id_Usuario"), index=True)

    producto = relationship("Producto", back_populates="movimientos")
    usuario = relationship("Usuario", back_populates="movimientos")