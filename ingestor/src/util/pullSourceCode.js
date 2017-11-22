import request from 'request-promise-native';
import readFile from './readFile';

const pullSourceCode = props => (props.isProduction ? request(props.url) : readFile(props.file));

export default pullSourceCode;
