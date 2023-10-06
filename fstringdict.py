import random
d1 = {
    "eleanor": {"eleanordesc": "child", "eleanorage": 15},
    "roses": {"rosesdesc": "spotty cat", "rosesage": 6},
    "maple": {"mapledesc": "mapley cat", "mapleage": "roses age + 3 minutes"},
    "alaca": {"alacadesc": "shaggy dog", "alacaage": "senile"}
}
things = []
for key in d1.keys():
    things.append(key)
thing = random.choice(things)
print(f"{thing} is a {d1[thing][f'{thing}desc']}, aged: {d1[thing][f'{thing}age']}")