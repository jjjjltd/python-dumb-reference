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
    alpha_string = "abcdefghijklmnopqrstuvwxyz"
    vowel_string = "aeiou"
    count_words = 0
    count_letters = 0
    count_longest_word_letters = 0
    longest_word = ""
    total_letters = 0
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

def get_words():
    """  Prompt for list of words, or go with default WORDS_SAMPLE  """
    Our_Words.words_sample = input("Provide list of words [press Enter]: ").lower()

    if len(Our_Words.words_sample) == 0:
        Our_Words.words_sample = WORDS_SAMPLE.lower()

def pos_string(n):
    """ Return literal position string e.g. position1 = pos1, position2 = pos2...  """
    return f"piw{n}"

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
                try:
                    Letter_Stat.letters_dict[f"{l}"] += 1
                except KeyError:
                    Letter_Stat.letters_dict[f"{l}"] = 1

                try:
                    Letter_Stat.letters_dict[f"{l}{piwt}"] += 1
                except KeyError:
                    Letter_Stat.letters_dict[f"{l}{piwt}"] = 1
                
                try:
                    lwl =  Letter_Stat.letters_dict[f"{l}lwfl"]
                except KeyError:
                    lwl = 0

                if len(word) > lwl:
                    Letter_Stat.letters_dict[f"{l}lwfl"] = len(word)-1
                    Letter_Stat.letters_dict[f"{l}lword"] = word




get_words()
proc_words1()
print(Letter_Stat.letters_dict)      