const runTestCommand = (executeShellCommand, args) => {
    var command = args[0];

    console.log('running command: ', command);

    executeShellCommand(`npm run test:${command}`);
};

export default runTestCommand;
