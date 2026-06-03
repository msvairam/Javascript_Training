Recursion is when a function calls itself to solve a smaller version of the same problem until it reaches a base case.

🔑 Every recursive function needs:

Base Case — when to STOP
Recursive Case — smaller version of problem

2️⃣ How Recursion Works — Call Stack
recursion(3)
  └─ recursion(2)
       └─ recursion(1)
            └─ recursion(0) → STOP! base case
            ← returns
       ← returns
  ← returns
← returns

🔑 Each call is pushed onto the call stack
When base case hits → stack unwinds back up!


3️⃣ Two Phases of Recursion
GOING DOWN  → recursive calls build up (call stack fills)
COMING BACK → results return up (call stack unwinds)
factorial(4)
  GOING DOWN:
  4 × factorial(3)
      3 × factorial(2)
          2 × factorial(1)
              1 × factorial(0) → return 1

  COMING BACK:
              return 1
          return 2 × 1 = 2
      return 3 × 2 = 6
  return 4 × 6 = 24 ✅

4️⃣ Recursion vs Iteration
FeatureRecursionIterationCodeCleaner, shorterLongerMemoryO(n) call stackO(1)SpeedSlightly slowerFasterUse CaseTrees, graphs, divide & conquerSimple loopsRiskStack overflowNone

5️⃣ Types of Recursion
TypeDescriptionExampleLinearOne recursive callFactorialBinaryTwo recursive callsFibonacci, BSTTailRecursive call is last operationOptimized loopsMutualA calls B, B calls AEven/Odd check

6️⃣ When to Use Recursion?
✅ Tree/Graph traversal
✅ Divide and Conquer (Merge Sort, Quick Sort)
✅ Backtracking problems
✅ Problems with recursive structure (Fibonacci, factorial)
✅ Any problem that can be broken into smaller same-shape problems