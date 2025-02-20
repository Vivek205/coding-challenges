# Week 21 challenge

Write a function `getPrimeFactors` which takes in a number (larger than 1) and returns an array of its prime factors.

Prime factors are the list of prime numbers that need to be multiplied in order to obtain the result.
If number is a prime itself, then you can return just the number as the only array element.

E.g. 4 is obtained by multiplying 2 and 2
12 = 2 x 2 x 3
36 = 2 x 2 x 3 x 3
100 = 2 x 2 x 5 x 5

Examples:
```
getPrimeFactors(4) // return [2, 2]
getPrimeFactors(12) // return [2, 2, 3]
getPrimeFactors(36) // return [2, 2, 3, 3]
getPrimeFactors(40) // return [2, 2, 2, 5]
getPrimeFactors(43) // return [43]
getPrimeFactors(51) // return [3, 17]
getPrimeFactors(100) // return [2, 2, 5, 5]
```


## Upload link

[Submissions are closed]

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Lars        | 25          |          | 5          | 30           |
| 2.    | Peter-Paul  | 18          | 5        |            | 23           |
| 3.    | Irene       | 15          |          |            | 15           |
|       | Jan Bart    | 15          |          |            | 15           |
| 5.    | Aman        | 10          |          |            | 10           |
| 6.    | Lee         | 8           |          |            | 8            |
|       | Dexter      | 8           |          |            | 8            |
| 8.    | Tim         | 4           |          |            | 4            |
| 9.    | Patrick     | 2           |          |            | 2            |
| 10.   | Gift        | 1           |          |            | 1            |
|       | Stef        | 1           |          |            | 1            |

### Jury vote

#### Harijs

1. lars1 - well structured and readable
2. tim1 - using Uint8Array
3. mettin1 - admission of guilt for stealing :D

### Screenshot

![2021 Week 21 podium](./podium.png)

