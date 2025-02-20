# Week 22 challenge

Write a function `getStandings` which takes in an array of soccer matches. Each match has 3 properties: `home`, `away` & `result`.
Home and away are the team names, result is a string in the format `homeGoals-awayGoals`.
The result is a list of teams where the team with the most points is at the top.
The list is odered first by points. If they're equal then by goal difference. Finally by team name.

For example: `{"away":"Barcelona","result":"2-2","home":"Real Madrid"}`

In this example both teams receive 1 point because of a draw.
A winning team receives *3* points and a loser get *0* points.

The result is an array containing objects with the properties: `team`, `matches`, `points`, `goals`.
Goals contains: `for`, `against`, `difference`.


**Note:**
- The order of properies in a match is not always the same.
- The input arrays should not be mutated!
- The result should always be a new array.

## Examples

Input of:
```
[
    { home: "Barcelona", away: "Real Madrid", result: "3-1" },
    { away: "Barcelona", home: "Real Madrid", result: "1-1" },
    { away: "Atletico Madrid", result: "1-0", home: "Villareal" }
]
```

Results in:
```
[
    {
        team: "Barcelona",
        matches: 2,
        points: 4,
        goals: { for: 4, against: 2, difference: 2 }
    },
    {
        team: "Villareal",
        matches: 1,
        points: 3,
        goals: { for: 1, against: 0, difference: 1 }
    },
    {
        team: "Real Madrid",
        matches: 2,
        points: 1,
        goals: { for: 2, against: 4, difference: -2 }
    },
    {
        team: "Atletico Madrid",
        matches: 1,
        points: 0,
        goals: { for: 0, against: 1, difference: -1 }
    }
]
```
Input of

```
[
    { home: "PSV", away: "Ajax", result: "0-0" },
    { away: "PSV", home: "Ajax", result: "0-0" }
]
```
Results in:
```
[
    {
        team: "Ajax",
        matches: 2,
        points: 2,
        goals: { for: 0, against: 0, difference: 0 }
    },
    {
        team: "PSV",
        matches: 2,
        points: 2,
        goals: { for: 0, against: 0, difference: 0 }
    }
]
```

## Author

Tim (+ 10 pts)

## Upload link

[Submissions are closed]

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Aman        | 25          |          |            | 25           |
| 2.    | Lars        | 18          |          | 5          | 23           |
|       | Irene       | 18          |          |            | 18           |
| 4.    | Peter-Paul  | 12          | 5        |            | 17           |
| 5.    | Mettin      | 12          |          |            | 12           |
|       | Lee         | 12          |          |            | 12           |
| 7.    | Jan Bart    | 6           |          |            | 6            |
| 8.    | Joppe       | 4           |          |            | 4            |
|       | Dexter      | 4           |          |            | 4            |

### Jury vote

#### Israel

(this week I went only for readability):

1. aman2.js
2. lee3.js
3. lars1.js

#### Harijs

1. lars2 - own sorting implementation
2. peterPaul2/irene2 - readable and well structured

### Screenshot

![2021 Week 22 podium](./podium.png)

