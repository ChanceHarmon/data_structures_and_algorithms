# Special Note, this is my first Python Leetcode Challenge, and can not stand that I have to use a Solution Class and self in my functions, c'mon leetcode


#   Missing Number

# Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


# Example 1:

# Input: nums = [3,0,1]
# Output: 2
# Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
# Example 2:

# Input: nums = [0,1]
# Output: 2
# Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
# Example 3:

# Input: nums = [9,6,4,2,3,5,7,0,1]
# Output: 8
# Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
# Example 4:

# Input: nums = [0]
# Output: 1
# Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.


# Constraints:

# n == nums.length
# 1 <= n <= 104
# 0 <= nums[i] <= n
# All the numbers of nums are unique.


# Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

# To Pass Leetcode you need this format

# class Solution(object):
#     def missingNumber(self, nums):
#         """
#         :type nums: List[int]
#         :rtype: int
#         """
#         nums.sort()
#         for index, value in enumerate(nums):
#             if index != value:
#                 return index
#         return len(nums)

# In reality, this is how you would whiteboard it


def missingNumber(nums):
    nums.sort()
    for index, value in enumerate(nums):
        if index != value:
            return index
    return len(nums)


# Big O time: O(n) Two seperated loops but vital ones. The sort is crucial to be able to keep space down, and if you can compare list index to another index it is constant, so only the time needed to compared i to value at i is needed.

# Big O space: O(1) By sorting the list first we don't need to have a seperate list or dictionary tracking what has been seen so far in the original list. I don't how you could do this without first sorting the list, you would have to pick one or the other for time V space on this challenge.
