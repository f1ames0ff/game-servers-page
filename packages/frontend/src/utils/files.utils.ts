export function blobToFileDownload(blob: Blob, fileName: string) {
    const aEl = document.createElement("a");
    const url = window.URL.createObjectURL(blob);

    aEl.href = url;
    aEl.download = fileName;
    aEl.click();

    window.URL.revokeObjectURL(url);
}

export function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const kilo = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

    const i = Math.floor(Math.log(bytes) / Math.log(kilo));

    return parseFloat(( bytes / Math.pow(kilo, i) ).toFixed(dm)) + ' ' + sizes[i];
}