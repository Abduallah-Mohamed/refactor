// this file is not related or used in the project, it's just a test file to check the download speed of a file from a server
const axios = require('axios');
const now = require('performance-now');

const url = 'http://speedtest.tele2.net/1MB.zip'; // URL of a 1MB file

async function testDownloadSpeed() {
    const startTime = now();
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const endTime = now();

    // Calculate the time taken and the download speed
    const fileSizeInBytes = response.data.byteLength;
    const fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
    const timeTakenInSeconds = (endTime - startTime) / 1000;

    const speedInMbps = fileSizeInMegabytes / timeTakenInSeconds;

    console.log(`Download speed: ${speedInMbps} MB/s`);
}

testDownloadSpeed();