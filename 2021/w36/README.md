# Week 36 challenge

Write a function `findMinInt` which takes in an array of numbers and returns the minimum integer value.
Thus, non-integer numbers are ignored

Examples:
```
findMinInt([7, -4, 12.6, -21.32, -2, 0, 5]) // returns -4
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name       | Performance | Codegolf | Vote  | Total points |
|-------|------------|-------------|----------|-------|--------------|
| 1.    | Peter-Paul | 25          | 5        | 5     | 35           |
| 2.    | Aman       | 25          |          |       | 25           |
|       | Ji         | 25          |          |       | 25           |
|       | Bram       | 25          |          |       | 25           |
|       | Varun      | 25          |          |       | 25           |
| 6.    | Irene      | 8           |          | 5     | 13           |
| 7.    | Tori       | 8           |          |       | 8            |
|       | Lars       | 8           |          |       | 8            |
| 9.    | Lee        | 2           |          |       | 2            |
|       | Hossein    | 2           |          |       | 2            |


### Screenshot

![2021 Week 36 podium](./podium.png)

![2021 Week 36 results](./results.png)

### Vote

```
╔════════════════╤═════════════╤════════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Name           │ Vote        │ Comment                                                                                            ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ anuradha       │ aman1       │ usage of Math.floor to find integers                                                               ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ varun          │ irene1      │ MAX_SAFE_INTEGER                                                                                   ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ peter-paul     │ irene3      │ Readable and fast                                                                                  ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ harijs.deksnis │ peter-paul4 │ findIndex of for firsts integer and starting iteration from there                                  ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ hossein        │ peter-paul3 │ using the array as initial value for min, dirty but smart                                          ║
╟────────────────┼─────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────╢
║ israel         │ anuradha1   │ I'll never get tired of the trick to destructure static methods as a performance improvement trick ║
╚════════════════╧═════════════╧════════════════════════════════════════════════════════════════════════════════════════════════════╝
```


### Full output log
```

EVALUATION STARTED:                 15/09/2021, 12:07:22
EVALUATING CHALLENGE:               2021/w36
FOUND 35 SOLUTIONS:                 aman1.js, anuradha1.js, bram1.js, bram2.js, bram3.js, bram4.js, hossein1.js, hossein2.js, irene1.js, irene2.js,
                                    irene3.js, ji1.js, ji2.js, jmulders1.js, lars1.js, lars2.js, lars3.js, lee1.js, mettin1.js, patrick1.js, patrick2.js,
                                    patrick3.js, peter-paul1.js, peter-paul2.js, peter-paul3.js, peter-paul4.js, peter-paul5.js, tori1.js, tori2.js,
                                    tori3.js, tori4.js, varun1.js, varun2.js, varun3.js, varun4.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   15/09/2021, 13:37:27
DURATION:                           1 hour, 30 minutes, 3.778 seconds

RANKINGS:
╔═══════╤════════╤═════════════╤══════════╤══════════╤══════════════╤══════╗
║ Place │ Points │ Name        │ Total    │ Best run │ Best compile │ Size ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 1     │ 25     │ aman1       │ 4.029ms  │ 4.017ms  │ 0.013ms      │ 218  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ ji1         │ 4.093ms  │ 4.080ms  │ 0.013ms      │ 91   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ bram3       │ 4.132ms  │ 4.119ms  │ 0.014ms      │ 294  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ varun2      │ 4.132ms  │ 4.118ms  │ 0.014ms      │ 368  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 25     │ peter-paul5 │ 4.215ms  │ 4.200ms  │ 0.015ms      │ 179  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 6     │ 8      │ tori3       │ 4.271ms  │ 4.257ms  │ 0.014ms      │ 244  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 8      │ irene3      │ 4.276ms  │ 4.262ms  │ 0.014ms      │ 279  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 8      │ lars1       │ 4.281ms  │ 4.267ms  │ 0.014ms      │ 269  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 9     │ 2      │ lee1        │ 5.493ms  │ 5.478ms  │ 0.015ms      │ 360  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │ 2      │ hossein1    │ 5.654ms  │ 5.642ms  │ 0.012ms      │ 64   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 11    │        │ patrick1    │ 6.422ms  │ 6.408ms  │ 0.014ms      │ 214  ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │        │ anuradha1   │ 6.502ms  │ 6.487ms  │ 0.015ms      │ 88   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║ 13    │        │ mettin1     │ 10.492ms │ 10.478ms │ 0.014ms      │ 50   ║
╟───────┼────────┼─────────────┼──────────┼──────────┼──────────────┼──────╢
║       │        │ jmulders1   │ 10.613ms │ 10.599ms │ 0.013ms      │ 50   ║
╚═══════╧════════╧═════════════╧══════════╧══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              peter-paul2.js, varun3.js, varun1.js, lars3.js, irene1.js, peter-paul4.js, tori4.js, hossein2.js, patrick3.js,
                                    patrick2.js, peter-paul1.js, tori2.js, ji2.js, varun4.js, irene2.js, bram4.js, bram2.js, tori1.js, peter-paul3.js,
                                    lars2.js

