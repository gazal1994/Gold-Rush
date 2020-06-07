class Renderer {
    constructor() {

    }
    renderData(goldRush) {
        const source = $('#game-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({ goldRush })
        $('.show').empty()
        $('.show').append(newHTML)
    }
    renderScores(scores) {
        const source = $('#scores-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template( scores)
        $('.scores').empty()
        $('.scores').append(newHTML)
    }
}
const rend=new Renderer()