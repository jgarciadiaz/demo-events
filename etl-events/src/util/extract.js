import request from 'request-promise-native';
import readFile from './readFile';

const extract = props => (props.isProduction ? request(props.url) : readFile(props.file));

export default extract;
