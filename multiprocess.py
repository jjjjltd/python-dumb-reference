from multiprocessing import Process
import time
import random

def run_process(name):
    print("Process", name, "Started")

    time.sleep(random.randint(3, 8))

    print("Process", name, "Ended")

def run_processes():
    processes = []

    for i in range(4):
        # target=function to run.  Note that tuple must contain a comma, even if only 1 entry...
        processes.append(Process(target=run_process, args=(f"Pr_{i}",)))

    for p in processes:
        p.start()

    print("All Done.")

if __name__ == "__main__":
    run_processes()