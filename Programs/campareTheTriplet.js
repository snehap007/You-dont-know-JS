/* Problem
Alice and Bob each created one problem for HackerRank.
 A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: 
 problem clarity, originality, and difficulty.

We define the rating for Alice's challenge to be the triplet a=(a[0],a[1],a[2]), and the rating for Bob's 
challenge to be the triplet b=(b[0],b[1],b[2]). 

Your task is to find their comparison points by comparing a[0] with b[0]. a[1] with b[1] and a[2] with b[2].

if a[i] > b[i], then alice is awarded 1 point.
if a[i] < b[i], then Bob is awarded  1 point.
if a[i] = b[i], then niether person receives a award.

camparison points is the total points a person earned.
 
Given a and b, determine their respective camparison points.

For Example : a = [1,2,3] and b = [3,2,1]. For elements 0, Bob is awarded a point beacause a[0] < b[0].
For equal example a[1] and b[1], no points are earned. finally, for elements 2, a[2] > b[2] so alice recived a
point. you returned array would be [1,1] with Alice's score fist and Bob's second.

Finction Description:
Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.

compareTriplets has the following parameter(s):

a: an array of integers representing Alice's challenge rating
b: an array of integers representing Bob's challenge rating

Input Format :
The first line contains 3 space-seprated integers, a[0], a[1] and a[2], , describing the respective values in triplet a.
The second line contains 3 space-separated integers, b[0], b[1], and b[2], describing the respective values in triplet b.

Constraints:
1 <= a[i] <= 100
1 <= b[i] <= 100

Output Format:
Return an array of two integers denoting the respective comparison points earned by Alice and Bob.

Sample Input 0
5 6 7
3 6 10

Sample Output 0
1 1

*/

// Solution

function compareTriplets(a, b) {
    let aliceAwardedCount = 0;
    let bobAwardedCount = 0;
  
    for (let i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                aliceAwardedCount++;
            } else if (a[i] < b[i]) {
                bobAwardedCount++;
            }
    }

    return [aliceAwardedCount, bobAwardedCount];
}

let a = [1, 2, 3];
let b = [3, 2, 1];
let result = compareTriplets(a, b)
console.log("comapring the triplets", result);