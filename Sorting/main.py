# def getHCF(a, b):
#     print(a, b)
#     return b == 0 and a or getHCF(b, a % b)


# a, b = map(int, input().split())
# print(getHCF(a, b))


def func(lis):
    n = lis[0]
    for i in range(1, len(lis)):
        if (lis[i] % 100 != 0 or lis[i] % 200 != 0):
            return "NO"
        return "YES"


lis = [int(x) for x in input().split()]
print(func(lis))
