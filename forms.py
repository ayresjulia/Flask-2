from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import InputRequired, NumberRange, ValidationError

colors = ['red', 'green', 'orange', 'blue']


class LuckyForm(FlaskForm):
    '''Form for User to add their info and get Lucky num'''

    name = StringField('Name', validators=[
                       InputRequired(message='This field is required.')])
    email = StringField('Email', validators=[
        InputRequired(message='This field is required.')])
    year = IntegerField('Year', validators=[NumberRange(
        min=1900, max=2001, message='Year must be between 1900 and 2000')])
    color = SelectField('Color', choices=[(color, color) for color in colors], validators=[
        InputRequired(message='This field is required.')])
