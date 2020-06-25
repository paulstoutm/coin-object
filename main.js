let coin = {
    state: 0,
    flip: function () {
        let randNum = Math.random()
        let finNum = Math.round(randNum)
        // console.log(randNum)
        // console.log(finNum)
        this.state = finNum
    },
    toString: function () {
        if (this.state === 0) {
            return (" Heads")
        }
        else {
            return (" Tails")
        }
        this.state = 1
    },
    toHTML: function () {
        let image = document.createElement('img');
        image.style.width = "100px"
        if (this.state === 0) {
            image.src = "./images/Heads.jpg"
        }
        else {
            image.src = "./images/Tails.png"
        }

        return image;
    },
}
function display20Flips() {
    let bodyElement = document.querySelector('body')
    for (let i = 0; i < 20; i = i + 1) {
        coin.flip()
        coin.toString()
        bodyElement.append(coin.toString())
    }
}
display20Flips()

function display20Images() {
    let imgElement = document.querySelector('body')
    for (let i = 0; i < 20; i = i + 1) {
        coin.flip()
        coin.toHTML()
        imgElement.append(coin.toHTML())
    }
}
display20Images()

