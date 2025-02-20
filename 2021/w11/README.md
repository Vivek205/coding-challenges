# Week 11 challenge

You want to display a nice table with data from a JSON API.
To do that you need to simply parse that data and create a (onedimensional) array of rows. That's what your `parseData` function will be for.

The data, however, is hierarchical (some items have children, and children could have children of their own etc.).
And theoretically the hierarchy could be infinitely deep.

Unfortunately you are dealing with a legacy API where data model is a bit odd and somewhat irregular.
And there are no backend developers that are willing to update the API for you.
So you will have to take the data as is and do all the heavy lifting yourself.

Since there is hierarchy in the data, but you want to display it as a table, you will show the hierarchy of the data by adding an indent to children.
Every level will be indented by 50 pixels.
E.g. The root level rows will have an ident of `0`, next level of `50`, then `100` etc.

## Example output
```javascript
[
  { name: 'Item 1', indent: 0, value: 42 },
  { name: 'Item 1 child 1', indent: 50, value: 42 },
  { name: 'Item 1 child 2', indent: 50, value: 70 },
  { name: 'Item 2', indent: 0, value: 70 },
  { name: 'Item 2 child 1', indent: 50, value: 70 },
  { name: 'Item 2 child 1 child 1', indent: 100, value: 70 },
  { name: 'Item 2 child 2', indent: 50, value: 70 },
  { name: 'Item 3', indent: 0, value: 70 },
]

```

## The data from API

The model of the data is a bit irregular.
* Sometimes the name of an item resides in a property `name`, sometimes `title`, but never both.
* Sometimes the value of an item resides in a property `value`, sometimes `data`, but never both.
* Sometimes children of an item reside in property `children`, sometimes `subdata`, but never both.


Example:

```javascript
const dataFromApi = [
  {
    title: 'Foo',
    data: 15,
    children: [
      {
        name: 'Bar',
        data: 12,
        subdata: [
          {
            title: 'Baz',
            value: 11
          }
        ]
      },
      {
        title: 'Lorem',
        value: 12,
      },
    ],
  },
  {
    name: 'Ipsum',
    data: 11,
  },
  {
    name: 'Dolor',
    value: 19,
    children: [
      {
        title: 'Sit',
        data: 2,
      }
    ],
  }
];

const result = [
  { name: 'Foo', indent: 0, value: 15 },
  { name: 'Bar', indent: 50, value: 12 },
  { name: 'Baz', indent: 100, value: 11 },
  { name: 'Lorem', indent: 50, value: 12 },
  { name: 'Ipsum', indent: 0, value: 11 },
  { name: 'Dolor', indent: 0, value: 19 },
  { name: 'Sit', indent: 50, value: 2 },
];


JSON.stringify(result) === JSON.stringify(parseData(dataFromApi)) // true;
```


## Upload link

[Submissions are closed]


## Results


| Place | Name       | Performance | Codegolf | Jury award | Total points |
|-------|------------|-------------|----------|------------|--------------|
| 1.    | Peter-Paul | 25          | 5        | 5          | 35           |
| 2.    | Irene      | 15          |          | 5          | 20           |
| 3.    | Lars       | 18          |          |            | 18           |
| 4.    | Aman       | 15          |          |            | 15           |
|       | Dexter     | 10          |          | 5          | 15           |
| 6.    | Joppe      | 10          |          |            | 10           |
| 7.    | Tim        | 6           |          |            | 6            |
| 8.    | Jan        | 4           |          |            | 4            |
| 9.    | Mihai      | 2           |          |            | 2            |


### Jury vote

#### Harijs
1. irene2 - clear and performant
2. peterPaul3 - well structured and clear naming
3. joppe2 - clear and readable
#### Israel
1. dexter1 for his use of generators, not seen commonly enough
2. jmulders for his quite readable one-liner chained statement (looks like something that would be in my codebases haha)
3. peterPaul1 for his creative and passionate usage of variables when obfuscating (check the submission)

