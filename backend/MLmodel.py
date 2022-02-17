from models import MlParams
import lightgbm as lgb
import numpy as np
class StrokePredictor:
    def __init__(self):
        self.xgboost_stroke = lgb.Booster(model_file='model.txt') 
    def predict(self, params: MlParams):
        print(params)

        fv = [params.gender,
              params.hypertension,
              params.ever_married,
              params.heart_disease,
              params.residence_type,
              1 if params.smoking_status == 'unknown' else 0,
              1 if params.smoking_status == 'formerly' else 0,
              1 if params.smoking_status == 'never smoked' else 0,
              1 if params.smoking_status == 'smokes' else 0,
              1 if params.working_type == 'govt job' else 0,
              1 if params.working_type == 'never worked' else 0,
              1 if params.working_type == 'private' else 0,
              1 if params.working_type == 'self-employed' else 0,
              1 if params.working_type == 'children' else 0,
              params.avg_glucose,
              params.bmi,
              int(params.age)]
        
        fv = np.array(fv).reshape((1, -1))
        print(fv)
        try:
            prediction = self.xgboost_stroke.predict(fv)
            print(prediction)
            return prediction[0]
        except Exception as e:
            print(e)
            return 'bad values!'

