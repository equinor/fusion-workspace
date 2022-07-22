/* eslint-disable */
export default {
    displayName: 'workspace-data-source',
    preset: '../../jest.preset.js',
    transform: {
        '^.+\\.[tj]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coverageDirectory: '../../coverage/packages/workspace-data-source',
};
