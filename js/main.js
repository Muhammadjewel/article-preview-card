function init () {
  const elShareWidget = document.querySelector('.share-widget');
  const elShareWidgetToggler = elShareWidget.querySelector('.share-widget__toggler');

  function toggleShareWidget () {
    elShareWidget.classList.toggle('share-widget--open');
  }

  if (elShareWidgetToggler) {
    elShareWidgetToggler.addEventListener('click', toggleShareWidget);
  }
}

document.addEventListener('DOMContentLoaded', init);
