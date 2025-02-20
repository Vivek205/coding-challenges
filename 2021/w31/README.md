# Week 31 challenge

Write a function `thatsEnough` that takes in an array as the first argument and limit `N` as 2nd.
The returned array should limit the occurrence of each item in the array to max `N` times.
The order of items should be preserved.

**Note:** The input array shouldn't be mutated.


Examples:
```
thatsEnough([5, 5, 1, 5, 1, 7], 2) // [5, 5, 1, 1, 7]
thatsEnough([5, 5, 1, 5, 1, 7], 1) // [5, 1, 7]
```

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Javad       | 25          |          | 5          | 30           |
| 2.    | Pablo       | 18          | 5        |            | 23           |
| 3.    | Tori        | 18          |          |            | 18           |
|       | Varun       | 18          |          |            | 18           |
|       | Hossein     | 18          |          |            | 18           |
|       | Irene       | 18          |          |            | 18           |
|       | Jan Bart    | 18          |          |            | 18           |
|       | Bram        | 18          |          |            | 18           |
| 9.    | Ezzeddine   | 2           |          |            | 2            |
| 10.   | Lee         | 1           |          |            | 1            |

### Jury vote

#### Harijs
1. javad2 - great find with array indices
2. ezzedine - only minified code :)
3. aundradha4 - attempt with splice :)

### Screenshot

![2021 Week 31 podium](./podium.png)

