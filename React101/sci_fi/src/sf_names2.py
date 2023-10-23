# Generate Sci-Fi Names based on spread of letters in words sample.

import os
import pprint
import operator
import math
import random
from sf_words import WORDS_SAMPLE

class Letter_Stat(): 
    words_list = []
    letters_list = []
    alpha_string = "abcdefghijklmnopqrstuvwxyz"
    vowel_string = "aeiou"
    count_words = 0
    count_letters = 0
    count_longest_word_letters = 0
    longest_word = ""

    pos_dict = {}
    letters_dict = {}

    def __init__(self, letter, letter_count=0, letter_pos={}) :
        self.letter = letter
        self.letter_count = letter_count
        self.letter_pos = letter_pos

class Our_Words():

    priority = ['h', 'h', 'h', 'm', 'm', 'l']
    words_sample = ""
    all_probs = {}

    probability_high = 0.8
    probability_medium = 0.4

    high_prob_list = []
    med_prob_list = []
    low_prob_list = []
    final_words_list = []

    max_word_len = 10
    min_word_len = 3
    min_vowels = 2
    words_required = 10


def count_letter_incidents(l):
    """  Count how often each letter occurs in string.  """
    try:
        Letter_Stat.letters_dict[f"{l}"] += 1
    except KeyError:
        Letter_Stat.letters_dict[f"{l}"] = 1

def count_letter_in_position(l, piwt):
    """  Count how often each letter occurs in each position.  """
    try:
        Letter_Stat.letters_dict[f"{l}{piwt}"] += 1
    except KeyError:
        Letter_Stat.letters_dict[f"{l}{piwt}"] = 1

def count_letters_in(word):
    """  Count the number of letters in word (excluding any punctuation) """
    # Longest word for letter
    lwfl = 0
    for letter in word:
        if letter in Letter_Stat.alpha_string:
            lwfl += 1

    return lwfl


def track_longest_word(l, word):
    """  Capture longest word containing each letter, and record its length.  """
    try:
        lwl =  Letter_Stat.letters_dict[f"{l}lwfl"]
    except KeyError:
        lwl = 0

    if len(word) > lwl:
        Letter_Stat.letters_dict[f"{l}lwfl"] = count_letters_in(word)
        Letter_Stat.letters_dict[f"{l}lword"] = word

def distinct_letters(letter):
    """ Distinct letters in string list.  """
    if letter not in Letter_Stat.letters_list:
        Letter_Stat.letters_list.append(letter)

def get_words():
    """  Prompt for list of words, or go with default WORDS_SAMPLE  """
    Our_Words.words_sample = input("Provide list of words [press Enter]: ").lower()

    if len(Our_Words.words_sample) == 0:
        Our_Words.words_sample = WORDS_SAMPLE.lower()

def pos_string(n):
    """ Return literal position string e.g. position1 = pos1, position2 = pos2...  """
    return f"piw{n}"

def clip():
    """ Count letters in (each) position.  """
    clip = 0
    for i in range(0, Letter_Stat.count_longest_word_letters):
        for letter in Letter_Stat.letters_list:
            pos = f"{letter}piw{i+1}"
            try: 
                clip += Letter_Stat.letters_dict[pos]
            except KeyError:
                # No except action required
                pass

        Letter_Stat.pos_dict[i+1] = clip
        clip = 0
    
    calc_letter_probs()

def calc_letter_probs():
    """  Calculate probability of letter in position.  """
    for i in range(0, Letter_Stat.count_longest_word_letters):
        for letter in Letter_Stat.letters_list:

            # Get letter in position (lip) value
            try:
                lip = Letter_Stat.letters_dict[f"{letter}piw{i+1}"]
            except KeyError:
                lip = 0

            if lip > 0:
                pip = round((lip / Letter_Stat.pos_dict[i+1]) * 100, 2)
                pis = round((lip / Letter_Stat.count_letters) * 100, 2)
                Letter_Stat.letters_dict[f"{letter}pip{i+1}"] = pip
                Letter_Stat.letters_dict[f"{letter}pis"] = pis
    
    for i in range(Our_Words.words_required):
        build_prob_lists()

