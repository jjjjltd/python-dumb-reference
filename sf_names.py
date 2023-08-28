import os
import pprint
import pandas as pd
import operator
import math
import random
# Create a list of Sci Fi "Character" names based on the probability of letters appearing in places (first, second...) in words.

# Note:  Starting with a Words List as a constant.  Ultimately, we will want to be able to:
# 1.  Be able to input this list with cut and paste, or some such... or
# 2.  Start from a list of probability of letters in certain places.


# Default word sample.
WORDS_SAMPLE = "The quick brown fox jumps over the lazy dog z"  # Note: single character at the end aids testing.
# Initialisation values for number of words in sample_words
word_count = 0
# String of words separated into list
words_list = []
# Dictionary of all letters in word sample
letters_dict = {}
# Dictionary of maximum word lengths ()
word_len = {}
# Dictionary of how often each letter appears at posn in word.
posd = {}
letters_string = "abcdefghijklmnopqrstuvwxyz"
vowels_string = "aeiou"
total_letters = 0

class Letter_Stat(): 
    
    word_count = 0
    longest_word = 0
    total_letters = 0
    positions = {}
    probabilities = {}
    pos_probs = {}

    probability_high = 0.8
    probability_medium = 0.4

    high_prob_list_len = []
    med_prob_list_len = []

    



    def __init__(self, letter, letter_count=0, letter_pos={}) :
        self.letter = letter
        self.letter_count = letter_count
        self.letter_pos = letter_pos

class Our_Words():

    high_prob_list = []
    med_prob_list = []
    low_prob_list = []

    priority = ['h', 'h', 'h', 'm', 'm', 'l']

    max_word_len = 10
    min_word_len = 3
    min_vowels = 2
    words_required = 10

    def __init__(self, our_word_len):
        self.our_word_len = our_word_len

    def words(self, words=[]):
        self.words.append(words)


def get_words():
    """  Prompt for list of words, or go with default WORDS_SAMPLE  """
    words_sample = input("Provide list of words [press Enter]: ")

    if len(words_sample) == 0:
        words_sample = WORDS_SAMPLE
    return words_sample

def init_word_len(word_len):
    """ Initalise word_len per letter in dictionary.  """
    for letter in words_sample:
        word_len[letter.lower()] = 0
    
    return word_len

def init_letters_dict(letters_string):
    """  Initalise dictionary of letters to capture counts of letters per letter"""    
    full_dict = {}
    init_val = 0
    for letter in letters_string:
        # Initialise start value
        letters_dict[letter] = init_val

def clear_posd(posd):
    for i in range(1, len(posd)):
        posinst = f"{pos_string(i)}"
        posd[posinst] = 0

def pos_count(word_len, word_list):
    """  Initialise dictionary of how often letter appears in each word."""
    init_val = 0

    for k in word_len.keys():
        posd = init_pos_count(word_len)
        for word in word_list:    
            pos = 0
            for letter in word:
                if letter.lower() in letters_string:
                    pos += 1
                    if letter.lower() == k:
                        posinst = f"{pos_string(pos)}"
                        posd[posinst] += 1

        
        letters_dict[f"{k}positions"] = posd

    return letters_dict

def letter_count(words_list):
    """ Return a dictionary of letter_dict containing count of each letter instances """
    for word in words_list:
        n = 0
        for letter in word:
            n+=1
            if letter.isalpha():
                letters_dict[letter.lower()] += 1
    
    return letters_dict

def pos_string(n):
    """ Return literal position string e.g. position1 = pos1, position2 = pos2...  """
    return f"pos{n}"

def max_word_length(words_list):
    """ Return maximum word length, and maximum word length per letter.  """
    most_letters = 0
    total_letters = 0
 
    for word in words_list:
        total_letters = total_letters + len(word)
        if len(word) > most_letters:
            most_letters = len(word)
            # lword = word

        for letter in letters_string:

            if letter in word and letter.isalpha(): 
                if len(word) > word_len[letter.lower()]:
                    word_len[letter.lower()] = len(word)

    # os.system('cls')
    # print(f"The longest word is {lword} at {most_letters} letters.  Total letters: {total_letters}")
    # print(f"Only connect, what famous quote is this: {word_len}")


    return most_letters, total_letters 

def init_pos_count(word_len):
    posd = {}
    init_val = 0
    i = 0
    for k, v in word_len.items():
        i += 1
        posinst = f"{pos_string(i)}"
        posd[posinst] = init_val

    
    return posd                   

