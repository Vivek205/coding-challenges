# Week 30 challenge

Write a function `findMeDeep` which takes in an array as first argument (haystack) and needle as second and returns wether the needle is found within the haystack.
The caveat is that the haystack typically is nested (multidimensional).

Examples:
```
findMeDeep([1, 2, 3], 2) // returns true
findMeDeep([1, 2, 3], 7) // returns false
findMeDeep([1, 2, 3, [4], [5, [6, 7]]], 7) // returns true
```

## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name        | Performance | Codegolf | Jury award | Total points |
|-------|-------------|-------------|----------|------------|--------------|
| 1.    | Pablo       | 25          | 5        | 5          | 35           |
| 2.    | Hossein     | 25          | 5        |            | 30           |
| 3.    | Javad       | 25          |          |            | 25           |
| 4.    | Anuradha    | 12          | 5        |            | 17           |
|       | Irene       | 12          | 5        |            | 17           |
|       | Lee         | 12          | 5        |            | 17           |
| 7.    | Bram        | 12          |          |            | 12           |
| 8.    | Lars        |             | 5        |            | 5            |
| 9.    | Jan Bart    | 4           |          |            | 4            |
| 10.   | Alexander   | 2           |          |            | 2            |
| 11.   | Ezzeddine   | 1           |          |            | 1            |

### Jury vote

#### Harijs

1. pablo3 - firsts to come up with the idea for nested logic
2. lee2 - interesting idea with JSON stringify
3. ezzedine - only minified code :)


### Screenshot

![2021 Week 30 podium](./podium.png)

![2021 Week 30 results](./results.png)

