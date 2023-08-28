# Generate Sci-Fi Names based on spread of letters in words sample.

import os
import pprint
import pandas as pd
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
    # positions = {}
    # probabilities = {}
    # pos_probs = {}

    probability_high = 0.8
    probability_medium = 0.4

    high_prob_list_len = []
    med_prob_list_len = []

    high_prob_list = []
    med_prob_list = []
    low_prob_list = []

    max_word_len = 10
    min_word_len = 3
    min_vowels = 2
    words_required = 10

    def __init__(self, letter, letter_count=0, letter_pos={}) :
        self.letter = letter
        self.letter_count = letter_count
        self.letter_pos = letter_pos

class Our_Words():

    our_high_list = []
    our_med_list = []
    our_low_list = []
    priority = ['h', 'h', 'h', 'm', 'm', 'l']
    words_sample = ""

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

def proc_words1():
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
                
get_words()
proc_words1()

pp = pprint.PrettyPrinter(indent=4)
pp.pprint(Letter_Stat.letters_dict)   
pp.pprint(Letter_Stat.pos_dict)   