def dict_tidy(letters_dict, word_len):

    # Tidy up position records with zero values.
    for i in range(1, len(word_len.keys())+1):
        posinst = pos_string(i)
        for k in word_len.keys():
            if letters_dict[f"{k}positions"][posinst] == 0:
                del letters_dict[f"{k}positions"][posinst]
    
    # Tidy up missing letters
    for letter in letters_string:
        if letters_dict[letter] == 0:
            del letters_dict[letter]

    return letters_dict

def build_stats(letters_dict):
    Letter_Stat.word_count = word_count
    Letter_Stat.longest_word = max_word_len
    Letter_Stat.total_letters = total_letters

    all_stats = {k: Letter_Stat(k, v, letters_dict[f"{k}positions"]) for k, v in letters_dict.items() if len(k) == 1}

    return all_stats

def print_stats(all_stats):
    probability = {}
    print(f"Word sample: {words_sample}\n\n")
    for k, v in letters_dict.items():
        if k in letters_string:
            if len(k) == 1:
                pct_letters = round((v/Letter_Stat.total_letters) * 100, 2)
                # print(f"For {k}:  {v} letters in string ({pct_letters}%). In positions {all_stats[k].letter_pos}")
                pospctmax = 0

            # This looks complicated, but it's not too bad...
            # 1.  Loop through the number of letters in the longerst word
            # 2.  Look for that letter in each position (posltr)
            # 3.  If found: calculate percentage probability of that letter against all letters in that position (pospct)
            for i in range(1, Letter_Stat.longest_word+1):
                posinst = pos_string(i)
                try:
                    posltr = all_stats[k].letter_pos[posinst]
                except KeyError:
                    posltr = 0

                if posltr > 0:
                    pospct = (posltr/Letter_Stat.positions[f"{i}"]) * 100
                else:
                    pospct = 0
                
                if pospct > 0:
                    # print(f"Probability of {k} in position {i} = {pospct:.2f}%")
                    Letter_Stat.positions[f"{k}{i}"] = pospct
                
                if pospct > pospctmax:
                    pospctmax = pospct

                probability[f"{k}max"] = pospctmax

                
    Letter_Stat.probabilities = probability

def get_stats_per_letter(all_stats):
    positions = {}

     # We do this loop again below, but this is a light weight initialisation run.  Lazy, I know.
    for i in range(1, Letter_Stat.longest_word+1):
        positions[f"{i}"] = 0

    # print("Letter Stats")
    for k in letters_dict.keys():
        if len(k) == 1:
            # print(f"{k}:  {all_stats[k].letter_pos}")
    
            for i in range(1, Letter_Stat.longest_word+1):
                posinst = pos_string(i)

                try:
                    positions[f"{i}"] += all_stats[k].letter_pos[posinst]
                except KeyError:
                    pass

            # if k == "o":
            #     print(f"{all_stats[k].letter_pos}")
            #     positions[f"{k}"] = all_stats[k].letter_pos
    Letter_Stat.positions = positions
    # e.g. Letter_Stat.position['3']
    return positions

                # Important Note:  all_stats['a'].letter_pos['pos2']

def save_to_df():
    df = pd.DataFrame(letters_dict)
    df.to_csv("sf_dataframe.csv")

def calc_prob_lists():
    for k, v in Letter_Stat.positions.items():
        letter = k[0]
        if len(k) == 2 and letter in letters_string:
            for i in range(1, Letter_Stat.longest_word):
                if v >= Letter_Stat.probabilities[f"{letter}max"] * Letter_Stat.probability_high:
                    Letter_Stat.high_prob_list[f"{i}"] =letter
                elif v >= Letter_Stat.probabilities[f"{letter}max"] * Letter_Stat.probability_medium:
                    Letter_Stat.med_prob_list[f"{i}"] = letter
                else:
                    Letter_Stat.low_prob_list[f"{i}"] = letter

def prob_in_pos():
    # pp = pprint.PrettyPrinter(indent=4)
    # pp.pprint(Letter_Stat.positions.items())
    vsum = 0
    for i in range(1, Letter_Stat.longest_word):
        for k, v in Letter_Stat.positions.items():
            if k[0] in letters_dict:
                if int(k[1]) == i:
                    vsum += v
                    try:
                        Letter_Stat.pos_probs[f"{i}"] = Letter_Stat.pos_probs[f"{i}"] | {f"{k[0]}":int(v)}
                    except KeyError:
                        Letter_Stat.pos_probs[f"{i}"] = {f"{k[0]}":int(v)}


