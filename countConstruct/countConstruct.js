function countConstruct(target, wordBank, memo = {}) {
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.substring(word.length);
      const numWays += countConstruct(suffix, wordBank, memo);
      totalCount += numWays;
    }
  }
  return memo[target] = totalCount;
};