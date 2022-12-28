
class QuizBrain:

    def __init__(self):
        self.question_number = 0
        self.score = 0
    def classyresponse(self):
        print("This is just an example of a classy response.")

    def still_has_questions(self):
        return self.question_number < len(self.question_list)

 