// Handle key down event
window.addEventListener("keydown", (event) => {
    if(event.defaultPrevented)
    {
        return;
    }

    console.log(event.code);

    switch (event.code)
    {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
            keyDown(event.code);
            break;
    }
});

// Handle key up event
window.addEventListener("keyup", (event) => {
    if(event.defaultPrevented)
    {
        return;
    }

    switch (event.code)
    {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
            keyUp(event.code);
            break;
    }
});

// Handle key press event
window.addEventListener("keypress", (event) => {
    if(event.defaultPrevented)
    {
        return;
    }

    switch (event.code)
    {
        case "KeyA":
        case "KeyS":
        case "KeyD":
        case "KeyF":
        case "KeyG":
        case "KeyH":
        case "KeyJ":
        case "KeyK":
        case "KeyL":
            keyPressed(event.code);
            break;
    }
});

function keyDown(keyCode)
{
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.toggle("playing");

    const audioKey = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioKey.currentTime = 0;
    audioKey.play();
}

function keyUp(keyCode)
{
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.toggle("playing");
}

function keyPressed(keyCode)
{
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!key.classList.contains('playing'))
    {
        key.classList.add('playing');
    }

    const audioKey = document.querySelector(`audio[data-key="${keyCode}'"]`);
    if(audioKey.ended)
    {
        audioKey.play();
    }
}