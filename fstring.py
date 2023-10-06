import random

d1 = {
    "eleanordesc": "child",
    "rosesdesc": "spotty cat",
    "mapledesc": "mapley cat",
    "alacadesc": "shaggy dog",

}

var1 = "variable"
f1 = 234.32425523

print(f"This is an example of a {var1} in a string")
print(f"This is an example of a formatted float number: {f1:.02f}")
print("text without f string", f1)
print("keys: ", d1.keys())
things = []

for key in d1.keys():
    things.append(key)

print(f"Type of things: ", type(things), things)
thing = random.choice(things)


print(f"{thing} is {d1[thing]}")