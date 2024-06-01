const fs = require('fs');
const path = require('path');

// Pfade zu den package.json-Dateien
const mainPackagePath = path.join(__dirname, 'package.json');
const libPackagePath = path.join(__dirname, 'projects', 'ngx-ratio-image', 'package.json');

// Funktion zum Lesen und Parsen der package.json-Dateien
function readPackageJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Funktion zum Schreiben der aktualisierten package.json-Dateien
function writePackageJson(filePath, data) {
	fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Funktion zur Erhöhung der Version
function incrementVersion(version) {
	const versionParts = version.split('.').map(Number);
	versionParts[2] += 1; // Patch-Version erhöhen
	return versionParts.join('.');
}

// Hauptlogik
function copyVersions() {
	// Haupt-package.json lesen und Version hochsetzen
	const mainPackageJson = readPackageJson(mainPackagePath);
	const newVersion = mainPackageJson.version;

	// lib/package.json lesen und Version synchronisieren
	const libPackageJson = readPackageJson(libPackagePath);
	libPackageJson.version = newVersion;
	writePackageJson(libPackagePath, libPackageJson);

	console.log(`Version updated to ${newVersion} in both package.json files.`);
}

// Skript ausführen
copyVersions();