def vowel_counter(gen_word):
    vowel_count = 0
    for i in range(len(gen_word)):
        if gen_word[i] in Letter_Stat.vowel_string:
                vowel_count += 1

    return vowel_count

def vowel_adjust(gen_word):
    vowel_count = 0
    while vowel_count < Our_Words.min_vowels:
        letter_pos = random.randint(0, len(gen_word)-1) 
        if gen_word[letter_pos] not in Letter_Stat.vowel_string:
            gen_word[letter_pos] = random.choice(Letter_Stat.vowel_string)

        vowel_count = vowel_counter(gen_word)

    final_word = ""
    for i in range(len(gen_word)):
        final_word += gen_word[i]
    
    return final_word

    

def build_prob_lists():
    """ Build high/med/low letter lists, and select random leters to build word.  """

    # Get world length
    gen_word = []
    our_word_len = random.randint(Our_Words.min_word_len, Our_Words.max_word_len)


    for i in range(0, our_word_len):
        for k, v in Letter_Stat.letters_dict.items():
            for letter in Letter_Stat.letters_list:
            # Letter_Stat.pos_probs['1'] = dict(sorted(Letter_Stat.pos_probs['1'].items(), key=operator.itemgetter(1), reverse=True))
                if k == f"{letter}pip{i+1}": 
                    Our_Words.all_probs = Our_Words.all_probs | {f"{k[0]}":v}

        Our_Words.all_probs = dict(sorted(Our_Words.all_probs.items(), key=operator.itemgetter(1), reverse=True))
        
        # Calculate high probability list length:
        keylen =  len(Our_Words.all_probs.keys())
        hll = math.floor(keylen - (keylen * Our_Words.probability_high))
        mll = math.floor(keylen - (keylen * Our_Words.probability_medium))

        j = 0
        for k in Our_Words.all_probs:
            j += 1
            if j <= hll:
                Our_Words.high_prob_list.append(f"{k}")
            elif j <= mll:
                Our_Words.med_prob_list.append(f"{k}")
            else:
                Our_Words.low_prob_list.append(f"{k}") 

        list_choice = random.choice(Our_Words.priority)
        if list_choice == "h":
            letter_choice = random.choice(Our_Words.high_prob_list)
        elif list_choice == "m":
            letter_choice = random.choice(Our_Words.med_prob_list)
        else:
            letter_choice = random.choice(Our_Words.low_prob_list)

        gen_word.append(letter_choice)

    final_word = ""
    for i in range(len(gen_word)):
        vowel_count = vowel_counter(gen_word)
        final_word += gen_word[i]

    if vowel_count < Our_Words.min_vowels:
        final_word = vowel_adjust(gen_word)

    print(final_word)
    Our_Words.final_words_list.append(final_word.title())



def proc_words():
    Letter_Stat.words_list = Our_Words.words_sample.split(" ")
    Letter_Stat.count_words = len(Letter_Stat.words_list)

    for word in Letter_Stat.words_list:
        if len(word) > Letter_Stat.count_longest_word_letters:
            Letter_Stat.count_longest_word_letters = len(word)-1
            Letter_Stat.longest_word= word

        # Position in word
        piw = 0
        # longest word for letter
        lwfl = 0
        for l in word:

            if l in Letter_Stat.alpha_string:
                piw += 1
                piwt = ""
                Letter_Stat.count_letters += 1
                piwt = pos_string(piw)
                count_letter_incidents(l)
                count_letter_in_position(l, piwt)
                track_longest_word(l, word)
                distinct_letters(l)

    clip()

    return Our_Words.final_words_list

if __name__ == "__main__":
    get_words()
    proc_words()