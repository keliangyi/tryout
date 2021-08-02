import sys


def get_arg():
    txt = ''
    for i in range(1,len(sys.argv)):
        txt += sys.argv[i]
    return txt

print(sys.argv,'===')
get_arg()