### Full output log
```
EVALUATION STARTED:                 04/08/2021, 12:07:15
EVALUATING CHALLENGE:               2021/w30
FOUND 43 SOLUTIONS:                 alexanderquintero1.js, alexanderquintero2.js, anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, anuradha5.js,
                          anuradha6.js, anuradha7.js, bram1.js, bram2.js, ezzeddine1.js, ezzeddine2.js, ezzeddine3.js, ezzeddine4.js,
                          ezzeddine5.js, ezzeddine6.js, ezzeddine7.js, ezzeddine8.js, ezzeddine9.js, hossein1.js, hossein2.js, hossein3.js,
                          irene1.js, irene2.js, javad1.js, javad2.js, javad3.js, javad4.js, jmulders1.js, lars1.js, lee1.js, lee2.js, lee3.js,
                          lee4.js, lee5.js, pablo1.js, pablo2.js, pablo3.js, pablo4.js, pablo5.js, patrick1.js, tori1.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   04/08/2021, 13:37:29
DURATION:                           1 hour, 30 minutes, 13.668 seconds

RANKINGS:
╔═══════╤════════╤════════════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name               │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ hossein3           │ 4.419ms  │ 4.399ms  │ 0.020ms      │ 694  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ pablo5             │ 4.472ms  │ 4.456ms  │ 0.016ms      │ 837  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ javad4             │ 4.497ms  │ 4.482ms  │ 0.015ms      │ 1340 ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 4     │ 12     │ anuradha7          │ 5.104ms  │ 5.085ms  │ 0.019ms      │ 169  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ bram1              │ 5.200ms  │ 5.186ms  │ 0.014ms      │ 331  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ irene2             │ 5.308ms  │ 5.293ms  │ 0.015ms      │ 294  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 12     │ lee5               │ 5.344ms  │ 5.324ms  │ 0.020ms      │ 341  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 8     │ 4      │ jmulders1          │ 7.883ms  │ 7.866ms  │ 0.017ms      │ 361  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ alexanderquintero1 │ 16.321ms │ 16.304ms │ 0.017ms      │ 390  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 10    │ 1      │ ezzeddine3         │ 27.128ms │ 27.114ms │ 0.014ms      │ 171  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║ 11    │        │ tori1              │ 70.083ms │ 70.065ms │ 0.018ms      │ 131  ║
╟───────┼────────┼────────────────────┼──────────┼──────────┼──────────────┼──────╢
║       │        │ lars1              │ 71.003ms │ 70.987ms │ 0.016ms      │ 43   ║
╚═══════╧════════╧════════════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              pablo3.js, javad3.js, pablo1.js, anuradha6.js, javad2.js, anuradha3.js, javad1.js, lee3.js, alexanderquintero2.js,
                          hossein2.js, ezzeddine4.js, ezzeddine2.js, ezzeddine1.js, lee2.js, ezzeddine8.js, ezzeddine6.js, anuradha5.js,
                          ezzeddine5.js, hossein1.js, anuradha1.js, lee1.js, ezzeddine9.js, anuradha2.js, pablo2.js, anuradha4.js, pablo4.js,
                          irene1.js, lee4.js, ezzeddine7.js

ONLY CODEGOLF SOLUTIONS:            bram2.js

CODEGOLF AWARD:                     anuradha5.js, hossein1.js, irene1.js, lars1.js, lee4.js, pablo4.js with 43 bytes

FAILED SOLUTIONS:                   patrick1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬─────────────────────┬──────────────┬────────┬────────────────────┬──────┐
│ (index) │        solution         │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime    │ onlyCodegolf │ failed │     failReason     │ runs │
├─────────┼─────────────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼─────────────────────┼──────────────┼────────┼────────────────────┼──────┤
│    0    │      'hossein3.js'      │ 4.419073999859393  │ 4.399152999743819  │ 0.019921000115573406 │ 694  │ 'successfully' │  609.8207059999986  │    false     │ false  │        null        │ 3300 │
│    1    │       'pablo5.js'       │ 4.472157000156585  │ 4.455999000056181  │ 0.016158000100404024 │ 837  │ 'successfully' │     596.260037      │    false     │ false  │        null        │ 3300 │
│    2    │       'javad4.js'       │ 4.496651999885216  │ 4.482011999934912  │ 0.014639999950304627 │ 1340 │ 'successfully' │  628.899053000001   │    false     │ false  │        null        │ 3300 │
│    3    │       'pablo3.js'       │ 4.740782000590116  │ 4.724426000379026  │ 0.01635600021108985  │ 641  │ 'successfully' │  633.6947759999966  │    false     │ false  │        null        │ 3300 │
│    4    │       'javad3.js'       │ 4.831880999729037  │ 4.816395999863744  │ 0.015484999865293503 │ 359  │ 'successfully' │  638.0955639999956  │    false     │ false  │        null        │ 3300 │
│    5    │     'anuradha7.js'      │ 5.103506000246853  │ 5.084515000227839  │ 0.01899100001901388  │ 169  │ 'successfully' │  811.2009130000006  │    false     │ false  │        null        │ 3300 │
│    6    │       'pablo1.js'       │ 5.189412999548949  │ 5.173162999562919  │ 0.01624999998603016  │ 274  │ 'successfully' │  660.1988579999961  │    false     │ false  │        null        │ 3300 │
│    7    │       'bram1.js'        │  5.20034100022167  │ 5.186164000071585  │ 0.014177000150084496 │ 331  │ 'successfully' │  925.4059430000016  │    false     │ false  │        null        │ 3300 │
│    8    │     'anuradha6.js'      │ 5.216966999694705  │  5.20187299977988  │ 0.015093999914824963 │ 156  │ 'successfully' │  732.7395929999984  │    false     │ false  │        null        │ 3300 │
│    9    │       'javad2.js'       │ 5.228817000053823  │ 5.214143000077456  │ 0.014673999976366758 │ 331  │ 'successfully' │  661.3758809999999  │    false     │ false  │        null        │ 3300 │
│   10    │       'irene2.js'       │ 5.308006000239402  │ 5.2929600002244115 │ 0.015046000014990568 │ 294  │ 'successfully' │  683.0939339999968  │    false     │ false  │        null        │ 3300 │
│   11    │     'anuradha3.js'      │ 5.320412999484688  │ 5.306165999732912  │ 0.014246999751776457 │ 325  │ 'successfully' │  731.3072720000018  │    false     │ false  │        null        │ 3300 │
│   12    │        'lee5.js'        │ 5.343648999929428  │ 5.323522999882698  │ 0.02012600004673004  │ 341  │ 'successfully' │  645.6628500000006  │    false     │ false  │        null        │ 3300 │
│   13    │       'javad1.js'       │ 5.570634000003338  │ 5.555501000024378  │ 0.01513299997895956  │ 267  │ 'successfully' │  911.9912889999978  │    false     │ false  │        null        │ 3300 │
│   14    │        'lee3.js'        │ 5.792533999774605  │ 5.773802999872714  │ 0.018730999901890755 │ 314  │ 'successfully' │  680.8734519999998  │    false     │ false  │        null        │ 3300 │
│   15    │     'jmulders1.js'      │ 7.883060000836849  │ 7.866484000347555  │ 0.01657600048929453  │ 361  │ 'successfully' │  644.3746150000006  │    false     │ false  │        null        │ 3300 │
│   16    │ 'alexanderquintero1.js' │ 16.32118699947023  │ 16.304042000003392 │ 0.017144999466836452 │ 390  │ 'successfully' │     1027.708853     │    false     │ false  │        null        │ 3300 │
│   17    │ 'alexanderquintero2.js' │ 16.543337000068277 │ 16.527007999829948 │ 0.016329000238329172 │ 188  │ 'successfully' │  755.627113999999   │    false     │ false  │        null        │ 3300 │
│   18    │      'hossein2.js'      │ 17.453282000031322 │ 17.439534000121057 │ 0.013747999910265207 │ 722  │ 'successfully' │  606.3156099999978  │    false     │ false  │        null        │ 3300 │
│   19    │     'ezzeddine3.js'     │ 27.12842800002545  │ 27.11393600003794  │ 0.014491999987512827 │ 171  │ 'successfully' │  621.6394909999981  │    false     │ false  │        null        │ 3300 │
│   20    │     'ezzeddine4.js'     │ 27.206393999047577 │ 27.19168399926275  │ 0.014709999784827232 │ 169  │ 'successfully' │  625.3694340000002  │    false     │ false  │        null        │ 3300 │
│   21    │     'ezzeddine2.js'     │ 34.14638199983165  │ 34.12993500009179  │ 0.016446999739855528 │ 181  │ 'successfully' │  634.0206079999989  │    false     │ false  │        null        │ 3300 │
│   22    │     'ezzeddine1.js'     │ 34.19695400027558  │ 34.181524000130594 │ 0.015430000144988298 │ 195  │ 'successfully' │  636.6675099999993  │    false     │ false  │        null        │ 3300 │
│   23    │        'lee2.js'        │ 36.06927699968219  │ 36.05468099983409  │ 0.014595999848097563 │ 412  │ 'successfully' │  663.4743680000029  │    false     │ false  │        null        │ 3300 │
│   24    │     'ezzeddine8.js'     │  64.8021370000206  │ 64.78539500012994  │ 0.01674199989065528  │ 111  │ 'successfully' │  806.2402560000046  │    false     │ false  │        null        │ 3300 │
│   25    │     'ezzeddine6.js'     │ 69.08696900028735  │ 69.07157200016081  │ 0.01539700012654066  │  48  │ 'successfully' │  665.226032999999   │    false     │ false  │        null        │ 3300 │
│   26    │     'anuradha5.js'      │ 69.61734999995679  │ 69.60198100004345  │ 0.015368999913334846 │  43  │ 'successfully' │  768.4355629999991  │    false     │ false  │        null        │ 3300 │
│   27    │     'ezzeddine5.js'     │ 69.67496700026095  │ 69.65876500029117  │ 0.016201999969780445 │  51  │ 'successfully' │  673.3349240000025  │    false     │ false  │        null        │ 3300 │
│   28    │      'hossein1.js'      │ 69.72991800028831  │ 69.71420400030911  │ 0.01571399997919798  │  43  │ 'successfully' │  687.7546739999962  │    false     │ false  │        null        │ 3300 │
│   29    │     'anuradha1.js'      │ 70.02850099978969  │ 70.01042499998584  │ 0.018075999803841114 │ 116  │ 'successfully' │  773.8742149999998  │    false     │ false  │        null        │ 3300 │
│   30    │       'tori1.js'        │  70.082991999574   │  70.0650209998712  │ 0.01797099970281124  │ 131  │ 'successfully' │  676.2185180000015  │    false     │ false  │        null        │ 3300 │
│   31    │        'lee1.js'        │ 70.11930899973959  │ 70.10330699943006  │ 0.01600200030952692  │  49  │ 'successfully' │  701.3866710000002  │    false     │ false  │        null        │ 3300 │
│   32    │     'ezzeddine9.js'     │ 70.23851499985904  │ 70.22329899994656  │ 0.01521599991247058  │  45  │ 'successfully' │  661.9353229999979  │    false     │ false  │        null        │ 3300 │
│   33    │     'anuradha2.js'      │  70.2961449995637  │ 70.28032500017434  │ 0.015819999389350414 │  49  │ 'successfully' │  718.1209249999993  │    false     │ false  │        null        │ 3300 │
│   34    │       'pablo2.js'       │ 70.32538300007582  │ 70.30845500063151  │ 0.016927999444305897 │  45  │ 'successfully' │  740.5631520000024  │    false     │ false  │        null        │ 3300 │
│   35    │     'anuradha4.js'      │ 70.47456300025806  │ 70.45823600050062  │ 0.016326999757438898 │  46  │ 'successfully' │  754.0816799999993  │    false     │ false  │        null        │ 3300 │
│   36    │       'lars1.js'        │ 71.00309800030664  │ 70.98709700023755  │ 0.016001000069081783 │  43  │ 'successfully' │  693.4599180000005  │    false     │ false  │        null        │ 3300 │
│   37    │       'pablo4.js'       │ 71.00576699990779  │ 70.98920900002122  │ 0.01655799988657236  │  43  │ 'successfully' │  671.7609599999996  │    false     │ false  │        null        │ 3300 │
│   38    │       'irene1.js'       │ 71.03573699994013  │ 71.01953599974513  │ 0.016201000194996595 │  43  │ 'successfully' │  684.2719850000067  │    false     │ false  │        null        │ 3300 │
│   39    │        'lee4.js'        │ 71.05904200021178  │  71.0432840003632  │  0.0157579998485744  │  43  │ 'successfully' │  697.9338710000011  │    false     │ false  │        null        │ 3300 │
│   40    │     'ezzeddine7.js'     │ 73.70404599967878  │ 73.68767100002151  │ 0.016374999657273293 │  47  │ 'successfully' │  685.8557509999955  │    false     │ false  │        null        │ 3300 │
│   41    │       'bram2.js'        │        null        │        null        │         null         │  81  │ 'successfully' │  828.4246849999981  │     true     │ false  │        null        │  0   │
│   42    │      'patrick1.js'      │        null        │        null        │         null         │ 121  │ 'successfully' │ 0.30887399999483023 │    false     │  true  │ 'Incorrect result' │  0   │
└─────────┴─────────────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴─────────────────────┴──────────────┴────────┴────────────────────┴──────┘
```