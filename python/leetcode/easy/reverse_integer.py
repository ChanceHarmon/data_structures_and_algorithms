# Reverse Integer

# Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

# Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


# Example 1:

# Input: x = 123
# Output: 321
# Example 2:

# Input: x = -123
# Output: -321
# Example 3:

# Input: x = 120
# Output: 21
# Example 4:

# Input: x = 0
# Output: 0

# Constraints:

# -2^31 <= x <= 2^31

# Big O time: O(n) We maintain a single loop with all other conditionals being single operations.
# Big O space: O(n) We use a few variables to store the cumulative return, best case is 0 and we we are at O(1)


def reverse(x):
    if x == 0:
        return x
    x = str(x)
    new_str = ""
    for i in range(len(x) - 1, -1, -1):
        print(x[i])
        if i == len(x) - 1 and x[i] == "0":
            continue
        elif x[i] == "-":
            new_str = x[i] + new_str
        else:
            new_str += x[i]
    x = int(new_str)

    if x < pow(-2, 31) or x > pow(2, 31):
        return 0
    else:
        return x
