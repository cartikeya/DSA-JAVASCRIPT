# import numpy as np
# a = np.array([[1,2,3],[6,5,4],[7,8,9]])
# print(a[0][0])
# print(a)
n=int(input())
a=0
for i in range (n):
    if i%2==0:
        for j in range(n):
            print(a+1,end="\t")
        print("\n")
    elif i%2==1:
        for j in range(n-1,0):
            print(a+1,end="\t")      
        print("\n")