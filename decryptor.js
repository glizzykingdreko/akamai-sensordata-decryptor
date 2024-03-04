const {decodeCipherText, unshuffleCipherData} = require("./helpers")

function decryptSensorData(payload, debug = false) {
    let sensorData, encrypted, raw, separator;
    const result = {};

    // Parse JSON
    const sensor = JSON.parse(payload);

    // Extract keys
    const keys = sensor.sensor_data.split(';');
    const key1 = parseInt(keys[2], 10);
    const key2 = parseInt(keys[3], 10);

    // Parse prefix
    sensorData = Buffer.from(sensor.sensor_data);
    encrypted = sensorData;

    const re = /(\d+;\d+;\d+;\d+;[\d,]+;)/;
    const match = sensorData.toString().match(re);
    if (match) {
        const prefix = match[0];
        sensorData = sensorData.slice(prefix.length);
    }

    // Obfuscated strings to plaintext
    sensorData = Buffer.from(decodeCipherText(sensorData.toString(), key1));
    sensorData = Buffer.from(unshuffleCipherData(sensorData.toString(), key2));
    raw = sensorData;

    separator = sensorData.toString().slice(1).split(",2,")[0] + ",";

    const split = sensorData.toString().split(separator).slice(2);

    result["key"] = split[0];
    result["value"] = split[1];
    result["original"] = encrypted.toString();
    result["decrypted"] = raw.toString();
    result["raw"] = {}

    for (let i = 0; i < split.length; i += 2) {
        result.raw[split[i]] = split[i + 1];
    }

    return debug ? result : result.raw;
}

module.exports = {decryptSensorData};