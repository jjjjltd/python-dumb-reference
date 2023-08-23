def explainwhatyouaredoing():
    """ This stuff gets imported and run in Dummy References.py """
    print("This stuff gets imported and run in Dummy References.py")

def dictprint():
    """ Populate and print a dictionary """

    thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964,
    "Eleanor": "Profoundly annoying."
    }
    print(thisdict)

def dictproc():
    """ Populate a dictionary based on input and process through """
    bidders = {}
    count = 0
    next = True
    highest = 0
    while next == True:
        name = input("What is your name?\n")
        bid = float(input("What's your bid? £"))
        bidders[name] = round(bid,2)
        count += 1
        if count > 2:
            next = False

            for bid in bidders:
                if bidders[bid] > highest:
                    name = bid
                    highest = bidders[bid]

        

            print(f"The highest bidder is: {name} who bid:  {highest}")

def listproc():
    print("Create and print a list.\n")
    list = ["mango", "strawberry", "orange", "apple", "banana"]
    print(list)

    list.append("labradoodle")
    list[1] = "peach"

    for item in list:
        # processing a bit more usefully
        print(f"item name: {item} at position: {list.index(item)} \n (which is {list.index(item)+1} without the silly array offset).")

    print(f"... and this is where you find orange:  {list.index('orange')} (with the silly offset)")

def tupleexample():
    thistuple = ("apple", "banana", "cherry", "apple", "cherry")
    print(thistuple)

    print(f"My tuple size is: {len(thistuple)}.  Type:  {type(thistuple)}.")


def classdefinition():
    from quiz_brain import QuizBrain
    qb = QuizBrain()
    qb.classyresponse()

def all_args(a, *args, **kw):
    """ Sample invocation: f.all_args(4, 7, 3, 0, x=10, y=64) """
    print("Example of how arguments are processed, *args and **kw:") 
    print(a, args, kw)

def printsubstitutionvariables():
    name = "John"
    age = 57

    print("My name is {one}, my age is {two}".format(one=name, two=age))

