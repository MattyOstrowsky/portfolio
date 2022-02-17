from pydantic import BaseModel


class Projects(BaseModel):
    id: int
    project_name : str
    description : str
    project_link : str
    image_url: str


class MlParams(BaseModel):
    """
    gender: male = 1 female = 0
    hypertension: yes = 1
    ever_married: yes = 1
    heart_disease: yes = 1
    residence_type: urban = 1 rural = 0
    smoking_status: unknown/formerly/never_smoked/smokes
    working_type: govt job/never worked/private/self-employed/children
    avg_glucose: float
    bmi: float
    age: float
    """
    gender: int
    hypertension: int
    heart_disease: int
    ever_married: int
    residence_type: int
    smoking_status: str
    working_type: str
    avg_glucose: float
    bmi: float
    age: float
