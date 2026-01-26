const addTogether = (...nums) => nums.length === 1
  ? typeof nums[0] === "number"
    ? num => addTogether(nums[0], num)
    : undefined
  : typeof nums[0] === "number" && typeof nums[1] === "number"
    ? nums[0] + nums[1]
    : undefined;