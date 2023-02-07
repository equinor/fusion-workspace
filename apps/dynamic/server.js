const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors({ origin: true }));

app.get('/', (req, res, ctx) => {
	res.sendFile(path.join(__dirname, '../../packages/workspace-fusion/dist/workspace.js'));
});

app.listen(5000, () => console.log('Example app is listening on port 3000.'));
