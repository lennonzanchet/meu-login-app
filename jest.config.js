export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // ← IMPORTANTE: isso aqui é o que carrega o jest-dom corretamente
};
