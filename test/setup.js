import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import chaiAsPromised from 'chai-as-promised';

const ignoreModuleByExtension = (extensions) => {
    extensions.forEach((ext) => {
        require.extensions[ext] = () => {};
    });
};

global.expect = chai.expect;
global.sinon = sinon;

chai.use(sinonChai);
chai.use(chaiEnzyme());
chai.use(chaiAsPromised);

ignoreModuleByExtension([ '.svg', '.png', '.jpg', '.css', '.scss' ]);
