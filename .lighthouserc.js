module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      startServerCommand: 'npm run dev',
      url: ['http://127.0.0.1:5173'],
      numberOfRuns: 2,
    },
     assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}],
        'categories:seo': ['warn', {minScore: .92}]
      }
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage',
    },
  },
};