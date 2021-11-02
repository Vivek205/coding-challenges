# Week 42 challenge

Write a function `add` which takes in two numbers (as strings) and returns the sum, also as a string.
You might want to recall [how](https://www.wikihow.com/Add-Large-Numbers) we did it in school on the blackboard :)

*Note:* Using `BigInt` for this challenge is forbidden.

Examples:
```
add('1', '1') // returns '2'
add('9999', '9999') // returns '19998'
add('81489141787297148918947891489148971', '8417894917984718949817471897441') // returns '81497559682215133637897708961046412'
```


## Upload link

[PP Connect](https://connect.passionatepeople.io/code-challenge-submission)

## Results

| Place | Name     | Performance | Codegolf | Vote  | Total points |
|-------|----------|-------------|----------|-------|--------------|
| 1.    | Medhat   | 25          |          |       | 25           |
| 2.    | Varun    | 18          | 5        |       | 23           |
| 3.    | Aman     | 18          |          |       | 18           |
| 4.    | Lars     | 12          |          |       | 12           |
|       | Lee      | 12          |          |       | 12           |
|       | Anuradha | 12          |          |       | 12           |
| 7.    | Patrick  | 6           |          |       | 6            |
| 8.    | Hossein  | 4           |          |       | 4            |
|       | Bram     | 4           |          |       | 4            |
| 10.   | Dexter   | 1           |          |       | 1            |


### Screenshot

![2021 Week 42 podium](./podium.png)

![2021 Week 42 results](./results.png)

### Vote

Voting is ongoing. Please `/vote` in Slack.


### Full output log
```

EVALUATION STARTED:                 27/10/2021, 12:07:07
EVALUATING CHALLENGE:               2021/w42
FOUND 36 SOLUTIONS:                 aman1.js, anuradha1.js, anuradha2.js, anuradha3.js, anuradha4.js, anuradha5.js, anuradha6.js, anuradha7.js, bram1.js,
                          bram2.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, dexter5.js, hossein1.js, hossein2.js, lars1.js, lee1.js,
                          lee2.js, lee3.js, medhat1.js, medhat2.js, medhat3.js, patrick1.js, patrick2.js, patrick3.js, patrick4.js, patrick5.js,
                          patrick6.js, patrick7.js, patrick8.js, tori1.js, varun1.js, varun2.js, varun3.js
RUNNING EVALUATION FOR:             5400 SECONDS WITH 10000 TEST CASES IN EACH CYCLE...



EVALUATION ENDED:                   27/10/2021, 13:41:13
DURATION:                           1 hour, 34 minutes, 6.172 seconds

RANKINGS:
╔═══════╤════════╤═══════════╤═══════════╤═══════════╤══════════════╤══════╗
║ Place │ Points │ Name      │ Total     │ Best run  │ Best compile │ Size ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 1     │ 25     │ medhat3   │ 79.069ms  │ 79.038ms  │ 0.031ms      │ 1171 ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 2     │ 18     │ aman1     │ 83.072ms  │ 83.029ms  │ 0.043ms      │ 873  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 18     │ varun2    │ 86.962ms  │ 86.932ms  │ 0.030ms      │ 602  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 4     │ 12     │ lars1     │ 92.723ms  │ 92.692ms  │ 0.031ms      │ 1635 ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 12     │ lee3      │ 93.197ms  │ 93.167ms  │ 0.030ms      │ 640  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 12     │ anuradha6 │ 95.773ms  │ 95.744ms  │ 0.029ms      │ 357  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 7     │ 6      │ patrick8  │ 104.577ms │ 104.551ms │ 0.026ms      │ 189  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 8     │ 4      │ hossein1  │ 110.399ms │ 110.370ms │ 0.030ms      │ 574  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║       │ 4      │ bram2     │ 111.360ms │ 111.330ms │ 0.030ms      │ 822  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 10    │ 1      │ dexter5   │ 124.216ms │ 124.186ms │ 0.030ms      │ 430  ║
╟───────┼────────┼───────────┼───────────┼───────────┼──────────────┼──────╢
║ 11    │        │ tori1     │ 214.986ms │ 214.958ms │ 0.028ms      │ 537  ║
╚═══════╧════════╧═══════════╧═══════════╧═══════════╧══════════════╧══════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:              medhat2.js, anuradha7.js, patrick6.js, patrick7.js, medhat1.js, anuradha5.js, anuradha3.js, lee2.js, varun1.js,
                          anuradha4.js, anuradha2.js, varun3.js, dexter4.js, lee1.js, dexter3.js, anuradha1.js, dexter2.js, bram1.js, dexter1.js,
                          patrick1.js

ONLY CODEGOLF SOLUTIONS:            hossein2.js, patrick2.js

CODEGOLF AWARD:                     varun3.js with 174 bytes

FAILED SOLUTIONS:                   patrick3.js, patrick4.js, patrick5.js

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel Xeon Processor (Cascadelake)
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬────────────────┬────────────────────┬────────────────────┬──────────────────────┬──────┬────────────────┬────────────────────┬──────────────┬────────┬────────────────────┬──────┐
│ (index) │    solution    │       total        │      bestRun       │     bestCompile      │ size │    compiled    │   validationTime   │ onlyCodegolf │ failed │     failReason     │ runs │
├─────────┼────────────────┼────────────────────┼────────────────────┼──────────────────────┼──────┼────────────────┼────────────────────┼──────────────┼────────┼────────────────────┼──────┤
│    0    │  'medhat3.js'  │ 79.06916299974546  │  79.0380259999074  │ 0.03113699983805418  │ 1171 │ 'successfully' │ 106.24149100000068 │    false     │ false  │        null        │ 1050 │
│    1    │   'aman1.js'   │ 83.07201499957591  │ 83.02906299987808  │ 0.04295199969783425  │ 873  │ 'successfully' │ 167.32035100000212 │    false     │ false  │        null        │ 1050 │
│    2    │  'medhat2.js'  │ 83.36040700040758  │ 83.33144500013441  │ 0.028962000273168087 │ 790  │ 'successfully' │ 111.31637899999623 │    false     │ false  │        null        │ 1050 │
│    3    │  'varun2.js'   │ 86.96198500017636  │ 86.93189100013115  │ 0.030094000045210123 │ 602  │ 'successfully' │ 118.38047400000505 │    false     │ false  │        null        │ 1050 │
│    4    │   'lars1.js'   │ 92.72296099999221  │  92.6921699999948  │ 0.030790999997407198 │ 1635 │ 'successfully' │ 217.61303500000213 │    false     │ false  │        null        │ 1050 │
│    5    │   'lee3.js'    │ 93.19664399977773  │ 93.16684399964288  │ 0.02980000013485551  │ 640  │ 'successfully' │ 134.90834200000245 │    false     │ false  │        null        │ 1050 │
│    6    │ 'anuradha6.js' │ 95.77323499998602  │  95.7443110000022  │ 0.02892399998381734  │ 357  │ 'successfully' │ 127.2599700000028  │    false     │ false  │        null        │ 1050 │
│    7    │ 'anuradha7.js' │ 97.81023300006927  │ 97.78264299999864  │ 0.027590000070631504 │ 189  │ 'successfully' │ 121.82282900000064 │    false     │ false  │        null        │ 1050 │
│    8    │ 'patrick8.js'  │ 104.5765730002895  │ 104.55065899994224 │ 0.02591400034725666  │ 189  │ 'successfully' │ 135.72406200000114 │    false     │ false  │        null        │ 1050 │
│    9    │ 'patrick6.js'  │ 106.40451300051063 │ 106.37891000043601 │ 0.025603000074625015 │ 323  │ 'successfully' │ 154.1404229999971  │    false     │ false  │        null        │ 1050 │
│   10    │ 'hossein1.js'  │ 110.39929400058463 │ 110.36977700004354 │ 0.029517000541090965 │ 574  │ 'successfully' │ 138.5258560000002  │    false     │ false  │        null        │ 1050 │
│   11    │ 'patrick7.js'  │ 110.56504899961874 │ 110.53932299977168 │ 0.02572599984705448  │ 341  │ 'successfully' │ 153.76683699999558 │    false     │ false  │        null        │ 1050 │
│   12    │   'bram2.js'   │ 111.35977899981663 │ 111.32965299999341 │ 0.030125999823212624 │ 822  │ 'successfully' │ 670.0286919999999  │    false     │ false  │        null        │ 1050 │
│   13    │  'medhat1.js'  │ 112.1563070002012  │ 112.12589800031856 │ 0.030408999882638454 │ 476  │ 'successfully' │ 136.08439000000362 │    false     │ false  │        null        │ 1050 │
│   14    │ 'anuradha5.js' │ 112.52534400008153 │ 112.49542199994903 │ 0.029922000132501125 │ 425  │ 'successfully' │ 141.1050400000022  │    false     │ false  │        null        │ 1050 │
│   15    │ 'anuradha3.js' │ 113.23070200014627 │ 113.20126399997389 │ 0.029438000172376633 │ 429  │ 'successfully' │ 144.76817799999844 │    false     │ false  │        null        │ 1050 │
│   16    │   'lee2.js'    │ 116.05315399961546 │ 116.02379599958658 │ 0.02935800002887845  │ 775  │ 'successfully' │ 156.85343000000285 │    false     │ false  │        null        │ 1050 │
│   17    │  'varun1.js'   │ 116.55106999957934 │ 116.52123499987647 │ 0.029834999702870846 │ 667  │ 'successfully' │ 1067.5357440000007 │    false     │ false  │        null        │ 1050 │
│   18    │ 'anuradha4.js' │ 120.66841799998656 │ 120.64076000032946 │ 0.02765799965709448  │ 218  │ 'successfully' │ 150.97849000000133 │    false     │ false  │        null        │ 1050 │
│   19    │  'dexter5.js'  │ 124.21569899958558 │ 124.18599199992605 │ 0.02970699965953827  │ 430  │ 'successfully' │ 114.37530999999944 │    false     │ false  │        null        │ 1050 │
│   20    │ 'anuradha2.js' │ 166.70610999994096 │ 166.6736170000222  │ 0.03249299991875887  │ 721  │ 'successfully' │ 202.16434500000105 │    false     │ false  │        null        │ 1050 │
│   21    │  'varun3.js'   │ 192.0133620002307  │ 191.98587300023064 │ 0.027489000000059605 │ 174  │ 'successfully' │ 237.50142400000186 │    false     │ false  │        null        │ 1050 │
│   22    │   'tori1.js'   │ 214.9859670001315  │ 214.95767700008582 │ 0.02829000004567206  │ 537  │ 'successfully' │ 765.9362550000005  │    false     │ false  │        null        │ 1050 │
│   23    │  'dexter4.js'  │ 241.49704199982807 │ 241.46706299996004 │ 0.029978999868035316 │ 431  │ 'successfully' │ 242.57309199999872 │    false     │ false  │        null        │ 1050 │
│   24    │   'lee1.js'    │ 259.40187000017613 │ 259.37240900006145 │ 0.029461000114679337 │ 843  │ 'successfully' │ 1643.8557660000006 │    false     │ false  │        null        │ 1050 │
│   25    │  'dexter3.js'  │ 290.1440940015018  │ 290.11314300075173 │ 0.03095100075006485  │ 461  │ 'successfully' │ 281.29987299999993 │    false     │ false  │        null        │ 1050 │
│   26    │ 'anuradha1.js' │ 295.2400410006521  │ 295.21039200003725 │ 0.029649000614881516 │ 641  │ 'successfully' │ 226.19667599999957 │    false     │ false  │        null        │ 1050 │
│   27    │  'dexter2.js'  │ 302.8412470007315  │ 302.81240699999034 │ 0.028840000741183758 │ 226  │ 'successfully' │ 806.3496879999984  │    false     │ false  │        null        │ 1050 │
│   28    │   'bram1.js'   │ 315.0412620002462  │ 315.0093990000023  │ 0.031863000243902206 │ 1113 │ 'successfully' │ 199.62029899999834 │    false     │ false  │        null        │ 1050 │
│   29    │  'dexter1.js'  │ 316.4218379999511  │ 316.3925399999134  │ 0.029298000037670135 │ 491  │ 'successfully' │ 847.0652719999998  │    false     │ false  │        null        │ 1050 │
│   30    │ 'patrick1.js'  │ 349.68384099937975 │ 349.65363399963826 │ 0.030206999741494656 │ 837  │ 'successfully' │ 1846.035576000002  │    false     │ false  │        null        │ 1050 │
│   31    │ 'hossein2.js'  │        null        │        null        │         null         │ 184  │ 'successfully' │ 1942.1305659999998 │     true     │ false  │        null        │  0   │
│   32    │ 'patrick2.js'  │        null        │        null        │         null         │ 356  │ 'successfully' │ 1815.0859490000003 │     true     │ false  │        null        │  0   │
│   33    │ 'patrick3.js'  │        null        │        null        │         null         │ 184  │ 'successfully' │ 0.4122350000034203 │    false     │  true  │ 'Incorrect result' │  0   │
│   34    │ 'patrick4.js'  │        null        │        null        │         null         │ 190  │ 'successfully' │ 0.3227950000000419 │    false     │  true  │ 'Incorrect result' │  0   │
│   35    │ 'patrick5.js'  │        null        │        null        │         null         │ 232  │ 'successfully' │ 0.2738510000053793 │    false     │  true  │ 'Incorrect result' │  0   │
└─────────┴────────────────┴────────────────────┴────────────────────┴──────────────────────┴──────┴────────────────┴────────────────────┴──────────────┴────────┴────────────────────┴──────┘
```
  