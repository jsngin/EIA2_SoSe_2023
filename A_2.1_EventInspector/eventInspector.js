var EventInspector;
(function (EventInspector) {
    window.addEventListener('load', handleLoad);
    function handleLoad(_event) {
        console.log('handleLoad', _event);
        document.addEventListener('mousemove', setInfobox);
        document.addEventListener('click', logInfo);
        document.addEventListener('keyup', logInfo);
        // bonus
        document.querySelector('button').addEventListener('click', bonus);
        document.addEventListener('bonus', logCustomEvent);
    }
    function setInfobox(_event) {
        const x = _event.clientX;
        const y = _event.clientY;
        const offset = 20;
        const target = _event.target;
        const position = `x: ${x}, y: ${y}, target: ${target.tagName}`;
        const spanElem = document.querySelector('span');
        spanElem.innerHTML = position;
        spanElem.style.top = `${y + offset}px`;
        spanElem.style.left = `${x + offset}px`;
    }
    function logInfo(_event) {
        console.log({
            type: _event.type,
            target: _event.target,
            currentTarget: _event.currentTarget,
            eventObj: _event,
        });
    }
    function logCustomEvent(_event) {
        console.log(_event.detail);
    }
    function bonus(_event) {
        const event = new CustomEvent('bonus', {
            detail: 'Custom Event',
            bubbles: true,
        });
        _event.target.dispatchEvent(event);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=eventInspector.js.map