from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


databaseurl = "sqlite:///./database.db"


engine = create_engine(databaseurl, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()


class Users(Base):
    __tablename__ = 'users' 

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    phone = Column(String, unique=True, nullable=False) 
    email = Column(String, unique=True, nullable=False)  
    username = Column(String, unique=True, nullable=False) 
    password = Column(String, nullable=False)  
    userdir = Column(String)  
    digitalid = Column(String)

    def __init__(self, phone, username, password, name, lastname, email, userdir , digitalid):
        self.name = name
        self.lastname = lastname
        self.phone = phone
        self.email = email
        self.userdir = userdir
        self.password = password
        self.username = username
        self.digitalid = digitalid

    def __repr__(self):
        return f'<User {self.username}>'



Base.metadata.create_all(bind=engine)