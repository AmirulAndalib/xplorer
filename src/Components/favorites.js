const path = require('path')
const fs = require('fs');
const Translate = require('./multilingual');
const getPreview = require('../Functions/preview/preview');

const Favorites = (callback) => {
    let result = `<section class="home-section">
        <h2 class="section-title">Favorites</h2>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('desktop', category = "favorites", HTMLFormat = false)}" alt="Desktop icon" class="favorite-icon">Desktop</h3>
        </div>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('document', category = "favorites", HTMLFormat = false)}" alt="Document icon" class="favorite-icon">Documents</h3>
        </div>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('download', category = "favorites", HTMLFormat = false)}" alt="Download icon" class="favorite-icon">Downloads</h3>
        </div>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('picture', category = "favorites", HTMLFormat = false)}" alt="Pictures icon" class="favorite-icon">Pictures</h3>
        </div>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('music', category = "favorites", HTMLFormat = false)}" alt="Music icon" class="favorite-icon">Music</h3>
        </div>
        <div class="favorite" data-tilt>
            <h3 class="favorite-title"><img src="${getPreview('video', category = "favorites", HTMLFormat = false)}" alt="Video icon" class="favorite-icon">Videos</h3>
        </div></section>
        `;
    Translate(result, navigator.language, result => {
        callback(result)
    })
}
module.exports = Favorites