![2021 Week 31 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 11/08/2021, 12:07:05
EVALUATING CHALLENGE:               2021/w31
FOUND 42 SOLUTIONS:                 anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, bram1.js, bram2.js, bram3.js, ezzeddine1.js, ezzeddine2.js,
                          ezzeddine3.js, ezzeddine4.js, ezzeddine5.js, ezzeddine6.js, ezzeddine7.js, hossein1.js, hossein2.js, hossein3.js,
                          hossein4.js, hossein5.js, hossein6.js, hossein7.js, irene1.js, irene2.js, irene3.js, javad1.js, javad2.js, jmulders1.js,
                          lee1.js, lee2.js, lee3.js, pablo1.js, pablo2.js, pablo3.js, pablo4.js, pablo5.js, pablo6.js, tori1.js, tori2.js,
                          varun1.js, varun2.js, varun3.js, varun4.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   11/08/2021, 13:37:40
DURATION:                           1 hour, 30 minutes, 34.821 seconds

RANKINGS:
╔═══════╤════════╤════════════╤═══════════╤═══════════╤══════════════╤══════╗
║ Place │ Points │ Name       │ Total     │ Best run  │ Best compile │ Size ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║ 1     │ 25     │ javad2     │ 35.063ms  │ 35.042ms  │ 0.021ms      │ 601  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║ 2     │ 18     │ tori1      │ 41.588ms  │ 41.565ms  │ 0.023ms      │ 305  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ pablo5     │ 41.818ms  │ 41.796ms  │ 0.023ms      │ 303  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ varun3     │ 42.270ms  │ 42.250ms  │ 0.020ms      │ 106  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ hossein6   │ 42.395ms  │ 42.374ms  │ 0.021ms      │ 347  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ irene2     │ 42.596ms  │ 42.576ms  │ 0.020ms      │ 335  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ jmulders1  │ 42.649ms  │ 42.628ms  │ 0.020ms      │ 305  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ bram1      │ 42.707ms  │ 42.684ms  │ 0.023ms      │ 311  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║ 9     │ 2      │ ezzeddine7 │ 47.552ms  │ 47.531ms  │ 0.021ms      │ 172  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║ 10    │ 1      │ lee3       │ 51.672ms  │ 51.644ms  │ 0.029ms      │ 476  ║
╟───────┼────────┼────────────┼───────────┼───────────┼──────────────┼──────╢
║ 11    │        │ anuradha2  │ 120.411ms │ 120.388ms │ 0.023ms      │ 128  ║
╚═══════╧════════╧════════════╧═══════════╧═══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              varun1.js, varun2.js, bram2.js, irene1.js, hossein4.js, hossein3.js, tori2.js, ezzeddine3.js, ezzeddine6.js,
                          ezzeddine4.js, ezzeddine5.js, varun4.js, anuradha3.js, anuradha4.js, javad1.js, pablo1.js, anuradha1.js, lee1.js,
                          hossein1.js, hossein2.js, bram3.js, lee2.js, ezzeddine2.js, pablo6.js, pablo3.js, pablo4.js, pablo2.js, hossein7.js,
                          hossein5.js, ezzeddine1.js, irene3.js

CODEGOLF AWARD:                     pablo6.js with 63 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬────────────────┬──────────────┬────────┬────────────┬──────┐
│ (index) │    solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ memoryEstimate │ onlyCodegolf │ failed │ failReason │ runs │
├─────────┼─────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼────────────────┼──────────────┼────────┼────────────┼──────┤
│    0    │   'javad2.js'   │ 35.06300500044017  │ 35.042033000005176 │ 0.020972000434994698 │ 601  │ 'successfully' │ 221.17582699999912 │     144888     │    false     │ false  │    null    │ 1000 │
│    1    │   'tori1.js'    │ 41.58774799993262  │ 41.56500199995935  │ 0.022745999973267317 │ 305  │ 'successfully' │ 238.61302799999976 │     143256     │    false     │ false  │    null    │ 1000 │
│    2    │   'pablo5.js'   │ 41.81825699983165  │ 41.79567699995823  │ 0.022579999873414636 │ 303  │ 'successfully' │ 236.9971710000027  │     149864     │    false     │ false  │    null    │ 1000 │
│    3    │   'varun3.js'   │ 42.270093999803066 │ 42.25010900013149  │ 0.019984999671578407 │ 106  │ 'successfully' │ 244.80668600000354 │     138808     │    false     │ false  │    null    │ 1000 │
│    4    │  'hossein6.js'  │ 42.39523199968971  │ 42.37389699998312  │ 0.021334999706596136 │ 347  │ 'successfully' │ 252.10992500000066 │     179456     │    false     │ false  │    null    │ 1000 │
│    5    │   'irene2.js'   │ 42.59646299970336  │ 42.57616199995391  │ 0.020300999749451876 │ 335  │ 'successfully' │ 240.96373299999686 │     143296     │    false     │ false  │    null    │ 1000 │
│    6    │ 'jmulders1.js'  │ 42.64869899954647  │ 42.62831199960783  │ 0.020386999938637018 │ 305  │ 'successfully' │ 244.54636700000265 │     140488     │    false     │ false  │    null    │ 1000 │
│    7    │   'varun1.js'   │ 42.69655300024897  │ 42.67472300026566  │  0.0218299999833107  │ 314  │ 'successfully' │ 242.54438400000072 │     141136     │    false     │ false  │    null    │ 1000 │
│    8    │   'bram1.js'    │ 42.70748700015247  │ 42.68436100007966  │ 0.023126000072807074 │ 311  │ 'successfully' │ 249.12134499999956 │     143984     │    false     │ false  │    null    │ 1000 │
│    9    │   'varun2.js'   │ 42.933918999740854 │ 42.91116199991666  │  0.0227569998241961  │ 226  │ 'successfully' │ 247.97906599999988 │     141216     │    false     │ false  │    null    │ 1000 │
│   10    │   'bram2.js'    │ 43.319209999914165 │ 43.29702199999883  │ 0.022187999915331602 │ 354  │ 'successfully' │ 261.7976079999971  │     143704     │    false     │ false  │    null    │ 1000 │
│   11    │   'irene1.js'   │ 44.04985300032422  │ 44.027608999982476 │ 0.02224400034174323  │ 319  │ 'successfully' │ 249.31061000000045 │     142896     │    false     │ false  │    null    │ 1000 │
│   12    │  'hossein4.js'  │ 44.621787999989465 │ 44.59194600000046  │ 0.029841999989002943 │ 435  │ 'successfully' │ 269.06074600000284 │     142392     │    false     │ false  │    null    │ 1000 │
│   13    │  'hossein3.js'  │ 45.73379199951887  │ 45.70411399984732  │ 0.029677999671548605 │ 434  │ 'successfully' │ 368.9959090000011  │     145280     │    false     │ false  │    null    │ 1000 │
│   14    │   'tori2.js'    │ 46.18375400034711  │ 46.16170200007036  │ 0.022052000276744366 │ 361  │ 'successfully' │ 267.70576699999947 │     139480     │    false     │ false  │    null    │ 1000 │
│   15    │ 'ezzeddine7.js' │ 47.55223400006071  │ 47.53138200007379  │ 0.02085199998691678  │ 172  │ 'successfully' │ 279.7146399999983  │     161576     │    false     │ false  │    null    │ 1000 │
│   16    │ 'ezzeddine3.js' │ 48.292268000077456 │ 48.27197299990803  │ 0.020295000169426203 │ 179  │ 'successfully' │ 295.26533800000107 │     145000     │    false     │ false  │    null    │ 1000 │
│   17    │ 'ezzeddine6.js' │  48.9211370004341  │ 48.901761000044644 │ 0.01937600038945675  │ 179  │ 'successfully' │ 276.9816430000028  │     149464     │    false     │ false  │    null    │ 1000 │
│   18    │    'lee3.js'    │ 51.67234700010158  │ 51.643740999978036 │ 0.028606000123545527 │ 476  │ 'successfully' │ 328.5937879999983  │     147840     │    false     │ false  │    null    │ 1000 │
│   19    │ 'ezzeddine4.js' │ 88.23187299957499  │ 88.21074099978432  │ 0.021131999790668488 │ 170  │ 'successfully' │ 326.50073300000076 │     173344     │    false     │ false  │    null    │ 1000 │
│   20    │ 'ezzeddine5.js' │ 89.41582300001755  │ 89.39501899993047  │ 0.020804000087082386 │ 170  │ 'successfully' │ 349.0064259999999  │     145072     │    false     │ false  │    null    │ 1000 │
│   21    │   'varun4.js'   │ 116.57139000017196 │ 116.55007300013676 │ 0.021317000035196543 │ 366  │ 'successfully' │ 318.79224899999826 │     145504     │    false     │ false  │    null    │ 1000 │
│   22    │ 'anuradha2.js'  │ 120.4105239994824  │ 120.38754099979997 │ 0.022982999682426453 │ 128  │ 'successfully' │ 563.7642879999985  │     139184     │    false     │ false  │    null    │ 1000 │
│   23    │ 'anuradha3.js'  │ 125.99522800021805 │ 125.96327200019732 │ 0.031956000020727515 │ 364  │ 'successfully' │ 459.44847500000105 │     139256     │    false     │ false  │    null    │ 1000 │
│   24    │ 'anuradha4.js'  │ 126.72091200039722 │ 126.68897100002505 │  0.0319410003721714  │ 402  │ 'successfully' │ 624.7458230000011  │     139944     │    false     │ false  │    null    │ 1000 │
│   25    │   'javad1.js'   │ 126.77401100011775 │ 126.74886300001526 │ 0.025148000102490187 │ 362  │ 'successfully' │ 438.95205200000055 │     143312     │    false     │ false  │    null    │ 1000 │
│   26    │   'pablo1.js'   │ 127.77203100034967 │ 127.74763800017536 │ 0.024393000174313784 │ 427  │ 'successfully' │ 463.31766499999503 │     149176     │    false     │ false  │    null    │ 1000 │
│   27    │ 'anuradha1.js'  │ 131.67838600021787 │ 131.65442400006577 │ 0.023962000152096152 │ 370  │ 'successfully' │ 613.8911059999991  │     140504     │    false     │ false  │    null    │ 1000 │
│   28    │    'lee1.js'    │ 132.8313049999415  │ 132.80648400000064 │ 0.02482099994085729  │ 364  │ 'successfully' │ 467.1386829999974  │     142984     │    false     │ false  │    null    │ 1000 │
│   29    │  'hossein1.js'  │ 134.28167199989548 │ 134.25046299997484 │ 0.031208999920636415 │ 400  │ 'successfully' │ 518.3402070000011  │     145728     │    false     │ false  │    null    │ 1000 │
│   30    │  'hossein2.js'  │ 142.1875989997643  │ 142.16680800000904 │ 0.02079099975526333  │  82  │ 'successfully' │ 851.6519230000013  │     139472     │    false     │ false  │    null    │ 1000 │
│   31    │   'bram3.js'    │ 145.2109280002769  │ 145.18717600009404 │ 0.02375200018286705  │  67  │ 'successfully' │ 581.8149940000003  │     142280     │    false     │ false  │    null    │ 1000 │
│   32    │    'lee2.js'    │ 145.9398560000118  │ 145.91654499992728 │ 0.023311000084504485 │ 118  │ 'successfully' │ 1542.1623219999965 │     140024     │    false     │ false  │    null    │ 1000 │
│   33    │ 'ezzeddine2.js' │ 150.66787099977955 │ 150.64592999964952 │ 0.021941000130027533 │ 156  │ 'successfully' │  756.043236999998  │     143192     │    false     │ false  │    null    │ 1000 │
│   34    │   'pablo6.js'   │ 153.8335819998756  │ 153.8110549999401  │ 0.022526999935507774 │  63  │ 'successfully' │ 657.0889039999965  │     138256     │    false     │ false  │    null    │ 1000 │
│   35    │   'pablo3.js'   │ 165.41483100038022 │ 165.39179300004616 │ 0.02303800033405423  │  76  │ 'successfully' │ 868.2684950000039  │     146704     │    false     │ false  │    null    │ 1000 │
│   36    │   'pablo4.js'   │ 167.60374300021795 │ 167.58032199999434 │ 0.023421000223606825 │  68  │ 'successfully' │ 636.5957439999984  │     148528     │    false     │ false  │    null    │ 1000 │
│   37    │   'pablo2.js'   │ 169.66982800001279 │ 169.64598300028592 │ 0.023844999726861715 │  82  │ 'successfully' │     665.246153     │     148096     │    false     │ false  │    null    │ 1000 │
│   38    │  'hossein7.js'  │ 170.87603200017475 │ 170.85387800005265 │ 0.022154000122100115 │  64  │ 'successfully' │ 643.1521320000047  │     142872     │    false     │ false  │    null    │ 1000 │
│   39    │  'hossein5.js'  │ 172.86792999960016 │ 172.84400799998548 │ 0.023921999614685774 │  66  │ 'successfully' │ 936.4930219999987  │     139384     │    false     │ false  │    null    │ 1000 │
│   40    │ 'ezzeddine1.js' │ 211.75048099993728 │ 211.72671399987303 │ 0.023767000064253807 │ 189  │ 'successfully' │     694.773717     │     142952     │    false     │ false  │    null    │ 1000 │
│   41    │   'irene3.js'   │ 568.6625849995689  │ 568.6372940000074  │ 0.025290999561548233 │  82  │ 'successfully' │  813.482170000003  │     141128     │    false     │ false  │    null    │ 1000 │
└─────────┴─────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴────────────────┴──────────────┴────────┴────────────┴──────┘

MEMORY USAGE:
┌─────────┬─────────────────┬────────────────┐
│ (index) │    solution     │ memoryEstimate │
├─────────┼─────────────────┼────────────────┤
│    0    │   'pablo6.js'   │     138256     │
│    1    │   'varun3.js'   │     138808     │
│    2    │ 'anuradha2.js'  │     139184     │
│    3    │ 'anuradha3.js'  │     139256     │
│    4    │  'hossein5.js'  │     139384     │
│    5    │  'hossein2.js'  │     139472     │
│    6    │   'tori2.js'    │     139480     │
│    7    │ 'anuradha4.js'  │     139944     │
│    8    │    'lee2.js'    │     140024     │
│    9    │ 'jmulders1.js'  │     140488     │
│   10    │ 'anuradha1.js'  │     140504     │
│   11    │   'irene3.js'   │     141128     │
│   12    │   'varun1.js'   │     141136     │
│   13    │   'varun2.js'   │     141216     │
│   14    │   'bram3.js'    │     142280     │
│   15    │  'hossein4.js'  │     142392     │
│   16    │  'hossein7.js'  │     142872     │
│   17    │   'irene1.js'   │     142896     │
│   18    │ 'ezzeddine1.js' │     142952     │
│   19    │    'lee1.js'    │     142984     │
│   20    │ 'ezzeddine2.js' │     143192     │
│   21    │   'tori1.js'    │     143256     │
│   22    │   'irene2.js'   │     143296     │
│   23    │   'javad1.js'   │     143312     │
│   24    │   'bram2.js'    │     143704     │
│   25    │   'bram1.js'    │     143984     │
│   26    │   'javad2.js'   │     144888     │
│   27    │ 'ezzeddine3.js' │     145000     │
│   28    │ 'ezzeddine5.js' │     145072     │
│   29    │  'hossein3.js'  │     145280     │
│   30    │   'varun4.js'   │     145504     │
│   31    │  'hossein1.js'  │     145728     │
│   32    │   'pablo3.js'   │     146704     │
│   33    │    'lee3.js'    │     147840     │
│   34    │   'pablo2.js'   │     148096     │
│   35    │   'pablo4.js'   │     148528     │
│   36    │   'pablo1.js'   │     149176     │
│   37    │ 'ezzeddine6.js' │     149464     │
│   38    │   'pablo5.js'   │     149864     │
│   39    │ 'ezzeddine7.js' │     161576     │
│   40    │ 'ezzeddine4.js' │     173344     │
│   41    │  'hossein6.js'  │     179456     │
└─────────┴─────────────────┴────────────────┘
```