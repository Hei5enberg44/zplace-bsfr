// ==UserScript==
// @name         Z/Place - Logo BSFR
// @namespace    https://github.com/Hei5enberg44/zplace-bsfr
// @version      0.31
// @description  Overlay logo BSFR.
// @author       Hei5enberg
// @match        https://place.zevent.fr
// @icon         https://raw.githubusercontent.com/Hei5enberg44/zplace-bsfr/main/icon.jpg
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/Hei5enberg44/zplace-bsfr/main/bsfr.user.js
// @updateURL    https://raw.githubusercontent.com/Hei5enberg44/zplace-bsfr/main/bsfr.user.js
// @supportURL   https://github.com/Hei5enberg44/zplace-bsfr/issues

// ==/UserScript==

(function() {
    'use strict';

    const container = document.querySelector('.react-transform-component')
    const img = document.createElement('img')
    img.style.position = 'absolute'
    img.style.top = '495px'
    img.style.left = '456px'
    // img.style.width = '50px'
    // img.style.height = '50px'
    img.style.zIndex = 1001
    img.style.opacity = 0.6
    img.src = 'https://github.com/Hei5enberg44/zplace-bsfr/raw/main/BSFR.png'

    setTimeout(function() {
        const target = document.querySelector('.target')
        target.style.zIndex = 1002
        container.append(img)
    }, 2000)
})();