def printdict():

    # Populate and print a dictionary

    thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
    }
    print(thisdict)

def dictproc():
    # Populate a dictionary based on input and process through
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


# printdict()
dictproc()