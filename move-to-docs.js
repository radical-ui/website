const moveFile = require('move-file');
const dir = require('fs').readdirSync('./__sapper__/export');
const deleteFolder = require('folder-delete');

(async () => {
	if (dir.length != 0) {
		deleteFolder('./docs', { debugLog: true });
	}

	for (let index in dir) {
		let file = dir[index];
		await moveFile(`__sapper__/export/${file}`, `docs/${file}`);
		console.log(`Moved ${file}`);
	}
	if (dir.length == 0)
		console.log('Nothing to move.  Have you run `npm run export`?');
	else console.log('Done!');
})();