### Screenshot

![2021 Week 11 results](./results.png)

### Full output log
```
EVALUATION STARTED:       Wed Mar 24 2021 11:04:58 GMT+0000 (Coordinated Universal Time)
EVALUATING CHALLENGE:     2021/w11
FOUND 33 SOLUTIONS:       aman1.js, aman2.js, aman3.js, dexter1.js, dexter2.js, dexter3.js, dexter4.js, dexter5.js, dexter6.js, dexter7.js,
                          irene1.js, irene2.js, jmulders.js, joppe1.js, joppe2.js, joppe3.js, joppe4.js, lars1.js, lars2.js, lars3.js, mihai.js,
                          peterPaul1.js, peterPaul2.js, peterPaul3.js, peterPaul4.js, peterPaul5.js, peterPaul6.js, peterPaul7.js, tim1.js,
                          tim2.js, tim3.js, tim4.js, tim5.js
EVALUATING EACH           12500 TIMES WITH 1000 TEST CASES...

Running perf checks 100%... done!

EVALUATION ENDED:         Wed Mar 24 2021 12:25:53 GMT+0000 (Coordinated Universal Time)
DURATION:                 1 hour, 20 minutes, 54.601 seconds

RANKINGS:
╔═══════╤════════╤════════════╤══════════╤══════════╤═════════╤══════════════╗
║ Place │ Points │ Name       │ Best     │ Average  │ St dev  │ Size (bytes) ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 1     │ 25     │ peterPaul5 │ 3.661ms  │ 4.311ms  │ 0.297ms │ 422          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 2     │ 18     │ lars3      │ 4.106ms  │ 4.839ms  │ 0.317ms │ 597          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 3     │ 15     │ irene2     │ 4.415ms  │ 5.057ms  │ 0.401ms │ 368          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║       │ 15     │ aman2      │ 4.530ms  │ 5.122ms  │ 0.272ms │ 383          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 5     │ 10     │ dexter3    │ 5.384ms  │ 6.169ms  │ 0.459ms │ 323          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║       │ 10     │ joppe4     │ 5.406ms  │ 6.133ms  │ 0.298ms │ 598          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 7     │ 6      │ tim3       │ 5.851ms  │ 6.570ms  │ 0.310ms │ 508          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 8     │ 4      │ jmulders   │ 9.511ms  │ 10.511ms │ 0.583ms │ 373          ║
╟───────┼────────┼────────────┼──────────┼──────────┼─────────┼──────────────╢
║ 9     │ 2      │ mihai      │ 18.489ms │ 20.003ms │ 0.808ms │ 373          ║
╚═══════╧════════╧════════════╧══════════╧══════════╧═════════╧══════════════╝

Keeping only best run from each contestant
Using 5% margin for determening ties

OMITTED FROM RANKINGS:    peterPaul3.js, peterPaul7.js, irene1.js, peterPaul4.js, peterPaul6.js, aman1.js, aman3.js, dexter6.js, lars2.js,
                          lars1.js, tim4.js, peterPaul2.js, peterPaul1.js, joppe3.js, tim2.js, tim1.js, joppe2.js, joppe1.js, tim5.js, dexter1.js,
                          dexter2.js, dexter7.js, dexter5.js, dexter4.js

CODEGOLF AWARD:           peterPaul7.js with 130 bytes

SYSTEM INFO:
NODE: v14.16.0
ARCH: x64
PLATFORM: linux
VERSION: #56-Ubuntu SMP Mon Oct 5 14:28:49 UTC 2020
MEMORY: 15.64GB
CPUS: 2 x Intel(R) Xeon(R) Gold 6140 CPU @ 2.30GHz
CPU speed: 2494MHz

RAW RESULTS:
┌─────────┬─────────────────┬────────┬────────────────────┬────────────────────┬────────────────────┬────────────────────┬─────────────────────┬──────┬───────┐
│ (index) │    solution     │ failed │       total        │      average       │        best        │       worst        │        stdev        │ size │ runs  │
├─────────┼─────────────────┼────────┼────────────────────┼────────────────────┼────────────────────┼────────────────────┼─────────────────────┼──────┼───────┤
│    0    │ 'peterPaul5.js' │ false  │ 53887.35119199031  │ 4.310988095359225  │ 3.660567000042647  │ 9.243553999811411  │ 0.2965614959070561  │ 422  │ 12500 │
│    1    │   'lars3.js'    │ false  │ 60482.42215098567  │ 4.838593772078854  │ 4.106403999961913  │ 10.197629000002053 │ 0.3172242415264082  │ 597  │ 12500 │
│    2    │ 'peterPaul3.js' │ false  │ 62057.66861997252  │ 4.964613489597802  │ 4.365766000002623  │ 27.220079999999143 │  0.330906542632592  │ 735  │ 12500 │
│    3    │ 'peterPaul7.js' │ false  │ 64656.28494501904  │ 5.172502795601523  │ 4.398516999557614  │ 25.80772499999148  │ 0.3529782514413311  │ 130  │ 12500 │
│    4    │   'irene2.js'   │ false  │ 63206.83481599737  │  5.05654678527979  │ 4.414866999955848  │ 35.11271999999008  │ 0.40085330031586675 │ 368  │ 12500 │
│    5    │   'irene1.js'   │ false  │ 64015.835536005834 │ 5.121266842880467  │ 4.467295000096783  │ 39.39362499999697  │ 0.4257438437866834  │ 354  │ 12500 │
│    6    │ 'peterPaul4.js' │ false  │ 66076.04128998826  │ 5.286083303199061  │ 4.479383999481797  │  27.5964740000054  │  0.351810626054859  │ 133  │ 12500 │
│    7    │ 'peterPaul6.js' │ false  │ 65603.12078701565  │ 5.248249662961252  │ 4.485631000017747  │ 33.34868599999754  │ 0.3922764556793131  │ 132  │ 12500 │
│    8    │   'aman2.js'    │ false  │ 64027.074714023474 │ 5.122165977121878  │ 4.529948000330478  │ 8.242073000001255  │ 0.27151584650171123 │ 383  │ 12500 │
│    9    │   'aman1.js'    │ false  │  66615.0780400031  │ 5.3292062432002485 │ 4.744074999820441  │ 12.704320999997435 │ 0.2806634719924085  │ 353  │ 12500 │
│   10    │   'aman3.js'    │ false  │ 70154.48284495715  │ 5.6123586275965724 │ 4.782465000011143  │ 12.98609399999259  │ 0.1916268111746586  │ 381  │ 12500 │
│   11    │  'dexter3.js'   │ false  │ 77111.55075200347  │ 6.168924060160278  │ 5.383872999809682  │ 41.68578799998795  │ 0.45861745181080876 │ 323  │ 12500 │
│   12    │  'dexter6.js'   │ false  │ 76615.13427799425  │  6.12921074223954  │ 5.3903829995542765 │ 33.381750000000466 │ 0.4013425600458677  │ 323  │ 12500 │
│   13    │   'joppe4.js'   │ false  │ 76668.16110098935  │ 6.133452888079148  │ 5.406261000083759  │ 10.893905000004452 │ 0.2980534162183587  │ 598  │ 12500 │
│   14    │   'lars2.js'    │ false  │ 81106.59976597806  │ 6.488527981278245  │ 5.512378999963403  │ 41.86194700001215  │ 0.4573406550664904  │ 152  │ 12500 │
│   15    │   'lars1.js'    │ false  │ 80595.57300298529  │ 6.447645840238823  │ 5.761683999560773  │ 12.821131000004243 │ 0.31231730841438365 │ 669  │ 12500 │
│   16    │    'tim3.js'    │ false  │ 82124.35588598574  │  6.56994847087886  │ 5.850715999491513  │ 11.599069999996573 │ 0.3103684648329265  │ 508  │ 12500 │
│   17    │    'tim4.js'    │ false  │  85994.1842210419  │ 6.879534737683352  │ 6.116877000080422  │ 11.767676999996183 │ 0.32158678105626154 │ 498  │ 12500 │
│   18    │ 'peterPaul2.js' │ false  │ 88750.78554596903  │ 7.100062843677523  │ 6.253812000155449  │ 30.798928000003798 │ 0.40177767920268975 │ 151  │ 12500 │
│   19    │ 'peterPaul1.js' │ false  │ 97967.64433595225  │  7.83741154687618  │  6.80725899990648  │ 73.88353200000711  │ 0.6909619811110825  │ 169  │ 12500 │
│   20    │   'joppe3.js'   │ false  │ 97550.64301698234  │ 7.804051441358587  │ 6.876038999995217  │  21.4594550000038  │ 0.38959045495762623 │ 602  │ 12500 │
│   21    │    'tim2.js'    │ false  │ 107236.43250798594 │ 8.578914600638875  │ 7.672162999864668  │ 25.190754999988712 │ 0.4081055787403016  │ 1331 │ 12500 │
│   22    │    'tim1.js'    │ false  │ 107209.34462199797 │ 8.576747569759837  │ 7.702387999976054  │ 13.10466599999927  │ 0.37340873470918845 │ 243  │ 12500 │
│   23    │  'jmulders.js'  │ false  │ 131393.31172702872 │ 10.511464938162298 │ 9.511392000014894  │ 60.58256800001254  │  0.582621528112418  │ 373  │ 12500 │
│   24    │   'joppe2.js'   │ false  │ 135122.90642799024 │ 10.809832514239218 │ 9.871405000099912  │ 69.05212199999369  │ 0.6826672546584711  │ 374  │ 12500 │
│   25    │   'joppe1.js'   │ false  │ 137567.00125901832 │ 11.005360100721466 │ 10.049341999925673 │ 63.611363999996684 │ 0.6069796890318081  │ 465  │ 12500 │
│   26    │    'tim5.js'    │ false  │ 220332.14907998365 │ 17.626571926398693 │ 16.00859500002116  │ 76.13178799999878  │ 0.7646929932060476  │ 456  │ 12500 │
│   27    │  'dexter1.js'   │ false  │ 245645.31977899204 │ 19.65162558231936  │ 17.998716000001878 │ 33.28356100000383  │ 0.6774900100392891  │ 439  │ 12500 │
│   28    │   'mihai.js'    │ false  │ 250034.63348996185 │ 20.00277067919695  │ 18.488723000045866 │ 79.78164899999683  │ 0.8079474754150057  │ 373  │ 12500 │
│   29    │  'dexter2.js'   │ false  │ 261277.40945399553 │ 20.902192756319643 │ 19.14949300000444  │  34.7977050000336  │ 0.6948374008562186  │ 190  │ 12500 │
│   30    │  'dexter7.js'   │ false  │ 554751.6233940003  │ 44.380129871520026 │ 41.38859699992463  │ 60.95635599992238  │ 1.3151544778179745  │ 133  │ 12500 │
│   31    │  'dexter5.js'   │ false  │ 558846.8122590015  │ 44.70774498072012  │ 41.636094000190496 │ 67.83917099999962  │ 1.3405854216296371  │ 212  │ 12500 │
│   32    │  'dexter4.js'   │ false  │ 561618.0586009957  │ 44.929444688079656 │ 41.82726000016555  │  65.3926920001395  │  1.329475561371958  │ 144  │ 12500 │
└─────────┴─────────────────┴────────┴────────────────────┴────────────────────┴────────────────────┴────────────────────┴─────────────────────┴──────┴───────┘
```