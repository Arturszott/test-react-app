import runTestCommand from '../runTestCommand';

describe('runTestCommand', () => {
    let logStub;

    beforeEach(() => {
        logStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore(console.log);
    });

    it('should run test command specified inside arguments', () => {
        const executeShellCommand = sinon.spy();

        runTestCommand(executeShellCommand, [ 'unit' ]);

        expect(logStub).to.have.been.calledWith('running command: ', 'unit');
        expect(executeShellCommand).to.have.been.calledWith('npm run test:unit');
    });
});
