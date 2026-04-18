// src/utils/questionData.js
// Curated Codeforces problems from cf_links.txt
// Format: { id, title, difficulty, topic, tags, link, contestId, index, hint }

export const TOPICS = [
  'Bit-Manipulation',
  'Hashing',
  'Binary Search',
  'Strings',
  'GCD and Prime Numbers',
  'Trees',
  'Matrix/Grids',
  'Games',
  'Sortings',
];

export const LEVELS = [800, 900, 1000, 1200, 1300, 1400, 1500];

function q(contestId, index, title, difficulty, topic, tags, hint = '') {
  return {
    id: `${contestId}-${index}`,
    title,
    difficulty,
    topic,
    tags,
    hint,
    link: `https://codeforces.com/problemset/problem/${contestId}/${index}`,
    contestId,
    index,
  };
}

export const ALL_QUESTIONS = [

  // ══════════════════════════════════════════
  // BIT-MANIPULATION
  // ══════════════════════════════════════════

  // 800
  q(71   , 'A',   'Way Too Long Words',                                                  800,   'Bit-Manipulation',       ['implementation'],                                                              'If length > 10 → compress using first + count + last'),
  q(231  , 'A',   'Team',                                                                800,   'Bit-Manipulation',       ['implementation'],                                                              'Count how many 1s per row'),
  q(158  , 'A',   'Next Round',                                                          800,   'Bit-Manipulation',       ['implementation'],                                                              'Find k-th score, count ≥ that (ignore zeros carefully)'),
  q(50   , 'A',   'Domino piling',                                                       800,   'Bit-Manipulation',       ['implementation'],                                                              'Max dominoes = total cells / 2'),
  q(263  , 'A',   'Beautiful Matrix',                                                    800,   'Bit-Manipulation',       ['implementation'],                                                              'Find position of 1 → distance to center (3,3)'),
  q(266  , 'A',   'Stones on the Table',                                                 800,   'Bit-Manipulation',       ['implementation'],                                                              'Count adjacent equal characters'),
  q(112  , 'A',   'Petya and Strings',                                                   800,   'Bit-Manipulation',       ['implementation'],                                                              'Case-insensitive string comparison'),
  // 900
  q(282  , 'A',   'Bit++',                                                               900,   'Bit-Manipulation',       ['implementation'],                                                              'Just track +1 / -1 operations'),
  q(734  , 'A',   'Anton and Danik',                                                     900,   'Bit-Manipulation',       ['implementation'],                                                              'Count \'A\' vs \'D\''),
  q(236  , 'A',   'Boy or Girl',                                                         900,   'Bit-Manipulation',       ['implementation'],                                                              'Count distinct characters'),
  q(791  , 'A',   'Bear and Big Brother',                                                900,   'Bit-Manipulation',       ['implementation'],                                                              'Loop until Limak > Bob'),
  q(59   , 'A',   'Word',                                                                900,   'Bit-Manipulation',       ['implementation'],                                                              'Count uppercase vs lowercase'),
  q(41   , 'A',   'Translation',                                                         900,   'Bit-Manipulation',       ['implementation'],                                                              'Reverse one string and compare'),
  // 1000
  q(266  , 'B',   'Queue at the School',                                                 1000,  'Bit-Manipulation',       ['implementation'],                                                              'Simulate swaps for t seconds'),
  q(339  , 'A',   'Helpful Maths',                                                       1000,  'Bit-Manipulation',       ['implementation'],                                                              'Extract numbers → sort → rebuild string'),
  q(208  , 'A',   'Dubstep',                                                             1000,  'Bit-Manipulation',       ['implementation'],                                                              'Replace "WUB" with spaces, clean extras'),
  q(271  , 'A',   'Beautiful Year',                                                      1000,  'Bit-Manipulation',       ['implementation'],                                                              'Check digits uniqueness in loop'),
  q(344  , 'A',   'Magnets',                                                             1000,  'Bit-Manipulation',       ['implementation'],                                                              'Count transitions between groups'),
  // 1200
  q(118  , 'A',   'Epic Game',                                                           1200,  'Bit-Manipulation',       ['implementation'],                                                              'Repeated gcd subtraction → simulate'),
  q(467  , 'A',   'George and Accommodation',                                            1200,  'Bit-Manipulation',       ['implementation'],                                                              'Check if p + 2 ≤ q'),
  q(977  , 'A',   'Wrong Subtraction',                                                   1200,  'Bit-Manipulation',       ['implementation'],                                                              'If last digit = 0 → divide, else subtract'),
  q(96   , 'A',   'Football',                                                            1200,  'Bit-Manipulation',       ['implementation'],                                                              'Check for 7 consecutive same chars'),
  q(785  , 'A',   'Anton and Polyhedrons',                                               1200,  'Bit-Manipulation',       ['implementation'],                                                              'Map shapes → faces → sum'),
  // 1300
  q(580  , 'A',   'Kefa and First Steps',                                                1300,  'Bit-Manipulation',       ['implementation'],                                                              'Longest non-decreasing subarray'),
  q(230  , 'B',   'T-primes',                                                            1300,  'Bit-Manipulation',       ['implementation'],                                                              'Perfect square + prime check'),
  q(492  , 'B',   'Vanya and Lanterns',                                                  1300,  'Bit-Manipulation',       ['implementation'],                                                              'Sort → max gap + edge cases'),
  q(337  , 'A',   'Puzzles',                                                             1300,  'Bit-Manipulation',       ['implementation'],                                                              'Sort → sliding window min difference'),
  // 1400
  q(456  , 'A',   'Laptops',                                                             1400,  'Bit-Manipulation',       ['implementation'],                                                              'Sort by price → check quality inconsistency'),
  q(160  , 'A',   'Twins',                                                               1400,  'Bit-Manipulation',       ['implementation'],                                                              'Take largest coins first (greedy)'),
  q(136  , 'A',   'Presents',                                                            1400,  'Bit-Manipulation',       ['implementation'],                                                              'Reverse mapping (who gave gift to whom)'),
  q(441  , 'A',   'Valera and Antique Items',                                            1400,  'Bit-Manipulation',       ['implementation'],                                                              'Check if any price < v'),
  // 1500
  q(149  , 'A',   'Business Trip',                                                       1500,  'Bit-Manipulation',       ['implementation'],                                                              'Sort months descending → pick until ≥ k'),
  q(337  , 'B',   'Routine Problem',                                                     1500,  'Bit-Manipulation',       ['implementation'],                                                              'Fraction comparison → reduce using gcd'),
  q(489  , 'B',   'BerSU Ball',                                                          1500,  'Bit-Manipulation',       ['implementation'],                                                              'Sort both arrays → greedy pairing'),
  q(474  , 'B',   'Worms',                                                               1500,  'Bit-Manipulation',       ['implementation'],                                                              'Prefix sum + binary search'),

  // ══════════════════════════════════════════
  // HASHING
  // ══════════════════════════════════════════

  // 800
  q(443  , 'A',   'Anton and Letters',                                                   800,   'Hashing',                ['implementation'],                                                              'Use a set to count distinct lowercase letters'),
  q(228  , 'A',   'Is your horseshoe on the other hoof?',                                800,   'Hashing',                ['implementation'],                                                              'Count distinct → answer = duplicates'),
  q(236  , 'A',   'Boy or Girl',                                                         800,   'Hashing',                ['implementation'],                                                              'Distinct characters using set'),
  q(271  , 'A',   'Beautiful Year',                                                      800,   'Hashing',                ['implementation'],                                                              'Check uniqueness of digits with set'),
  // 900
  q(32   , 'B',   'Borze',                                                               900,   'Hashing',                ['implementation'],                                                              'Parse string carefully (not pure hashing but pattern parsing)'),
  q(707  , 'A',   'Brain\'s Photos',                                                     900,   'Hashing',                ['implementation'],                                                              'Track colors using condition / set'),
  q(855  , 'A',   'Tom Riddle’s Diary',                                                  900,   'Hashing',                ['implementation'],                                                              'Use set to detect duplicates while reading'),
  q(918  , 'B',   'Radio Station',                                                       900,   'Hashing',                ['implementation'],                                                              'Map IP → name, then lookup'),
  // 1000
  q(4    , 'C',   'Registration System',                                                 1000,  'Hashing',                ['implementation'],                                                              'Use map<string, count> to handle duplicates'),
  q(499  , 'B',   'Lecture',                                                             1000,  'Hashing',                ['implementation'],                                                              'Store pairs in map → pick shorter string'),
  q(43   , 'A',   'Football',                                                            1000,  'Hashing',                ['implementation'],                                                              'Count frequency of team names'),
  q(141  , 'A',   'Amusing Joke',                                                        1000,  'Hashing',                ['implementation'],                                                              'Frequency match of characters'),
  // 1200
  q(500  , 'A',   'New Year Transportation',                                             1200,  'Hashing',                ['implementation'],                                                              'Not pure hashing (skip if needed)'),
  q(208  , 'A',   'Dubstep',                                                             1200,  'Hashing',                ['implementation'],                                                              'String manipulation + cleanup'),
  q(686  , 'A',   'Free Ice Cream',                                                      1200,  'Hashing',                ['implementation'],                                                              'Track state (not heavy hashing)'),
  q(520  , 'A',   'Pangram',                                                             1200,  'Hashing',                ['implementation'],                                                              'Use set → check size = 26'),
  // 1300
  q(1399 , 'A',   'Remove Smallest',                                                     1300,  'Hashing',                ['implementation'],                                                              'Sort + check differences (not pure hashing but good combo)'),
  q(977  , 'C',   'Less or Equal',                                                       1300,  'Hashing',                ['implementation'],                                                              'Sort + careful boundary logic'),
  q(1462 , 'B',   'Last Year’s Substring',                                               1300,  'Hashing',                ['implementation'],                                                              'Try prefix + suffix combinations'),
  q(118  , 'B',   'Present from Lena',                                                   1300,  'Hashing',                ['implementation'],                                                              'Pattern printing'),
  // 1400
  q(1520 , 'D',   'Same Differences',                                                    1400,  'Hashing',                ['implementation'],                                                              'Store a[i] - i frequency in map'),
  q(1399 , 'C',   'Boats Competition',                                                   1400,  'Hashing',                ['implementation'],                                                              'Frequency + try all possible sums'),
  q(1512 , 'C',   'A-B Palindrome',                                                      1400,  'Hashing',                ['implementation'],                                                              'Two pointers + constraints'),
  q(1368 , 'B',   'Codeforces Subsequences',                                             1400,  'Hashing',                ['implementation'],                                                              'Frequency distribution logic'),
  // 1500
  q(1520 , 'A',   'Do Not Be Distracted!',                                               1500,  'Hashing',                ['implementation'],                                                              'Track visited characters with set'),
  q(1490 , 'C',   'Sum of Cubes',                                                        1500,  'Hashing',                ['implementation'],                                                              'Use set of cubes for fast lookup'),
  q(1472 , 'D',   'Even-Odd Game',                                                       1500,  'Hashing',                ['implementation'],                                                              'Sorting + greedy (not pure hashing)'),
  q(1462 , 'D',   'Add to Neighbour and Remove',                                         1500,  'Hashing',                ['implementation'],                                                              'Try partition sums + frequency'),

  // ══════════════════════════════════════════
  // BINARY SEARCH
  // ══════════════════════════════════════════

  // 800
  q(706  , 'B',   'Interesting drink',                                                   800,   'Binary Search',          ['implementation'],                                                              'Sort prices → for each query, find rightmost ≤ x'),
  q(474  , 'B',   'Worms',                                                               800,   'Binary Search',          ['implementation'],                                                              'Prefix sum → find pile using binary search'),
  q(977  , 'C',   'Less or Equal',                                                       800,   'Binary Search',          ['implementation'],                                                              'Sort → check k-th element carefully'),
  // 900
  q(1352 , 'C',   'K-th Not Divisible by n',                                             900,   'Binary Search',          ['implementation'],                                                              'Count numbers not divisible → derive formula or BS'),
  q(492  , 'B',   'Vanya and Lanterns',                                                  900,   'Binary Search',          ['implementation'],                                                              'Sort → max gap (can also think as BS radius)'),
  q(702  , 'A',   'Maximum Increase',                                                    900,   'Binary Search',          ['implementation'],                                                              'Linear, but helps build monotonic thinking'),
  // 1000
  q(371  , 'C',   'Hamburgers',                                                          1000,  'Binary Search',          ['implementation'],                                                              'Binary search answer (max burgers)'),
  q(189  , 'A',   'Cut Ribbon',                                                          1000,  'Binary Search',          ['implementation'],                                                              'DP primary, but think feasibility'),
  q(448  , 'A',   'Rewards',                                                             1000,  'Binary Search',          ['implementation'],                                                              'Simple math (warmup break problem)'),
  // 1200
  q(670  , 'D1',  'Magic Powder - 1',                                                    1200,  'Binary Search',          ['implementation'],                                                              'Check if x products possible → BS on x'),
  q(459  , 'B',   'Pashmak and Flowers',                                                 1200,  'Binary Search',          ['implementation'],                                                              'Sorting + counting extremes'),
  q(116  , 'A',   'Tram',                                                                1200,  'Binary Search',          ['implementation'],                                                              'Simulation (easy break)'),
  // 1300
  q(363  , 'B',   'Fence',                                                               1300,  'Binary Search',          ['implementation'],                                                              'Sliding window (but think optimization patterns)'),
  q(478  , 'B',   'Random Teams',                                                        1300,  'Binary Search',          ['implementation'],                                                              'Math + combinations'),
  q(20   , 'C',   'Dijkstra?',                                                           1300,  'Binary Search',          ['implementation'],                                                              'Not BS, but useful contrast'),
  // 1400
  q(1201 , 'C',   'Maximum Median',                                                      1400,  'Binary Search',          ['implementation'],                                                              'Binary search median → check cost'),
  q(812  , 'C',   'Sagheer and Nubian Market',                                           1400,  'Binary Search',          ['implementation'],                                                              'Sort + BS on number of items'),
  q(1118 , 'B',   'Tanya and Candies',                                                   1400,  'Binary Search',          ['implementation'],                                                              'Prefix sums (not pure BS, but pattern mix)'),
  // 1500
  q(1304 , 'C',   'Air Conditioner',                                                     1500,  'Binary Search',          ['implementation'],                                                              'Maintain feasible range (interval logic)'),
  q(1191 , 'C',   'Tokitsukaze, CSL and Stone Game',                                     1500,  'Binary Search',          ['implementation'],                                                              'Group processing + math'),
  q(1359 , 'C',   'Mixing Water',                                                        1500,  'Binary Search',          ['implementation'],                                                              'Binary search optimal pours'),

  // ══════════════════════════════════════════
  // STRINGS
  // ══════════════════════════════════════════

  // 800
  q(112  , 'A',   'Petya and Strings',                                                   800,   'Strings',                ['implementation'],                                                              'Convert both strings to same case → compare'),
  q(71   , 'A',   'Way Too Long Words',                                                  800,   'Strings',                ['implementation'],                                                              'Compress if length > 10'),
  q(59   , 'A',   'Word',                                                                800,   'Strings',                ['implementation'],                                                              'Count uppercase vs lowercase'),
  q(41   , 'A',   'Translation',                                                         800,   'Strings',                ['implementation'],                                                              'Reverse string and compare'),
  q(281  , 'A',   'Word Capitalization',                                                 800,   'Strings',                ['implementation'],                                                              'Only first character changes'),
  // 900
  q(266  , 'B',   'Queue at the School',                                                 900,   'Strings',                ['implementation'],                                                              'Simulate swaps in string'),
  q(734  , 'A',   'Anton and Danik',                                                     900,   'Strings',                ['implementation'],                                                              'Count occurrences'),
  q(208  , 'A',   'Dubstep',                                                             900,   'Strings',                ['implementation'],                                                              'Replace "WUB" → handle extra spaces'),
  q(443  , 'A',   'Anton and Letters',                                                   900,   'Strings',                ['implementation'],                                                              'Extract only lowercase letters → use set'),
  // 1000
  q(339  , 'A',   'Helpful Maths',                                                       1000,  'Strings',                ['implementation'],                                                              'Split → sort → join'),
  q(266  , 'A',   'Stones on the Table',                                                 1000,  'Strings',                ['implementation'],                                                              'Count consecutive equal chars'),
  q(110  , 'A',   'Nearly Lucky Number',                                                 1000,  'Strings',                ['implementation'],                                                              'Count lucky digits (4,7)'),
  q(118  , 'A',   'String Task',                                                         1000,  'Strings',                ['implementation'],                                                              'Remove vowels + lowercase + add dots'),
  // 1200
  q(96   , 'A',   'Football',                                                            1200,  'Strings',                ['implementation'],                                                              'Check 7 consecutive same chars'),
  q(520  , 'A',   'Pangram',                                                             1200,  'Strings',                ['implementation'],                                                              'Check if all 26 letters present'),
  q(318  , 'A',   'Even Odds',                                                           1200,  'Strings',                ['implementation'],                                                              'Math + indexing (light string break)'),
  q(131  , 'A',   'cAPS lOCK',                                                           1200,  'Strings',                ['implementation'],                                                              'Toggle case based on condition'),
  // 1300
  q(580  , 'A',   'Kefa and First Steps',                                                1300,  'Strings',                ['implementation'],                                                              'Longest non-decreasing segment'),
  q(282  , 'A',   'Bit++',                                                               1300,  'Strings',                ['implementation'],                                                              'Operation parsing'),
  q(43   , 'A',   'Football',                                                            1300,  'Strings',                ['implementation'],                                                              'Frequency of strings'),
  q(160  , 'A',   'Twins',                                                               1300,  'Strings',                ['implementation'],                                                              'Greedy (break from strings but useful)'),
  // 1400
  q(476  , 'B',   'Dreamoon and WiFi',                                                   1400,  'Strings',                ['implementation'],                                                              'Count possibilities → probability'),
  q(514  , 'A',   'Chewbaсca and Number',                                                1400,  'Strings',                ['implementation'],                                                              'Replace digits greedily'),
  q(118  , 'B',   'Present from Lena',                                                   1400,  'Strings',                ['implementation'],                                                              'Pattern printing'),
  q(271  , 'B',   'Prime Matrix',                                                        1400,  'Strings',                ['implementation'],                                                              'Precompute primes'),
  // 1500
  q(1462 , 'B',   'Last Year’s Substring',                                               1500,  'Strings',                ['implementation'],                                                              'Check prefix + suffix combinations'),
  q(1512 , 'C',   'A-B Palindrome',                                                      1500,  'Strings',                ['implementation'],                                                              'Two pointers + constraints'),
  q(1530 , 'B',   'Putting Plates',                                                      1500,  'Strings',                ['implementation'],                                                              'Pattern construction'),
  q(1092 , 'C',   'Prefixes and Suffixes',                                               1500,  'Strings',                ['implementation'],                                                              'Reconstruct original string'),

  // ══════════════════════════════════════════
  // GCD AND PRIME NUMBERS
  // ══════════════════════════════════════════

  // 800
  q(977  , 'A',   'Wrong Subtraction',                                                   800,   'GCD and Prime Numbers',  ['implementation'],                                                              'Not pure GCD, but number manipulation basics'),
  q(1374 , 'A',   'Required Remainder',                                                  800,   'GCD and Prime Numbers',  ['implementation'],                                                              'Work backward using modulo'),
  q(707  , 'A',   'Brain\'s Photos',                                                     800,   'GCD and Prime Numbers',  ['implementation'],                                                              'Not prime — warm-up break'),
  q(630  , 'A',   'Again Twenty Five!',                                                  800,   'GCD and Prime Numbers',  ['implementation'],                                                              'Pattern observation (last digits fixed)'),
  // 900
  q(148  , 'A',   'Insomnia cure',                                                       900,   'GCD and Prime Numbers',  ['implementation'],                                                              'Count multiples → inclusion idea'),
  q(80   , 'A',   'Panoramix\'s Prediction',                                             900,   'GCD and Prime Numbers',  ['implementation'],                                                              'Find next prime after n'),
  q(472  , 'A',   'Design Tutorial: Learn from Math',                                    900,   'GCD and Prime Numbers',  ['implementation'],                                                              'Split into two composite numbers'),
  q(236  , 'A',   'Boy or Girl',                                                         900,   'GCD and Prime Numbers',  ['implementation'],                                                              'Not prime — set usage (light break)'),
  // 1000
  q(230  , 'B',   'T-primes',                                                            1000,  'GCD and Prime Numbers',  ['implementation'],                                                              'Perfect square + prime check of sqrt'),
  q(26   , 'A',   'Almost Prime',                                                        1000,  'GCD and Prime Numbers',  ['implementation'],                                                              'Count numbers with exactly 2 distinct primes'),
  q(785  , 'A',   'Anton and Polyhedrons',                                               1000,  'GCD and Prime Numbers',  ['implementation'],                                                              'Not prime — break problem'),
  q(271  , 'A',   'Beautiful Year',                                                      1000,  'GCD and Prime Numbers',  ['implementation'],                                                              'Not prime — digit uniqueness'),
  // 1200
  q(1216 , 'D',   'Swords',                                                              1200,  'GCD and Prime Numbers',  ['implementation'],                                                              'Take gcd of differences'),
  q(75   , 'C',   'Modified GCD',                                                        1200,  'GCD and Prime Numbers',  ['implementation'],                                                              'Precompute divisors of gcd'),
  q(1245 , 'A',   'Good ol\' Numbers Coloring',                                          1200,  'GCD and Prime Numbers',  ['implementation'],                                                              'If gcd(a,b) == 1 → YES'),
  q(1478 , 'B',   'Nezzar and Lucky Number',                                             1200,  'GCD and Prime Numbers',  ['implementation'],                                                              'Try subtracting multiples'),
  // 1300
  q(1030 , 'A',   'In Search of an Easy Problem',                                        1300,  'GCD and Prime Numbers',  ['implementation'],                                                              'Not GCD — quick check'),
  q(1498 , 'A',   'GCD Sum',                                                             1300,  'GCD and Prime Numbers',  ['implementation'],                                                              'Iterate until gcd(n, sum_digits(n)) > 1'),
  q(1612 , 'C',   'Chat Ban',                                                            1300,  'GCD and Prime Numbers',  ['implementation'],                                                              'Binary search + math'),
  q(1360 , 'D',   'Buying Shovels',                                                      1300,  'GCD and Prime Numbers',  ['implementation'],                                                              'Find divisor ≤ k'),
  // 1400
  q(1343 , 'A',   'Candies',                                                             1400,  'GCD and Prime Numbers',  ['implementation'],                                                              'Try k such that n divisible by (2^k -1)'),
  q(1350 , 'B',   'Orac and Models',                                                     1400,  'GCD and Prime Numbers',  ['implementation'],                                                              'Divisor-based transitions'),
  q(1370 , 'C',   'Number Game',                                                         1400,  'GCD and Prime Numbers',  ['implementation'],                                                              'Prime factorization + game logic'),
  q(1454 , 'D',   'Number into Sequence',                                                1400,  'GCD and Prime Numbers',  ['implementation'],                                                              'Prime factorization → max exponent'),
  // 1500
  q(1475 , 'G',   'Strange Beauty',                                                      1500,  'GCD and Prime Numbers',  ['implementation'],                                                              'Frequency over multiples'),
  q(1744 , 'E1',  'Divisible Numbers',                                                   1500,  'GCD and Prime Numbers',  ['implementation'],                                                              'Work with divisors and multiples'),
  q(1294 , 'C',   'Product of Three Numbers',                                            1500,  'GCD and Prime Numbers',  ['implementation'],                                                              'Find 3 distinct factors'),
  q(1516 , 'D',   'Cut',                                                                 1500,  'GCD and Prime Numbers',  ['implementation'],                                                              'Prime factor tracking + preprocessing'),

  // ══════════════════════════════════════════
  // TREES
  // ══════════════════════════════════════════

  // 800
  q(339  , 'B',   'Xenia and Ringroad',                                                  800,   'Trees',                  ['implementation'],                                                              'Simulation (not tree, but movement on circular structure)'),
  q(500  , 'A',   'New Year Transportation',                                             800,   'Trees',                  ['implementation'],                                                              'Treat as directed jumps → simple traversal'),
  q(510  , 'A',   'Fox And Snake',                                                       800,   'Trees',                  ['implementation'],                                                              'Pattern printing (break problem)'),
  // 900
  q(115  , 'A',   'Party',                                                               900,   'Trees',                  ['implementation'],                                                              'Build tree from manager array → find max depth'),
  q(268  , 'A',   'Games',                                                               900,   'Trees',                  ['implementation'],                                                              'Counting (break problem)'),
  q(32   , 'B',   'Borze',                                                               900,   'Trees',                  ['implementation'],                                                              'Parsing (break problem)'),
  // 1000
  q(580  , 'C',   'Kefa and Park',                                                       1000,  'Trees',                  ['implementation'],                                                              'DFS with constraint (cat count)'),
  q(404  , 'A',   'Valera and X',                                                        1000,  'Trees',                  ['implementation'],                                                              'Matrix pattern (break)'),
  q(742  , 'A',   'Arpa’s hard exam',                                                    1000,  'Trees',                  ['implementation'],                                                              'Math (break)'),
  // 1200
  q(337  , 'A',   'Puzzles',                                                             1200,  'Trees',                  ['implementation'],                                                              'Sorting (break)'),
  q(208  , 'E',   'Blood Cousins',                                                       1200,  'Trees',                  ['implementation'],                                                              'DFS + levels (advanced, try later)'),
  q(219  , 'A',   'k-String',                                                            1200,  'Trees',                  ['implementation'],                                                              'frequency (break)'),
  // 1300
  q(763  , 'A',   'Timofey and a tree',                                                  1300,  'Trees',                  ['implementation'],                                                              'Try root candidates → check color consistency'),
  q(1328 , 'E',   'Tree Queries',                                                        1300,  'Trees',                  ['implementation'],                                                              'Move nodes to parents → compare depths'),
  q(977  , 'E',   'Cyclic Components',                                                   1300,  'Trees',                  ['implementation'],                                                              'Graph + degree check'),
  // 1400
  q(545  , 'C',   'Woodcutters',                                                         1400,  'Trees',                  ['implementation'],                                                              'Greedy (not tree, but good logic)'),
  q(1092 , 'F',   'Tree with Maximum Cost',                                              1400,  'Trees',                  ['implementation'],                                                              'Rerooting DP idea'),
  q(1000 , 'E',   'We Need More Bosses',                                                 1400,  'Trees',                  ['implementation'],                                                              'Bridges + tree compression'),
  // 1500
  q(161  , 'D',   'Distance in Tree',                                                    1500,  'Trees',                  ['implementation'],                                                              'Count pairs with distance k → DP on tree'),
  q(600  , 'E',   'Lomsat gelral',                                                       1500,  'Trees',                  ['implementation'],                                                              'DSU on tree (small-to-large merging)'),
  q(1528 , 'A',   'Parsa’s Humongous Tree',                                              1500,  'Trees',                  ['implementation'],                                                              'DP on tree (choose values per node)'),

  // ══════════════════════════════════════════
  // MATRIX/GRIDS
  // ══════════════════════════════════════════

  // 800
  q(263  , 'A',   'Beautiful Matrix',                                                    800,   'Matrix/Grids',           ['implementation'],                                                              'Find position of 1 → distance to center'),
  q(59   , 'A',   'Word',                                                                800,   'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break problem)'),
  q(266  , 'A',   'Stones on the Table',                                                 800,   'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(791  , 'A',   'Bear and Big Brother',                                                800,   'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  // 900
  q(69   , 'A',   'Young Physicist',                                                     900,   'Matrix/Grids',           ['implementation'],                                                              'Sum each column → check all zero'),
  q(339  , 'A',   'Helpful Maths',                                                       900,   'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(405  , 'A',   'Gravity Flip',                                                        900,   'Matrix/Grids',           ['implementation'],                                                              'Sort columns'),
  q(707  , 'A',   'Brain\'s Photos',                                                     900,   'Matrix/Grids',           ['implementation'],                                                              'Check grid for colored cells'),
  // 1000
  q(500  , 'A',   'New Year Transportation',                                             1000,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(510  , 'A',   'Fox And Snake',                                                       1000,  'Matrix/Grids',           ['implementation'],                                                              'Print pattern row by row'),
  q(43   , 'A',   'Football',                                                            1000,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(118  , 'A',   'String Task',                                                         1000,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  // 1200
  q(96   , 'B',   'Lucky Numbers (easy version)',                                        1200,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(520  , 'A',   'Pangram',                                                             1200,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(588  , 'A',   'Duff and Meat',                                                       1200,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  // 1300
  q(500  , 'A',   'New Year Transportation',                                             1300,  'Matrix/Grids',           ['implementation'],                                                              'Graph-like traversal'),
  q(242  , 'B',   'Big Segment',                                                         1300,  'Matrix/Grids',           ['implementation'],                                                              'Not matrix (break)'),
  q(37   , 'A',   'Towers',                                                              1300,  'Matrix/Grids',           ['implementation'],                                                              'Frequency (break)'),
  // 1400
  q(377  , 'A',   'Maze',                                                                1400,  'Matrix/Grids',           ['implementation'],                                                              'DFS → block k cells'),
  q(616  , 'C',   'The Labyrinth',                                                       1400,  'Matrix/Grids',           ['implementation'],                                                              'Connected components + sizes'),
  q(520  , 'B',   'Two Buttons',                                                         1400,  'Matrix/Grids',           ['implementation'],                                                              'BFS (state transitions, not grid but similar thinking)'),
  // 1500
  q(246  , 'D',   'Colorful Graph',                                                      1500,  'Matrix/Grids',           ['implementation'],                                                              'Graph adjacency counts'),
  q(1365 , 'D',   'Solve The Maze',                                                      1500,  'Matrix/Grids',           ['implementation'],                                                              'Block bad cells → BFS from end'),
  q(1350 , 'E',   'Orac and Game of Life',                                               1500,  'Matrix/Grids',           ['implementation'],                                                              'Multi-source BFS + time layers'),

  // ══════════════════════════════════════════
  // GAMES
  // ══════════════════════════════════════════

  // 800
  q(705  , 'A',   'Hulk',                                                                800,   'Games',                  ['implementation'],                                                              'Pattern alternates (not real game, warm-up)'),
  q(734  , 'A',   'Anton and Danik',                                                     800,   'Games',                  ['implementation'],                                                              'Count wins → compare'),
  q(703  , 'A',   'Mishka and Game',                                                     800,   'Games',                  ['implementation'],                                                              'Compare scores round-wise'),
  // 900
  q(1367 , 'A',   'Short Substrings',                                                    900,   'Games',                  ['implementation'],                                                              'Not game (break)'),
  q(1373 , 'A',   'Donut Shops',                                                         900,   'Games',                  ['implementation'],                                                              'Compare two strategies'),
  q(1399 , 'A',   'Remove Smallest',                                                     900,   'Games',                  ['implementation'],                                                              'Sort + check feasibility'),
  // 1000
  q(1030 , 'A',   'In Search of an Easy Problem',                                        1000,  'Games',                  ['implementation'],                                                              'If any “hard” → outcome fixed'),
  q(268  , 'A',   'Games',                                                               1000,  'Games',                  ['implementation'],                                                              'Count matching uniforms'),
  q(734  , 'B',   'Anton and Digits',                                                    1000,  'Games',                  ['implementation'],                                                              'Greedy maximize score'),
  // 1200
  q(1191 , 'A',   'Tokitsukaze and Enhancement',                                         1200,  'Games',                  ['implementation'],                                                              'Check n % 4 → pattern'),
  q(1370 , 'C',   'Number Game',                                                         1200,  'Games',                  ['implementation'],                                                              'Prime factorization + cases'),
  q(451  , 'A',   'Game With Sticks',                                                    1200,  'Games',                  ['implementation'],                                                              'Moves = min(n, m), parity decides'),
  // 1300
  q(1195 , 'B',   'Sport Mafia',                                                         1300,  'Games',                  ['implementation'],                                                              'Math + reverse thinking'),
  q(1368 , 'A',   'C+=',                                                                 1300,  'Games',                  ['implementation'],                                                              'Simulate additions'),
  q(1472 , 'D',   'Even-Odd Game',                                                       1300,  'Games',                  ['implementation'],                                                              'Sort → alternate picking'),
  // 1400
  q(1382 , 'B',   'Sequential Nim',                                                      1400,  'Games',                  ['implementation'],                                                              'Count leading ones → parity'),
  q(1396 , 'B',   'Stoned Game',                                                         1400,  'Games',                  ['implementation'],                                                              'Largest pile vs sum of others'),
  q(1527 , 'B1',  'Palindrome Game (easy)',                                              1400,  'Games',                  ['implementation'],                                                              'Count zeros → parity decisions'),
  // 1500
  q(1527 , 'B2',  'Palindrome Game (hard)',                                              1500,  'Games',                  ['implementation'],                                                              'More cases + symmetry'),
  q(1537 , 'D',   'Deleting Divisors',                                                   1500,  'Games',                  ['implementation'],                                                              'Prime factorization + parity'),
  q(1191 , 'D',   'Tokitsukaze, CSL and Stone Game',                                     1500,  'Games',                  ['implementation'],                                                              'Reduce to known game pattern'),

  // ══════════════════════════════════════════
  // SORTINGS
  // ══════════════════════════════════════════

  // 800
  q(339  , 'A',   'Helpful Maths',                                                       800,   'Sortings',               ['implementation'],                                                              'Extract numbers → sort → rebuild'),
  q(405  , 'A',   'Gravity Flip',                                                        800,   'Sortings',               ['implementation'],                                                              'Sort column heights'),
  q(266  , 'A',   'Stones on the Table',                                                 800,   'Sortings',               ['implementation'],                                                              'Not sorting (break)'),
  // 900
  q(230  , 'A',   'Dragons',                                                             900,   'Sortings',               ['implementation'],                                                              'Sort by strength → process greedily'),
  q(160  , 'A',   'Twins',                                                               900,   'Sortings',               ['implementation'],                                                              'Sort descending → take largest first'),
  q(469  , 'A',   'I Wanna Be the Guy',                                                  900,   'Sortings',               ['implementation'],                                                              'Use set (sorting optional)'),
  // 1000
  q(337  , 'A',   'Puzzles',                                                             1000,  'Sortings',               ['implementation'],                                                              'Sort → sliding window min diff'),
  q(43   , 'A',   'Football',                                                            1000,  'Sortings',               ['implementation'],                                                              'Frequency (not sorting heavy)'),
  q(456  , 'A',   'Laptops',                                                             1000,  'Sortings',               ['implementation'],                                                              'Sort by price → check inconsistency'),
  // 1200
  q(580  , 'A',   'Kefa and First Steps',                                                1200,  'Sortings',               ['implementation'],                                                              'Not sorting (break)'),
  q(492  , 'B',   'Vanya and Lanterns',                                                  1200,  'Sortings',               ['implementation'],                                                              'Sort → check gaps'),
  q(681  , 'B',   'Economy Game',                                                        1200,  'Sortings',               ['implementation'],                                                              'Not sorting (break)'),
  // 1300
  q(149  , 'A',   'Business Trip',                                                       1300,  'Sortings',               ['implementation'],                                                              'Sort descending → pick until sum ≥ k'),
  q(500  , 'A',   'New Year Transportation',                                             1300,  'Sortings',               ['implementation'],                                                              'Not sorting (break)'),
  q(478  , 'B',   'Random Teams',                                                        1300,  'Sortings',               ['implementation'],                                                              'Math (break)'),
  // 1400
  q(1399 , 'C',   'Boats Competition',                                                   1400,  'Sortings',               ['implementation'],                                                              'Sort → try all sums → two pointers'),
  q(1360 , 'B',   'Honest Coach',                                                        1400,  'Sortings',               ['implementation'],                                                              'Sort → find min adjacent diff'),
  q(1475 , 'A',   'Odd Divisor',                                                         1400,  'Sortings',               ['implementation'],                                                              'Not sorting (break)'),
  // 1500
  q(489  , 'B',   'BerSU Ball',                                                          1500,  'Sortings',               ['implementation'],                                                              'Sort both arrays → greedy pairing'),
  q(1201 , 'C',   'Maximum Median',                                                      1500,  'Sortings',               ['implementation'],                                                              'Sort + binary search'),
  q(1359 , 'C',   'Mixing Water',                                                        1500,  'Sortings',               ['implementation'],                                                              'Binary search + math'),
];

// Build lookup map
export const ALL_QUESTIONS_MAP = {};
for (const q of ALL_QUESTIONS) {
  ALL_QUESTIONS_MAP[q.id] = q;
}

// Get questions for a specific topic + level
export function getQForTopicLevel(topic, level) {
  return ALL_QUESTIONS.filter(q => q.topic === topic && q.difficulty === level);
}

// Get all questions for a topic
export function getQuestionsByTopic(topic) {
  return ALL_QUESTIONS.filter(q => q.topic === topic);
}

// Difficulty label
export function getDifficultyLabel(level) {
  if (level <= 900)  return 'Easy';
  if (level <= 1100) return 'Medium';
  if (level <= 1300) return 'Hard';
  return 'Expert';
}

export function getDifficultyClass(level) {
  if (level <= 900)  return 'badge-easy';
  if (level <= 1100) return 'badge-medium';
  return 'badge-hard';
}

export function getTotalSolvedCount(progress) {
  let count = 0;
  for (const topic of Object.keys(progress)) {
    for (const level of Object.keys(progress[topic])) {
      count += (progress[topic][level]?.solved?.length || 0);
    }
  }
  return count;
}

// Legacy aliases used in some components
export const QUESTIONS = ALL_QUESTIONS;
export const QUESTIONS_MAP = ALL_QUESTIONS_MAP;
export function getQuestionsByTopicAndLevel(topic, level) {
  return getQForTopicLevel(topic, level);
}