CODEGOLF AWARD:                     peter-paul3.js with 49 bytes

FAILED SOLUTIONS:                   bram1.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬──────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬──────┐
│ (index) │     solution     │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs │
├─────────┼──────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼──────┤
│    0    │    'aman1.js'    │ 4.029354000114836  │ 4.016704000066966  │ 0.01265000004786998  │ 218  │ 'successfully' │ 223.80933700000242 │    false     │ false  │        null        │ 8900 │
│    1    │     'ji1.js'     │ 4.093225999851711  │ 4.080321000074036  │ 0.012904999777674675 │  91  │ 'successfully' │ 317.34413499999937 │    false     │ false  │        null        │ 8900 │
│    2    │    'bram3.js'    │ 4.132160999812186  │ 4.1185079999268055 │ 0.013652999885380268 │ 294  │ 'successfully' │ 262.18756399999984 │    false     │ false  │        null        │ 8900 │
│    3    │   'varun2.js'    │ 4.132332999957725  │ 4.118304000003263  │ 0.014028999954462051 │ 368  │ 'successfully' │ 254.9151920000004  │    false     │ false  │        null        │ 8900 │
│    4    │ 'peter-paul5.js' │ 4.2148870003875345 │ 4.200034000212327  │ 0.014853000175207853 │ 179  │ 'successfully' │ 135.82768399999986 │    false     │ false  │        null        │ 8900 │
│    5    │    'tori3.js'    │ 4.271224000025541  │  4.25730499997735  │ 0.013919000048190355 │ 244  │ 'successfully' │ 252.10102299999926 │    false     │ false  │        null        │ 8900 │
│    6    │   'irene3.js'    │ 4.275866999756545  │  4.26201399974525  │ 0.01385300001129508  │ 279  │ 'successfully' │ 132.75324199999886 │    false     │ false  │        null        │ 8900 │
│    7    │    'lars1.js'    │ 4.281046000542119  │ 4.266894000582397  │ 0.014151999959722161 │ 269  │ 'successfully' │ 250.4461310000006  │    false     │ false  │        null        │ 8900 │
│    8    │ 'peter-paul2.js' │ 4.3197300005704165 │ 4.304635000415146  │  0.0150950001552701  │ 263  │ 'successfully' │ 132.41069300000163 │    false     │ false  │        null        │ 8900 │
│    9    │   'varun3.js'    │ 4.383045999566093  │  4.36944599985145  │ 0.013599999714642763 │ 245  │ 'successfully' │ 259.26368300000104 │    false     │ false  │        null        │ 8900 │
│   10    │   'varun1.js'    │ 4.417646999936551  │ 4.403843000065535  │ 0.013803999871015549 │ 236  │ 'successfully' │ 252.08771599999818 │    false     │ false  │        null        │ 8900 │
│   11    │    'lars3.js'    │ 4.530303000006825  │  4.5167430001311   │ 0.013559999875724316 │ 252  │ 'successfully' │ 256.8085350000001  │    false     │ false  │        null        │ 8900 │
│   12    │   'irene1.js'    │ 4.656310999998823  │ 4.642433000029996  │ 0.01387799996882677  │ 279  │ 'successfully' │  134.371611999999  │    false     │ false  │        null        │ 8900 │
│   13    │ 'peter-paul4.js' │ 4.693226000061259  │ 4.677673999918625  │ 0.015552000142633915 │ 180  │ 'successfully' │ 135.23740700000053 │    false     │ false  │        null        │ 8900 │
│   14    │    'tori4.js'    │ 5.026387999765575  │ 5.012583999894559  │ 0.013803999871015549 │ 255  │ 'successfully' │ 253.0434389999973  │    false     │ false  │        null        │ 8900 │
│   15    │    'lee1.js'     │ 5.492881000041962  │ 5.478236000053585  │ 0.014644999988377094 │ 360  │ 'successfully' │ 654.9611860000005  │    false     │ false  │        null        │ 8900 │
│   16    │  'hossein1.js'   │ 5.654341999907047  │ 5.642258999869227  │ 0.012083000037819147 │  64  │ 'successfully' │ 160.11782699999821 │    false     │ false  │        null        │ 8900 │
│   17    │  'hossein2.js'   │ 5.7869079996598884 │ 5.773284999653697  │ 0.013623000006191432 │ 248  │ 'successfully' │ 153.49334699999963 │    false     │ false  │        null        │ 8900 │
│   18    │  'patrick1.js'   │ 6.422320999903604  │ 6.408037999877706  │ 0.014283000025898218 │ 214  │ 'successfully' │ 282.9570379999968  │    false     │ false  │        null        │ 8900 │
│   19    │  'anuradha1.js'  │ 6.502228999976069  │ 6.486963000148535  │ 0.01526599982753396  │  88  │ 'successfully' │ 176.32583599999998 │    false     │ false  │        null        │ 8900 │
│   20    │  'patrick3.js'   │ 6.627525000018068  │ 6.612801000010222  │ 0.014724000007845461 │ 441  │ 'successfully' │ 372.26646999999866 │    false     │ false  │        null        │ 8900 │
│   21    │  'patrick2.js'   │ 7.503556000068784  │ 7.489196999929845  │ 0.014359000138938427 │ 469  │ 'successfully' │     380.11276      │    false     │ false  │        null        │ 8900 │
│   22    │ 'peter-paul1.js' │ 7.989590999670327  │ 7.976378999650478  │ 0.013212000019848347 │  51  │ 'successfully' │ 141.56561499999953 │    false     │ false  │        null        │ 8900 │
│   23    │    'tori2.js'    │ 8.049612999893725  │ 8.035071999765933  │ 0.014541000127792358 │ 235  │ 'successfully' │ 134.00720700000238 │    false     │ false  │        null        │ 8900 │
│   24    │     'ji2.js'     │ 9.977484999923036  │ 9.964094999944791  │ 0.013389999978244305 │  64  │ 'successfully' │ 150.13424099999975 │    false     │ false  │        null        │ 8900 │
│   25    │   'varun4.js'    │ 10.423517000395805 │ 10.40987699991092  │ 0.013640000484883785 │  50  │ 'successfully' │ 168.54861299999902 │    false     │ false  │        null        │ 8900 │
│   26    │   'mettin1.js'   │ 10.492084000026807 │ 10.47842500009574  │ 0.013658999931067228 │  50  │ 'successfully' │ 168.7044249999999  │    false     │ false  │        null        │ 8900 │
│   27    │   'irene2.js'    │ 10.508281999733299 │ 10.495116999838501 │ 0.013164999894797802 │  50  │ 'successfully' │ 165.19361000000208 │    false     │ false  │        null        │ 8900 │
│   28    │    'bram4.js'    │ 10.531280999537557 │ 10.517913999967277 │ 0.013366999570280313 │  51  │ 'successfully' │ 167.51146700000027 │    false     │ false  │        null        │ 8900 │
│   29    │  'jmulders1.js'  │ 10.612589000025764 │ 10.599447000073269 │ 0.013141999952495098 │  50  │ 'successfully' │     168.887111     │    false     │ false  │        null        │ 8900 │
│   30    │    'bram2.js'    │ 12.729053999995813 │ 12.714913999894634 │ 0.014140000101178885 │  96  │ 'successfully' │ 264.06960400000025 │    false     │ false  │        null        │ 8900 │
│   31    │    'tori1.js'    │ 39.285312999854796 │ 39.270627999911085 │ 0.014684999943710864 │  59  │ 'successfully' │ 178.45072399999844 │    false     │ false  │        null        │ 8900 │
│   32    │ 'peter-paul3.js' │ 121.55644499999471 │ 121.53387299994938 │ 0.022572000045329332 │  49  │ 'successfully' │ 279.0924690000029  │    false     │ false  │        null        │ 8900 │
│   33    │    'lars2.js'    │ 139.17545199999586 │ 139.15178600000218 │ 0.023665999993681908 │  52  │ 'successfully' │ 425.75768499999685 │    false     │ false  │        null        │ 8900 │
│   34    │    'bram1.js'    │        null        │        null        │         null         │ 110  │ 'successfully' │ 3.1044959999999264 │    false     │  true  │ 'Incorrect result' │  0   │
└─────────┴──────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴──────┘
```
