export function getHostAddress() {
    const { hostname, port, protocol } = window.location;

    return `${ protocol }//${ hostname }:${ port }`;
}