![2021 Week 21 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 02/06/2021, 12:08:29
EVALUATING CHALLENGE:               2021/w21
FOUND 22 SOLUTIONS:                 aman1.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, gift1.js, gift2.js, gift3.js, irene1.js, jmulders1.js,
                          joppe1.js, lars1.js, lars2.js, lars3.js, lee1.js, mettin1.js, patrick1.js, peter-paul1.js, peter-paul2.js,
                          peter-paul21.js, stef1.js, tim1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 100 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   02/06/2021, 13:39:45
DURATION:                           1 hour, 31 minutes, 15.956 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤═══════════╤═══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total     │ Best run  │ Best compile │ Size ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 1     │ 25     │ lars3       │ 0.042ms   │ 0.025ms   │ 0.018ms      │ 1965 ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 2     │ 18     │ peter-paul2 │ 0.049ms   │ 0.041ms   │ 0.009ms      │ 1785 ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 3     │ 15     │ irene1      │ 0.100ms   │ 0.092ms   │ 0.008ms      │ 496  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 15     │ jmulders1   │ 0.101ms   │ 0.093ms   │ 0.008ms      │ 443  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 5     │ 10     │ aman1       │ 0.163ms   │ 0.154ms   │ 0.009ms      │ 1323 ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 6     │ 8      │ lee1        │ 131.217ms │ 131.206ms │ 0.012ms      │ 499  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 8      │ dexter1     │ 131.225ms │ 131.212ms │ 0.013ms      │ 305  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 8     │ 4      │ tim1        │ 140.488ms │ 140.427ms │ 0.061ms      │ 1144 ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 9     │ 2      │ patrick1    │ 246.261ms │ 246.247ms │ 0.015ms      │ 247  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 10    │ 1      │ gift2       │ 263.361ms │ 263.321ms │ 0.040ms      │ 313  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 1      │ stef1       │ 264.297ms │ 264.281ms │ 0.016ms      │ 250  ║
╟───────┼────────┼─────────────┼───────────┼───────────┼──────────────┼──────╢
║ 12    │        │ joppe1      │ 454.189ms │ 454.159ms │ 0.030ms      │ 862  ║
╚═══════╧════════╧═════════════╧═══════════╧═══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              lars2.js, lars1.js, peter-paul1.js, dexter2.js, dexter3.js, gift3.js, gift1.js, dexter4.js

ONLY CODEGOLF SOLUTIONS:            mettin1.js, peter-paul21.js

CODEGOLF AWARD:                     peter-paul21.js with 69 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬───────────────────┬──────────────────────┬──────────────────────┬──────────────────────┬──────┬────────────────┬─────────────────────┬──────────────┬────────┬────────────┬──────┐
│ (index) │     solution      │        total         │       bestRun        │     bestCompile      │ size │    compiled    │   validationTime    │ onlyCodegolf │ failed │ failReason │ runs │
├─────────┼───────────────────┼──────────────────────┼──────────────────────┼──────────────────────┼──────┼────────────────┼─────────────────────┼──────────────┼────────┼────────────┼──────┤
│    0    │    'lars3.js'     │ 0.04204400023445487  │ 0.024544000159949064 │ 0.017500000074505806 │ 1965 │ 'successfully' │ 0.49118999999700463 │    false     │ false  │    null    │ 1850 │
│    1    │ 'peter-paul2.js'  │ 0.049266000278294086 │ 0.040572999976575375 │ 0.008693000301718712 │ 1785 │ 'successfully' │ 1.1385809999992489  │    false     │ false  │    null    │ 1850 │
│    2    │    'lars2.js'     │ 0.06935599911957979  │ 0.05146599933505058  │ 0.01788999978452921  │ 1707 │ 'successfully' │  5.584493000002112  │    false     │ false  │    null    │ 1850 │
│    3    │    'irene1.js'    │ 0.10039100050926208  │ 0.09233000036329031  │ 0.008061000145971775 │ 496  │ 'successfully' │  2.961808000000019  │    false     │ false  │    null    │ 1850 │
│    4    │  'jmulders1.js'   │  0.1009669997729361  │ 0.09278899990022182  │ 0.008177999872714281 │ 443  │ 'successfully' │  2.271323000000848  │    false     │ false  │    null    │ 1850 │
│    5    │    'aman1.js'     │ 0.16282999981194735  │ 0.15422100014984608  │ 0.008608999662101269 │ 1323 │ 'successfully' │ 1.8251299999992625  │    false     │ false  │    null    │ 1850 │
│    6    │    'lars1.js'     │  0.2134559997357428  │ 0.20487000001594424  │ 0.008585999719798565 │ 970  │ 'successfully' │ 24.956390999999712  │    false     │ false  │    null    │ 1850 │
│    7    │ 'peter-paul1.js'  │  4.086765000130981   │  4.077833999879658   │ 0.008931000251322985 │ 119  │ 'successfully' │ 30.444510999997874  │    false     │ false  │    null    │ 1850 │
│    8    │     'lee1.js'     │  131.21749799977988  │  131.20567800011486  │ 0.011819999665021896 │ 499  │ 'successfully' │ 155.32784600000014  │    false     │ false  │    null    │ 1850 │
│    9    │   'dexter1.js'    │  131.22515699989162  │  131.21208299999125  │ 0.013073999900370836 │ 305  │ 'successfully' │ 145.25732400000015  │    false     │ false  │    null    │ 1850 │
│   10    │     'tim1.js'     │  140.48835999984294  │  140.4271970000118   │ 0.06116299983114004  │ 1144 │ 'successfully' │ 124.83267800000613  │    false     │ false  │    null    │ 1850 │
│   11    │   'dexter2.js'    │  175.40077600022778  │  175.38809299981222  │ 0.012683000415563583 │  91  │ 'successfully' │ 249.34698500000013  │    false     │ false  │    null    │ 1850 │
│   12    │   'dexter3.js'    │  175.52326299995184  │  175.51084899995476  │ 0.012413999997079372 │  90  │ 'successfully' │ 196.68757799999912  │    false     │ false  │    null    │ 1850 │
│   13    │   'patrick1.js'   │  246.26136599981692  │  246.24655699997675  │ 0.014808999840170145 │ 247  │ 'successfully' │ 280.19939200000226  │    false     │ false  │    null    │ 1850 │
│   14    │    'gift2.js'     │  263.36052699992433  │  263.3206960000098   │ 0.03983099991455674  │ 313  │ 'successfully' │ 329.87585899999976  │    false     │ false  │    null    │ 1850 │
│   15    │    'gift3.js'     │  263.45037999976194  │  263.43465699994704  │ 0.015722999814897776 │ 286  │ 'successfully' │ 338.85413400000107  │    false     │ false  │    null    │ 1850 │
│   16    │    'gift1.js'     │  263.9098589993955   │  263.86080200001015  │  0.0490569993853569  │ 312  │ 'successfully' │ 324.58050600000206  │    false     │ false  │    null    │ 1850 │
│   17    │    'stef1.js'     │  264.29687999992166  │  264.2806260000216   │ 0.016253999900072813 │ 250  │ 'successfully' │  295.3370649999997  │    false     │ false  │    null    │ 1850 │
│   18    │   'dexter4.js'    │  300.01355200028047  │  299.9992659999989   │ 0.014286000281572342 │  84  │ 'successfully' │  376.1657059999998  │    false     │ false  │    null    │ 1850 │
│   19    │    'joppe1.js'    │   454.189288000387   │  454.15890399999626  │ 0.03038400039076805  │ 862  │ 'successfully' │ 503.33719100000235  │    false     │ false  │    null    │ 1850 │
│   20    │   'mettin1.js'    │         null         │         null         │         null         │ 696  │ 'successfully' │ 1774.6777480000019  │     true     │ false  │    null    │  0   │
│   21    │ 'peter-paul21.js' │         null         │         null         │         null         │  69  │ 'successfully' │ 49915.748568999996  │     true     │ false  │    null    │  0   │
└─────────┴───────────────────┴──────────────────────┴──────────────────────┴──────────────────────┴──────┴────────────────┴─────────────────────┴──────────────┴────────┴────────────┴──────┘
```