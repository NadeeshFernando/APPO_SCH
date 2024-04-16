import pickle
import pandas as pd
import streamlit as st
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
import sklearn.metrics as sm
from sklearn.metrics import accuracy_score
import seaborn as sb
import matplotlib.pyplot as plt

# Load the trained model
#model = pickle.load(open(r'C:\Users\nadeesh.fe\Computation Intelligence\Predict_health_outcomes_of_horse.pkl', 'rb'))
#-----------------

file_path=('D:\Campus\ICBT_COMPUTER\FINAL_PROJECT\Diabetes Prediction using machine learning-FINAL PROJECT\Project\diabetes.csv')
diabetes_data=pd.read_csv(file_path)
X=diabetes_data.drop(columns='Outcome',axis=1)
Y=diabetes_data['Outcome']
X_train,X_test,Y_train,Y_test=train_test_split(X,Y,test_size=0.2,stratify=Y,random_state=2)
model = LogisticRegression()
model.fit(X_train, Y_train)

#--------------


Pregnancies = st.number_input('Pregnancies')
Glucose = st.number_input('Glucose')
BloodPressure = st.number_input('BloodPressure')
SkinThickness = st.number_input('SkinThickness')
Insulin = st.number_input('Insulin')
BMI = st.number_input('BMI')
DiabetesPedigreeFunction = st.number_input('DiabetesPedigreeFunction')
Age = st.number_input('Age')



if st.button('Predict'):
    # Create DataFrame from user inputs
    data = {
     'Pregnancies':[Pregnancies],
     'Glucose':[Glucose],
     'BloodPressure':[BloodPressure],
     'SkinThickness':[SkinThickness],
     'Insulin':[Insulin],
     'BMI':[BMI],
     'DiabetesPedigreeFunction':[DiabetesPedigreeFunction],
     'Age':[Age]
    }

    predictions_test = model.predict(pd.DataFrame(data))

    # Display prediction
    if predictions_test == 0:
        st.write('The horse is likely to  die.')
    elif predictions_test == 1:
        st.write('The horse is likely euthanized.')
    elif predictions_test == 2:
        st.write('The horse is likely lived.')
    else:
        st.write('Prediction not available.')
