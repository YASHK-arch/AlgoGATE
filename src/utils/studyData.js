// src/utils/studyData.js
// Maps the physical resources folder structure
// Subject → Topics → PDFs

export const STUDY_SUBJECTS = [
  {
    id: 'dsa_java',
    name: 'DSA (Java)',
    description: 'Data Structures & Algorithms with Java — curated notes for CP and Placements',
    icon: '☕',
    color: 'from-orange-500 to-amber-500',
    topics: [
      {
        id: 'binary-search',
        name: 'Binary Search',
        folderPath: 'NOTES/DSA_java/Binary Search',
        pdfs: [{ name: 'Binary Search - Complete', file: 'Binary Search -complete .pdf' }],
      },
      {
        id: 'bit-manipulation',
        name: 'Bit Manipulation',
        folderPath: 'NOTES/DSA_java/Bit-Manipulation',
        pdfs: [{ name: 'Bit Manipulation - 3', file: 'Bit Manipulation- 3.pdf' }],
      },
      {
        id: 'hashing',
        name: 'Hashing',
        folderPath: 'NOTES/DSA_java/Hashing',
        pdfs: [{ name: 'Hashing - Complete', file: 'Hashing -complete.pdf' }],
      },
      {
        id: 'linked-list',
        name: 'Linked List',
        folderPath: 'NOTES/DSA_java/Linked List',
        pdfs: [
          { name: 'Linked List - Part 1', file: 'Linked List - 1.pdf' },
          { name: 'Linked List - Part 2', file: 'Linked List -2.pdf' },
          { name: 'Linked List - Part 3', file: 'Linked List - 3.pdf' },
          { name: 'Linked List - Part 4', file: 'Linked List - 4.pdf' },
        ],
      },
      {
        id: 'methods-tc',
        name: 'Methods to Reduce TC',
        folderPath: 'NOTES/DSA_java/Methods to Reduce TC',
        pdfs: [
          { name: 'Carry Forward', file: 'Carry Forward.pdf' },
          { name: 'Prefix Sum', file: 'Prefix sum.pdf' },
          { name: 'Two Pointers 1', file: 'Two Pointer 1.pdf' },
        ],
      },
      {
        id: 'miscellaneous',
        name: 'Miscellaneous',
        folderPath: 'NOTES/DSA_java/Micellaneous',
        pdfs: [{ name: 'Interview 1', file: 'Interview 1.pdf' }],
      },
      {
        id: 'number-theory',
        name: 'Number Theory',
        folderPath: 'NOTES/DSA_java/Number Theory',
        pdfs: [
          { name: 'GCD', file: 'GCD.pdf' },
          { name: 'Prime Numbers', file: 'Prime numbers.pdf' },
        ],
      },
      {
        id: 'oop',
        name: 'Object Oriented Programming',
        folderPath: 'NOTES/DSA_java/Object Oriented Programming',
        pdfs: [{ name: 'OOPS Complete', file: 'OOPS COMPLETE.pdf' }],
      },
      {
        id: 'recursion',
        name: 'Recursion',
        folderPath: 'NOTES/DSA_java/Recursion',
        pdfs: [
          { name: 'Recursion - Part 1', file: 'Recursion-1.pdf' },
          { name: 'Recursion - Part 2', file: 'Recursion-2.pdf' },
        ],
      },
      {
        id: 'sorting',
        name: 'Sorting',
        folderPath: 'NOTES/DSA_java/Sorting',
        pdfs: [
          { name: 'Sorting - Part 1', file: 'Sorting 1.pdf' },
          { name: 'Sorting - Part 2', file: 'Sorting 2.pdf' },
          { name: 'Sorting - Part 3', file: 'Sorting 3.pdf' },
          { name: 'Sorting - Part 4', file: 'Sorting 4.pdf' },
        ],
      },
      {
        id: 'stacks',
        name: 'Stacks',
        folderPath: 'NOTES/DSA_java/Stacks',
        pdfs: [{ name: 'Stacks - Complete', file: 'Stacks - Complete.pdf' }],
      },
    ],
  },
  {
    id: 'iitm_bs',
    name: 'IITM BS',
    description: 'IIT Madras BS Degree course materials — Maths, Python & Statistics',
    icon: '🎓',
    color: 'from-blue-500 to-indigo-500',
    topics: [
      {
        id: 'iitm-maths',
        name: 'Mathematics',
        folderPath: 'NOTES/IITM_BS/Maths',
        pdfs: [],
      },
      {
        id: 'iitm-python',
        name: 'Python',
        folderPath: 'NOTES/IITM_BS/Python',
        pdfs: [],
      },
      {
        id: 'iitm-stats',
        name: 'Statistics - Foundation 2',
        folderPath: 'NOTES/IITM_BS/Stats/stats foundation - 2',
        pdfs: [],
        agenda: [
          {
            week: 1,
            title: 'Foundations of Probability',
            pdf: 'week1.pdf',
            items: [
              'Joint Probability Mass Function (PMF)',
              'Marginal Distribution',
              'Conditional Distribution',
              'Independence of Random Variables',
              'Covariance & Correlation',
              'Basic probability problems (dice, tables, etc.)'
            ]
          },
          {
            week: 2,
            title: 'Independence & Functions of Random Variables',
            pdf: 'week2.pdf',
            items: [
              'Independence (discrete & continuous cases)',
              'i.i.d (Independent Identically Distributed variables)',
              'Functions of Random Variables',
              'Convolution (sum of independent variables)',
              'Poisson distribution & conditional cases',
              'Min/Max of random variables'
            ]
          },
          {
            week: 3,
            title: 'Expectation & Moments',
            pdf: 'week3.pdf',
            items: [
              'Expected Value (mean) of discrete random variables',
              'Properties of Expectation',
              'Variance & Standard Deviation',
              'Covariance & Correlation',
              'Standardization (Z-score)',
              'Inequalities: Markov & Chebyshev',
              'Real-world expectation problems (biased dice, etc.)'
            ]
          },
          {
            week: 4,
            title: 'Distribution Functions',
            pdf: 'week4.pdf',
            items: [
              'Cumulative Distribution Function (CDF)',
              'Properties of CDF',
              'Discrete & Continuous Random Variables',
              'Probability Density Function (PDF)',
              'Uniform Distribution',
              'Exponential Distribution',
              'Normal Distribution basics'
            ]
          },
          {
            week: 5,
            title: 'Continuous Random Variables & Transformations',
            pdf: 'week5.pdf',
            items: [
              'Monotonic functions & transformations',
              'PDF transformation techniques',
              'Expectation of continuous random variables',
              'Variance for continuous cases',
              'Standard distributions (Uniform, Exponential, Normal)',
              'Chebyshev inequality applications',
              'Conditional distributions (continuous case)'
            ]
          },
          {
            week: 6,
            title: 'Joint Continuous Distributions',
            pdf: 'week6.pdf',
            items: [
              'Joint PDF of continuous variables',
              'Marginal densities',
              'Joint uniform distribution',
              'Geometric probability',
              'Independence (continuous case)',
              'Conditional density functions',
              'Region-based probability problems'
            ]
          },
          {
            week: 7,
            title: 'Sampling & Statistical Methods',
            pdf: 'week7.pdf',
            items: [
              'Bernoulli Trials',
              'Monte Carlo Simulation',
              'Histograms & Data Representation',
              'i.i.d Samples',
              'Sample Mean & Variance',
              'Expectation & Variance of Sample Mean',
              'Sample Proportion',
              'Weak Law of Large Numbers (WLLN)',
              'Chebyshev inequality (sampling context)'
            ]
          }
        ]
      },
    ],
  },
  {
    id: 'development',
    name: 'Development',
    description: 'Web Development notes and references',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
    topics: [],
  },
];

export function getPdfPath(subject, topic, pdf) {
  return `/resources/${topic.folderPath}/${pdf.file}`;
}

export function getSubjectById(id) {
  return STUDY_SUBJECTS.find(s => s.id === id);
}

export function getTopicById(subjectId, topicId) {
  const subject = getSubjectById(subjectId);
  return subject?.topics.find(t => t.id === topicId);
}

export function getTotalPdfCount() {
  return STUDY_SUBJECTS.reduce(
    (acc, s) => acc + s.topics.reduce((a, t) => a + t.pdfs.length, 0),
    0
  );
}
