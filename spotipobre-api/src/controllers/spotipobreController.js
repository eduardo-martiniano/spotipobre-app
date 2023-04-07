const express = require('express');
const ytdl = require('ytdl-core');

const downloadmp3 = 
 async (req, res, next) => {
    try {
        var url = req.query.url;
        if(!ytdl.validateURL(url)) {
            return res.sendStatus(400);
        }
        let title = 'audio';
        await ytdl.getBasicInfo(url, {
            format: 'mp4'
        }, (err, info) => {
            if (err) throw err;
            title = info.player_response.videoDetails.title.replace(/[^\x00-\x7F]/g, "");
        });
        
        title = await (await ytdl.getInfo(url)).videoDetails.title
        res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);
        ytdl(url, {
            format: 'mp3',
            filter: 'audioonly',
            quality: 'highestaudio'
        }).pipe(res);

    } catch (err) {
        console.error(err);
    }
};

const validate = async (req, res, next) => {
	try {
		var url = req.query.url;
        var valid = await ytdl.validateURL(url);
        res.json({
            valid: valid
        });

	} catch (err) {
		console.error(err);
	}
};

module.exports = {downloadmp3, validate}