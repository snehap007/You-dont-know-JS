/* 
There are n gold mines along a river, and each mine i produces wi tons of gold. In order to 
collect the mined gold, we want to redistribute and consolidate it amongst exactly k mines where it
 can be picked up by trucks. We do this according to the following rules: 

1.  You can move gold between any pair of mines (i.e., i and j, where 1 <=i <=j <=n).
All the gold at some pickup mine i must either stay at mine i or be completely moved to some other mine, j.
Move w tons of gold between the mine at location xi and the mine at location xj at a cost of |xi-xj| X w.

Given n,k , and the amount of gold produced at each mine, find and print the minimum cost of 
consolidating the gold into k pickup locations according to the above conditions.


Input Format

The first line contains two space-separated integers describing the respective values of  
n(the number of mines) and k (the number of pickup locations).
Each line i of the n subsequent lines contains two space-separated integers describing the 
respective values of xi (the mine's distance from the mouth of the river) and wi (the amount of gold produced in tons) 
for mine i.

Note: It is guaranteed that the mines are will be given in order of ascending location.

Output Format

Print a single line with the minimum cost of consolidating the mined gold amongst k
 different pickup sites according to the rules stated above.

 Sample Input 0
 3 1
20 1
30 1
40 1

Sample Output 0
20

Explanation 0
We need to consolidate the gold from n=3 mines into a single pickup location (because k=1). 
The mines are all equidistant and they all produce the same amount of gold, so we just move the 
gold from the mines at locations x=20 and x=40 to the mine at x=30 for a minimal cost of 20.
*/


function mining(k, mines) {
    let maxValue = 0;
    let MineValue = 0;
    let w = 0;
    for (let i = 0; i < mines.length; i++) {
        for (let j = 1; j < mines[i].length; j++) {
            if (mines[i][j] <= maxValue) {
                w += (mines[i][j - 1] - MineValue) * mines[i][j];
                console.log(w);
            } else {
                maxValue = mines[i][j];
                MineValue = mines[i][j - 1];
            }

        }
    }
}

let k = 1;
mines = [[11, 3], [12, 2], [13, 1]]
mines1 = [[20, 1], [30, 1], [40, 1]];

mining(k, mines1);
