f =  open("writetxt.txt", "w")
f2 = open("./data/writetxt.txt", "w")

no_of_lines = int(input("How many lines of text would you like to write?"))

print("Simple text file write example.\n")

for i in range(no_of_lines):
    f.write(f"This is line: {i+1}\n")
    f2.write(f"This is line: {i+1} in a different directory\n")

print("Writetxt.txt written to local and data directories (2 copies)")