![2021 Week 22 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 09/06/2021, 12:09:18
EVALUATING CHALLENGE:               2021/w22
FOUND 22 SOLUTIONS:                 aman1.js, aman2.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, dexter5.js, dexter6.js, irene1.js, irene2.js,
                          jmulders1.js, joppe1.js, joppe2.js, lars1.js, lars2.js, lee1.js, lee2.js, lee3.js, mettin1.js, mettin21.js,
                          peter-paul1.js, peter-paul2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 3000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   09/06/2021, 13:39:29
DURATION:                           1 hour, 30 minutes, 10.567 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ aman1       │ 15.410ms │ 15.396ms │ 0.014ms      │ 1584 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ lars2       │ 18.594ms │ 18.578ms │ 0.016ms      │ 1712 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 18     │ irene2      │ 19.492ms │ 19.476ms │ 0.016ms      │ 1603 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ mettin21    │ 20.652ms │ 20.636ms │ 0.016ms      │ 1898 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ lee3        │ 20.814ms │ 20.799ms │ 0.015ms      │ 1710 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ peter-paul2 │ 20.908ms │ 20.893ms │ 0.015ms      │ 1032 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 7     │ 6      │ jmulders1   │ 34.102ms │ 34.087ms │ 0.015ms      │ 1196 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ joppe2      │ 45.518ms │ 45.501ms │ 0.017ms      │ 1738 ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 4      │ dexter4     │ 45.682ms │ 45.666ms │ 0.016ms      │ 931  ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              aman2.js, lee2.js, lars1.js, irene1.js, dexter1.js, lee1.js, peter-paul1.js, dexter6.js, dexter5.js, dexter3.js,
                          joppe1.js, dexter2.js

CODEGOLF AWARD:                     peter-paul1.js with 348 bytes

FAILED SOLUTIONS:                   mettin1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬──────────────────────┬──────────────┬────────┬───────────────────────┬──────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │    validationTime    │ onlyCodegolf │ failed │      failReason       │ runs │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼──────────────────────┼──────────────┼────────┼───────────────────────┼──────┤
│    0    │    'aman1.js'    │ 15.410252999980003 │ 15.396451000124216 │ 0.013801999855786562 │ 1584 │ 'successfully' │  171.0793860000049   │    false     │ false  │         null          │ 3600 │
│    1    │    'aman2.js'    │ 16.07622199971229  │ 16.06089700013399  │ 0.015324999578297138 │ 1912 │ 'successfully' │  147.55337799999688  │    false     │ false  │         null          │ 3600 │
│    2    │    'lars2.js'    │ 18.59379999974044  │ 18.57824200001778  │ 0.015557999722659588 │ 1712 │ 'successfully' │  134.1348450000005   │    false     │ false  │         null          │ 3600 │
│    3    │   'irene2.js'    │ 19.492189000360668 │ 19.476147999987006 │ 0.016041000373661518 │ 1603 │ 'successfully' │  131.11857299999974  │    false     │ false  │         null          │ 3600 │
│    4    │  'mettin21.js'   │ 20.652304000541335 │  20.6363629999978  │ 0.015941000543534756 │ 1898 │ 'successfully' │  153.67847799999436  │    false     │ false  │         null          │ 3600 │
│    5    │    'lee3.js'     │ 20.814305000472814 │ 20.798995000310242 │ 0.015310000162571669 │ 1710 │ 'successfully' │  148.45874300000287  │    false     │ false  │         null          │ 3600 │
│    6    │ 'peter-paul2.js' │ 20.908007000252837 │ 20.892928999994183 │ 0.015078000258654356 │ 1032 │ 'successfully' │  199.03390000000218  │    false     │ false  │         null          │ 3600 │
│    7    │    'lee2.js'     │ 21.545094000408426 │ 21.528941000113264 │  0.0161530002951622  │ 1911 │ 'successfully' │  148.60580100000516  │    false     │ false  │         null          │ 3600 │
│    8    │    'lars1.js'    │ 23.458300999365747 │ 23.44318599998951  │ 0.015114999376237392 │ 1973 │ 'successfully' │  152.76390099999844  │    false     │ false  │         null          │ 3600 │
│    9    │  'jmulders1.js'  │ 34.102250999887474 │ 34.08682600001339  │ 0.015424999874085188 │ 1196 │ 'successfully' │  181.01426499999798  │    false     │ false  │         null          │ 3600 │
│   10    │   'irene1.js'    │ 35.85000999982003  │ 35.833271999959834 │ 0.016737999860197306 │ 1635 │ 'successfully' │  143.52679599999828  │    false     │ false  │         null          │ 3600 │
│   11    │   'joppe2.js'    │ 45.51790400070604  │ 45.50118000002112  │ 0.016724000684916973 │ 1738 │ 'successfully' │  210.83725199999753  │    false     │ false  │         null          │ 3600 │
│   12    │   'dexter4.js'   │ 45.681507000583224 │ 45.66555799997877  │ 0.015949000604450703 │ 931  │ 'successfully' │  207.2919699999984   │    false     │ false  │         null          │ 3600 │
│   13    │   'dexter1.js'   │ 46.15280099969823  │ 46.136901999940164 │ 0.015898999758064747 │ 898  │ 'successfully' │  213.6480190000002   │    false     │ false  │         null          │ 3600 │
│   14    │    'lee1.js'     │ 49.41283800039673  │ 49.397498000005726 │ 0.01534000039100647  │ 1895 │ 'successfully' │  262.9913129999986   │    false     │ false  │         null          │ 3600 │
│   15    │ 'peter-paul1.js' │ 52.08879400033038  │ 52.07514299999457  │ 0.013651000335812569 │ 348  │ 'successfully' │  382.78954499999963  │    false     │ false  │         null          │ 3600 │
│   16    │   'dexter6.js'   │ 52.95802399981767  │ 52.94160000002012  │ 0.016423999797552824 │ 927  │ 'successfully' │  216.9910880000025   │    false     │ false  │         null          │ 3600 │
│   17    │   'dexter5.js'   │ 55.38728200085461  │ 55.371188000775874 │ 0.016094000078737736 │ 911  │ 'successfully' │  305.40450299999793  │    false     │ false  │         null          │ 3600 │
│   18    │   'dexter3.js'   │ 64.75413199933246  │ 64.73963299999014  │ 0.01449899934232235  │ 388  │ 'successfully' │  303.41234700000496  │    false     │ false  │         null          │ 3600 │
│   19    │   'joppe1.js'    │ 74.47629499994218  │ 74.45252800034359  │ 0.02376699959859252  │ 1895 │ 'successfully' │  226.68642499999987  │    false     │ false  │         null          │ 3600 │
│   20    │   'dexter2.js'   │ 623.9393670004793  │ 623.9210250000469  │ 0.01834200043231249  │ 386  │ 'successfully' │  964.6290079999962   │    false     │ false  │         null          │ 3600 │
│   21    │   'mettin1.js'   │        null        │        null        │         null         │ 2099 │ 'successfully' │ 0.016433999997389037 │    false     │  true  │ 'Exceeded 2048 bytes' │  0   │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴──────────────────────┴──────────────┴────────┴───────────────────────┴──────┘
```