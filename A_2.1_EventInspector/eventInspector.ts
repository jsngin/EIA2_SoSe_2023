/* Aufgabe: <A_1.2_Eventinspector>
    Name: <Jasenko Dzin>
    Matrikel: <269400>
    Datum: <03.04.2022>
    Quellen: </>
*/
namespace EventInspector {
  window.addEventListener('load', handleLoad);

  function handleLoad(_event: Event): void {
    console.log('handleLoad', _event);
    document.addEventListener('mousemove', setInfobox);
    document.addEventListener('click', logInfo);
    document.addEventListener('keyup', logInfo);

    // bonus
    document.querySelector('button').addEventListener('click', bonus);
    document.addEventListener('bonus', logCustomEvent);
  }

  function setInfobox(_event: MouseEvent): void {
    const x: number = _event.clientX;
    const y: number = _event.clientY;
    const offset: number = 20;
    const target: HTMLElement = _event.target as HTMLElement;
    const position: string = `x: ${x}, y: ${y}, target: ${target.tagName}`;
    const spanElem: HTMLSpanElement = document.querySelector('span');

    spanElem.innerHTML = position;
    spanElem.style.top = `${y + offset}px`;
    spanElem.style.left = `${x + offset}px`;
  }

  function logInfo(_event: Event): void {
    console.log({
      type: _event.type,
      target: _event.target,
      currentTarget: _event.currentTarget,
      eventObj: _event,
    });
  }

  function logCustomEvent(_event: CustomEvent): void {
    console.log(_event.detail);
  }

  function bonus(_event: MouseEvent): void {
    const event: CustomEvent<string> = new CustomEvent('bonus', {
      detail: 'Custom Event',
      bubbles: true,
    });
    _event.target.dispatchEvent(event);
  }
}