def sort_by_position_with_print():
    os.system('cls')
    print(Letter_Stat.pos_probs['1'])
    Letter_Stat.pos_probs['1'] = dict(sorted(Letter_Stat.pos_probs['1'].items(), key=operator.itemgetter(1), reverse=True))
    print(Letter_Stat.pos_probs['1'])
    print(len(Letter_Stat.pos_probs['1'].keys()))

def sort_by_position():
    i = 0
    for k in Letter_Stat.pos_probs.keys():
        Letter_Stat.pos_probs[k] = dict(sorted(Letter_Stat.pos_probs[k].items(), key=operator.itemgetter(1), reverse=True))
        
        keylen = len(Letter_Stat.pos_probs[k].keys())
        Letter_Stat.high_prob_list_len.append(math.floor(keylen - (keylen) * Letter_Stat.probability_high))
        Letter_Stat.med_prob_list_len.append(math.floor(keylen - (keylen) * Letter_Stat.probability_medium))
        # print(f"list length {k}, key length{keylen}, high: {high_prob_list_len}, medium {med_prob_list_len}")

        i += 1
        for k, v in Letter_Stat.pos_probs[k].items():
            if i <= Letter_Stat.high_prob_list_len[i-1]:
                Letter_Stat.high_prob_list.append(f"{i},{k}")
            elif i <= Letter_Stat.med_prob_list_len[i-1]:
                Letter_Stat.med_prob_list.append(f"{i},{k}")
            else:
                Letter_Stat.low_prob_list.append(f"{i},{k}")
            
def gen_words():
    
    our_word_len = random.randint(Letter_Stat.min_word_len, Letter_Stat.max_word_len)
    our_words = Our_Words(our_word_len)
    itemno = 0
    g_word = []
    for l in range(1, our_word_len):
        for item in Letter_Stat.high_prob_list:
            breakdown = item.split(",")
            pos_in_string = int(breakdown[0])
            itemno += 1
            if pos_in_string == l: 

                # We hit a problem is our random word length if greater than longest word in string...
                if itemno <= len(Letter_Stat.high_prob_list_len)-1:
                    chkindex = itemno
                else:
                    chkindex = random.randint(0, len(Letter_Stat.med_prob_list_len)-1)

                if itemno <= Letter_Stat.high_prob_list_len[chkindex]:
                    Our_Words.our_high_list.append(breakdown[1])
                elif itemno <= Letter_Stat.med_prob_list_len[chkindex]:
                    Our_Words.our_med_list.append(breakdown[1])
                else:
                    Our_Words.our_low_list.append(breakdown[1])

        
        list_choice = random.choice(Our_Words.priority)
        if list_choice == "h":
            letter_choice = random.choice(Our_Words.our_high_list)
        elif list_choice == "m":
            letter_choice = random.choice(Our_Words.our_med_list)
        else:
            letter_choice = random.choice(Our_Words.our_low_list)

        g_word.append(letter_choice)

    sword=""
    for i in g_word:
        sword+=i

    print(sword)
        # print(f"m: {Our_Words.our_med_list}")
        # print(f"l: {Our_Words.our_low_list}")

words_sample = get_words()

words_list = words_sample.split(" ")
word_count = len(words_list) 

word_len = init_word_len(word_len)
max_word_len, total_letters = max_word_length(words_list)
init_letters_dict(letters_string)
letter_count(words_list)


letters_dict = pos_count(word_len, words_list)

# os.system('cls')
pp = pprint.PrettyPrinter(indent=4)

letters_dict = dict_tidy(letters_dict, word_len)

all_stats = build_stats(letters_dict)
positions = get_stats_per_letter(all_stats)
print_stats(all_stats)
# print("Positions:")
# print(Letter_Stat.positions)
# print("Probabilities:")
# pp.pprint(Letter_Stat.probabilities)
# calc_prob_lists()
prob_in_pos()
sort_by_position()
# print(f"High: {Letter_Stat.high_prob_list}")
# print(f"Medium: {Letter_Stat.med_prob_list}")
# print(f"Low: {Letter_Stat.low_prob_list}")

our_word_len = random.randint(Letter_Stat.min_word_len, Letter_Stat.max_word_len)
for i in range(our_word_len):
    gen_words()