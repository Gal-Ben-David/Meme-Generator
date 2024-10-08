'use strict'

let gCanvas
let gContext
let gIsFlexibleMode = false
var gCanvasDimensions = { width: '', height: '' }

function onInit() {
    gCanvas = document.querySelector('canvas')
    gContext = gCanvas.getContext('2d')

    gCanvasDimensions.height = gCanvas.height
    gCanvasDimensions.width = gCanvas.width

    setLineDiffPos()
    setStickersInArray()
    setImagesInArray()
    renderGallery()
    renderStickerIcons()
    renderMeme()

    onShowGallery()

    addListeners()
}

function onShowGallery() {
    showGallery()
    hideEditor()
    hideSavedMemes()
    renderKeywords()

    const buttons = document.querySelector('.buttons')
    buttons.classList.remove('open')
}

function onShowEditor() {
    showEditor()
    hideGallery()
    hideSavedMemes()

    const buttons = document.querySelector('.buttons')
    buttons.classList.remove('open')
}

function onShowSavedMemes() {
    showSavedMemes()
    hideEditor()
    hideGallery()

    setStickersInArray()
    setImagesInArray()
    renderGallery()
    renderStickerIcons()

    const buttons = document.querySelector('.buttons')
    buttons.classList.remove('open')
}

function toggleMenu() {
    const buttons = document.querySelector('.buttons')
    buttons.classList.toggle('open')
}

function onGetFlexibleMeme() {
    gIsFlexibleMode = true
    gClickedFromGallery = true
    renderMeme()
}
