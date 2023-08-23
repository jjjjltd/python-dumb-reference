import os
# Create a list of Sci Fi "Character" names based on the probability of letters appearing in places (first, second...) in words.

# Note:  Starting with a Words List as a constant.  Ultimately, we will want to be able to:
# 1.  Be able to input this list with cut and paste, or some such... or
# 2.  Start from a list of probability of letters in certain places.


WORDS_SAMPLE = "The quick brown fox jumps over the lazy dog"
words_count = 0
words_list = []
letters_dict = {}
word_len = {}
letters_string = "abcdefghijklmnopqrstuvwxyz"
total_letters = 0


longest_word_x = 0

def get_words():
    """  Prompt for list of words, or go with default WORDS_SAMPLE  """
    words_sample = input("Provide list of words [press Enter]: ")

    if len(words_sample) == 0:
        words_sample = WORDS_SAMPLE
    return words_sample

def init_word_len(word_len):
    """ Initalise word_len per letter dictionary.  """
    for letter in words_sample:
        word_len[letter.lower()] = 0
    
    return word_len

def init_letters_dict(letters_string):
    
    full_dict = {}
    init_val = 0
    for letter in letters_string:
        # Initialise start value
        letters_dict[letter] = init_val

def init_pos_count(longest_word_x):
    init_val = 0
    posd = {}
    for i in range(1, longest_word_x+1):
        # print(longest_word_x)
        posinst = f"{pos_string(i)}"
        posd[posinst] = init_val


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

def max_word_length(words_list, total_letters):
    """ Return maximum word length, and maximum word length per letter.  """
    most_letters = 0
 
    for word in words_list:
        total_letters = total_letters + len(word)
        if len(word) > most_letters:
            most_letters = len(word)
            lword = word

        for letter in letters_string:

            if letter in word and letter.isalpha(): 
                if len(word) > word_len[letter.lower()]:
                    word_len[letter.lower()] = len(word)    
                               
    os.system('cls')
    print(f"The longest word is {lword} at {most_letters} letters.  Total letters: {total_letters}")
    print(f"Only connect, what famous quote is this: {word_len}")

words_sample = get_words()

words_list = words_sample.split(" ")
words_count = len(words_list) 

word_len = init_word_len(word_len)
max_word_length(words_list, total_letters)
init_letters_dict(letters_string)
letter_count(words_list)

init_pos_count(12)