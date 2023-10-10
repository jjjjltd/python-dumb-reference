import pandas as pd

data = pd.read_csv("weather_data.csv")
print(data.info())
print(data)
print("\n\n")
data_dict = {}
data_dict = data.to_dict('dict')

def loop_dict(data_dict, count):
    for k, v in data_dict.items():
        print(f"Key {k} has values {v}\n")
    
    if count == 1:
        print("End of first iteration.")
    
    data_dict["kv"] = f"Column added to dictionary"

loop_dict(data_dict, 1)
loop_dict(data_dict, 2)