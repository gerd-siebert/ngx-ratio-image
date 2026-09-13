const fs = require('fs');
const path = require('path');

// Pfade zu den package.json-Dateien
const rootPackagePath = path.join(__dirname, '..', 'package.json');
const mainPackagePath = path.join(__dirname, 'package.json');
const libPackagePath = path.join(__dirname, 'projects', 'ngx-ratio-image', 'package.json');

// Funktion zum Lesen und Parsen der package.json-Dateien
function readPackageJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// Funktion zum Erkennen der Einrückung (Tabs vs. Spaces)
function getIndentation(content) {
	return content.includes('\n\t') ? '\t' : 2;
}

// Funktion zum Schreiben der aktualisierten package.json-Dateien
function writePackageJson(filePath, data) {
	const currentContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
	const indent = getIndentation(currentContent);
	fs.writeFileSync(filePath, JSON.stringify(data, null, indent) + '\n', 'utf8');
}

// Hauptlogik
function copyVersions() {
	// Root-package.json lesen
	const rootPackageJson = readPackageJson(rootPackagePath);
	const newVersion = rootPackageJson.version;

	if (!newVersion) {
		console.error('No version found in root package.json!');
		process.exit(1);
	}

	// lib/package.json lesen und Version synchronisieren
	const libPackageJson = readPackageJson(libPackagePath);
	libPackageJson.version = newVersion;
	writePackageJson(libPackagePath, libPackageJson);

	// main/package.json lesen und Version synchronisieren
	if (fs.existsSync(mainPackagePath)) {
		const mainPackageJson = readPackageJson(mainPackagePath);
		mainPackageJson.version = newVersion;
		writePackageJson(mainPackagePath, mainPackageJson);
	}

	console.log(`Version updated to ${newVersion} in package.json files.`);
}

// Skript ausführen
copyVersions();
