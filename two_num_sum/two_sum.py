def twoNumberSum(array, targetSum):
    sums = {}
    for idx in range(len(array)):
        potentialMatch = targetSum - array[idx]
        if potentialMatch in sums:
            return [potentialMatch, array[idx]]
        else:
            sums[array[idx]] = True
    return []
