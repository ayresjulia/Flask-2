from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    """Todo Model"""

    __tablename__ = "users"

    name = db.Column(db.Text, primary_key=True)
    email = db.Column(db.Text)
    year = db.Column(db.Integer)
    color = db.Column(db.Text)

    def serialize_input(self):
        return {
            "name": self.name,
            "email": self.email,
            "year": self.year,
            "color": self.color
        }
