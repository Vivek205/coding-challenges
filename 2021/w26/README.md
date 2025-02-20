# Week 26 challenge

With this week's challenge you need to create `permutateMe` function, which takes in a string and returns all possible permutations of its' characters;
There should be no duplicates.

Since the permutation count grows exponentially, the string will not be longer than 7 characters.

*Note: The order of the permutations does not matter.
If the connect portal gives you an error based on it, please use the google form for that solution.*

Examples:
```
permutateMe('ab') // returns ["ab", "ba"]
permutateMe('abc') // returns ["abc", "acb", "bac", "bca", "cab", "cba"]
permutateMe('aac') // returns ["aac", "aca", "caa"]
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

[Google form](https://forms.gle/uTnNAahd9Jd3CfUx8)

## Results


| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Aman        | 25          |          |            | 25           |
| 2.    | Javad       | 18          |          | 5          | 23           |
| 3.    | Tim         | 15          |          |            | 15           |
|       | Anuradha    | 10          | 5        |            | 15           |
| 5.    | Lee         | 12          |          |            | 12           |
| 6.    | Patrick     | 10          |          |            | 10           |
|       | Jan Bart    | 10          |          |            | 10           |
| 8.    | Lars        | 4           |          |            | 4            |
| 9.    | Mettin      | 2           |          |            | 2            |

### Jury vote

1. javad1 - idea of sorting the string in the beginning
2. lee1 - using generator
3. tim6 - going for shortcuts :D

### Screenshot

![2021 Week 26 podium](./podium.png)

![2021 Week 26 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 07/07/2021, 13:08:32
EVALUATING CHALLENGE:               2021/w26
FOUND 22 SOLUTIONS:                 alexanderquintero1.js, aman1.js, anuradha1.js, anuradha2.js, anuradha21.js, anuradha3.js, anuradha4.js, javad1.js,
                          javad2.js, jmulders3.js, lars1.js, lars2.js, lars21.js, lee1.js, mettin1.js, patrick1.js, tim1.js, tim2.js, tim3.js,
                          tim4.js, tim5.js, tim6.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 100 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   07/07/2021, 14:38:34
DURATION:                           1 hour, 30 minutes, 2.421 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ aman1     │ 3.915ms  │ 3.899ms  │ 0.016ms      │ 772  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ javad2    │ 4.781ms  │ 4.762ms  │ 0.019ms      │ 1197 ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 3     │ 15     │ tim6      │ 5.318ms  │ 5.303ms  │ 0.015ms      │ 1951 ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ lee1      │ 9.977ms  │ 9.955ms  │ 0.022ms      │ 901  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ anuradha3 │ 13.621ms │ 13.601ms │ 0.020ms      │ 598  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 10     │ patrick1  │ 13.669ms │ 13.653ms │ 0.016ms      │ 382  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 10     │ jmulders3 │ 14.200ms │ 14.184ms │ 0.016ms      │ 498  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ lars2     │ 16.358ms │ 16.341ms │ 0.017ms      │ 352  ║
╟───────┼────────┼───────────┼──────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ mettin1   │ 42.209ms │ 42.184ms │ 0.024ms      │ 501  ║
╚═══════╧════════╧═══════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              tim5.js, javad1.js, tim2.js, anuradha2.js, anuradha1.js, anuradha4.js, lars21.js, anuradha21.js

ONLY CODEGOLF SOLUTIONS:            lars1.js, tim1.js, tim3.js, tim4.js

CODEGOLF AWARD:                     anuradha21.js with 155 bytes

FAILED SOLUTIONS:                   alexanderquintero1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬───────┐
│ (index) │        solution         │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs  │
├─────────┼─────────────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼───────┤
│    0    │       'aman1.js'        │ 3.9149549996946007 │ 3.8991199999582022 │ 0.01583499973639846  │ 772  │ 'successfully' │ 54.76134499999898  │    false     │ false  │        null        │ 19350 │
│    1    │       'javad2.js'       │ 4.780915000475943  │ 4.7622530004009604 │ 0.018662000074982643 │ 1197 │ 'successfully' │ 35.156418000002304 │    false     │ false  │        null        │ 19350 │
│    2    │        'tim6.js'        │ 5.317732000024989  │ 5.302557999966666  │ 0.015174000058323145 │ 1951 │ 'successfully' │ 54.53770099999747  │    false     │ false  │        null        │ 19350 │
│    3    │        'tim5.js'        │ 6.138492000231054  │ 6.123296000005212  │ 0.015196000225841999 │ 1019 │ 'successfully' │ 45.501587999999174 │    false     │ false  │        null        │ 19350 │
│    4    │       'javad1.js'       │ 8.515344000188634  │ 8.492855000076815  │ 0.022489000111818314 │ 978  │ 'successfully' │ 43.84434500000134  │    false     │ false  │        null        │ 19350 │
│    5    │        'lee1.js'        │ 9.977030999958515  │ 9.955320999957621  │ 0.02171000000089407  │ 901  │ 'successfully' │ 63.17558700000154  │    false     │ false  │        null        │ 19350 │
│    6    │     'anuradha3.js'      │ 13.620575000502868 │ 13.60085000001709  │ 0.019725000485777855 │ 598  │ 'successfully' │ 69.72917699999743  │    false     │ false  │        null        │ 19350 │
│    7    │      'patrick1.js'      │ 13.668570000183536 │ 13.652739000011934 │ 0.015831000171601772 │ 382  │ 'successfully' │  41.4425459999984  │    false     │ false  │        null        │ 19350 │
│    8    │        'tim2.js'        │ 13.94098800001666  │  13.9255510000512  │ 0.015436999965459108 │ 479  │ 'successfully' │ 42.773245000000315 │    false     │ false  │        null        │ 19350 │
│    9    │     'jmulders3.js'      │  14.1997609998798  │ 14.183996999985538 │ 0.01576399989426136  │ 498  │ 'successfully' │ 54.71727700000338  │    false     │ false  │        null        │ 19350 │
│   10    │     'anuradha2.js'      │ 14.288423000834882 │ 14.269507000222802 │ 0.018916000612080097 │ 200  │ 'successfully' │ 45.75535400000081  │    false     │ false  │        null        │ 19350 │
│   11    │     'anuradha1.js'      │ 14.892366000451148 │ 14.872445000335574 │ 0.019921000115573406 │ 187  │ 'successfully' │ 68.06300600000031  │    false     │ false  │        null        │ 19350 │
│   12    │       'lars2.js'        │ 16.358033000025898 │ 16.341064000036567 │ 0.01696899998933077  │ 352  │ 'successfully' │ 42.29929799999809  │    false     │ false  │        null        │ 19350 │
│   13    │     'anuradha4.js'      │ 16.43109500015271  │ 16.414778000005754 │ 0.01631700014695525  │ 164  │ 'successfully' │ 84.50037900000098  │    false     │ false  │        null        │ 19350 │
│   14    │       'lars21.js'       │ 17.878194000571966 │ 17.861127000302076 │ 0.01706700026988983  │ 506  │ 'successfully' │ 47.65917400000035  │    false     │ false  │        null        │ 19350 │
│   15    │     'anuradha21.js'     │ 18.403850000016973 │ 18.38644899999781  │ 0.017401000019162893 │ 155  │ 'successfully' │ 81.47085900000093  │    false     │ false  │        null        │ 19350 │
│   16    │      'mettin1.js'       │ 42.20871599999373  │ 42.184315999998944 │ 0.024399999994784594 │ 501  │ 'successfully' │ 82.45183000000179  │    false     │ false  │        null        │ 19350 │
│   17    │ 'alexanderquintero1.js' │        null        │        null        │         null         │ 442  │ 'successfully' │  5.79921800000011  │    false     │  true  │ 'Incorrect result' │   0   │
│   18    │       'lars1.js'        │        null        │        null        │         null         │ 175  │ 'successfully' │     5959.5056      │     true     │ false  │        null        │   0   │
│   19    │        'tim1.js'        │        null        │        null        │         null         │ 175  │ 'successfully' │ 639.0978100000029  │     true     │ false  │        null        │   0   │
│   20    │        'tim3.js'        │        null        │        null        │         null         │ 164  │ 'successfully' │  304.894605999998  │     true     │ false  │        null        │   0   │
│   21    │        'tim4.js'        │        null        │        null        │         null         │ 163  │ 'successfully' │ 301.86532799999986 │     true     │ false  │        null        │   0   │
└─────────┴─────────────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴───────┘
```