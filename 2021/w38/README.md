# Week 38 challenge

Write a function `evaporate` which takes in a number and returns how many times all its digits need to be multiplicated in order to reach a single digit.
E.g. 452 => 2, because 4 x 5 x 2 equals 40. And 4 x 0 equals 0. Thus, twice.

Examples:
```
evaporate(8) // 0
evaporate(19) // 1
evaporate(25) // 2
evaporate(452) // 2
evaporate(333) // 3
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name       | Performance | Codegolf | Vote  | Total points |
|-------|------------|-------------|----------|-------|--------------|
| 1.    | Peter-Paul | 25          | 5        |       | 30           |
| 2.    | Varun      | 18          |          |       | 18           |
|       | Hossein    | 18          |          |       | 18           |
| 4.    | Aman       | 12          |          |       | 12           |
| 5.    | Irene      | 10          |          |       | 10           |
|       | Tori       | 10          |          |       | 10           |
|       | Lee        | 10          |          |       | 10           |
| 8.    | Bram       | 4           |          |       | 4            |
| 9.    | Ji         | 2           |          |       | 2            |
| 10.   | Anuradha   | 1           |          |       | 1            |


### Screenshot

![2021 Week 38 podium](./podium.png)

![2021 Week 38 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 29/09/2021, 12:11:19
EVALUATING CHALLENGE:               2021/w38
FOUND 17 SOLUTIONS:                 aman1.js, anuradha1.js, anuradha2.js, bram1.js, hossein1.js, hossein2.js, irene1.js, ji1.js, ji2.js, lee1.js,
                          peter-paul1.js, peter-paul2.js, tori1.js, tori2.js, tori3.js, varun1.js, varun2.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   29/09/2021, 13:41:20
DURATION:                           1 hour, 30 minutes, 1.014 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤═════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total   │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ peter-paul1 │ 0.661ms │ 0.650ms  │ 0.011ms      │ 344  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 2     │ 18     │ varun2      │ 1.039ms │ 1.027ms  │ 0.012ms      │ 494  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 18     │ hossein1    │ 1.071ms │ 1.058ms  │ 0.013ms      │ 356  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ aman1       │ 1.248ms │ 1.236ms  │ 0.012ms      │ 339  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 5     │ 10     │ irene1      │ 1.437ms │ 1.424ms  │ 0.013ms      │ 204  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ tori2       │ 1.448ms │ 1.435ms  │ 0.013ms      │ 372  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║       │ 10     │ lee1        │ 1.473ms │ 1.461ms  │ 0.012ms      │ 313  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ bram1       │ 2.228ms │ 2.215ms  │ 0.013ms      │ 426  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ ji1         │ 3.983ms │ 3.970ms  │ 0.013ms      │ 164  ║
╟───────┼────────┼─────────────┼─────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ anuradha2   │ 4.954ms │ 4.941ms  │ 0.013ms      │ 314  ║
╚═══════╧════════╧═════════════╧═════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              varun1.js, tori1.js, hossein2.js, tori3.js, ji2.js, anuradha1.js, peter-paul2.js

CODEGOLF AWARD:                     peter-paul2.js with 67 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────┬───────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │ failReason │ runs  │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────┼───────┤
│    0    │ 'peter-paul1.js' │ 0.6612129993736744 │ 0.6499279998242855 │ 0.011284999549388885 │ 344  │ 'successfully' │ 8.304392999998527  │    false     │ false  │    null    │ 85450 │
│    1    │   'varun2.js'    │ 1.0394779993221164 │ 1.0270959995687008 │ 0.012381999753415585 │ 494  │ 'successfully' │ 36.180622000003495 │    false     │ false  │    null    │ 85450 │
│    2    │  'hossein1.js'   │ 1.0705569998826832 │ 1.0580110000446439 │ 0.012545999838039279 │ 356  │ 'successfully' │ 25.400226000001567 │    false     │ false  │    null    │ 85450 │
│    3    │    'aman1.js'    │ 1.2482859997544438 │ 1.2359059997834265 │ 0.012379999971017241 │ 339  │ 'successfully' │ 82.08670300000085  │    false     │ false  │    null    │ 85450 │
│    4    │   'varun1.js'    │ 1.3550049999685143 │ 1.3425639999986743 │ 0.01244099996984005  │ 272  │ 'successfully' │ 35.92393699999957  │    false     │ false  │    null    │ 85450 │
│    5    │   'irene1.js'    │ 1.437010999303311  │ 1.4244639994576573 │ 0.012546999845653772 │ 204  │ 'successfully' │ 13.237958000001527 │    false     │ false  │    null    │ 85450 │
│    6    │    'tori2.js'    │ 1.4477850003167987 │ 1.4350479999557137 │ 0.012737000361084938 │ 372  │ 'successfully' │ 38.09158299999763  │    false     │ false  │    null    │ 85450 │
│    7    │    'lee1.js'     │ 1.4729430000297725 │ 1.4607180000748485 │ 0.012224999954923987 │ 313  │ 'successfully' │ 8.370020000002114  │    false     │ false  │    null    │ 85450 │
│    8    │    'bram1.js'    │ 2.227663998492062  │ 2.214570999145508  │ 0.01309299934655428  │ 426  │ 'successfully' │ 26.23575300000084  │    false     │ false  │    null    │ 85450 │
│    9    │    'tori1.js'    │ 2.2308220001868904 │ 2.2177630001679063 │ 0.01305900001898408  │ 632  │ 'successfully' │ 44.43340900000112  │    false     │ false  │    null    │ 85450 │
│   10    │  'hossein2.js'   │ 2.7717890000203624 │ 2.7589690000750124 │ 0.012819999945349991 │ 366  │ 'successfully' │ 18.37386300000071  │    false     │ false  │    null    │ 85450 │
│   11    │    'tori3.js'    │ 3.4791779997758567 │ 3.465913999825716  │ 0.013263999950140715 │ 313  │ 'successfully' │ 18.850321999998414 │    false     │ false  │    null    │ 85450 │
│   12    │     'ji1.js'     │ 3.982791000045836  │ 3.9695990001782775 │ 0.01319199986755848  │ 164  │ 'successfully' │ 19.227280999999493 │    false     │ false  │    null    │ 85450 │
│   13    │     'ji2.js'     │ 4.414109000470489  │ 4.400882999878377  │ 0.013226000592112541 │ 297  │ 'successfully' │ 13.353655999999319 │    false     │ false  │    null    │ 85450 │
│   14    │  'anuradha2.js'  │ 4.953792999498546  │ 4.940520999953151  │ 0.013271999545395374 │ 314  │ 'successfully' │ 27.848943999997573 │    false     │ false  │    null    │ 85450 │
│   15    │  'anuradha1.js'  │ 5.365434000006644  │ 5.352266000001691  │ 0.013168000004952773 │ 279  │ 'successfully' │ 46.91903599999932  │    false     │ false  │    null    │ 85450 │
│   16    │ 'peter-paul2.js' │ 5.907545000081882  │ 5.8950380000751466 │ 0.012507000006735325 │  67  │ 'successfully' │ 28.198675999999978 │    false     │ false  │    null    │ 85450 │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────┴───────┘
```
