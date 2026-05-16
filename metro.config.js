const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts = Array.from(new Set([...config.resolver.sourceExts, 'json']));

module.exports = config;
