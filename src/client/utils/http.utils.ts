export function getHostAddress() {
    // return `${ protocol }//${ hostname }:${ port }`;
    return process.env.REACT_APP_SERVER_ADDRESS;
}