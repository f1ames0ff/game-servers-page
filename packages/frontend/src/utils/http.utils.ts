export function getHostAddress() {
    const { hostname, port, protocol } = window.location;

    // return `${ protocol }//${ hostname }:${ port }`;
    return process.env.REACT_APP_SERVER_ADDRESS;
}