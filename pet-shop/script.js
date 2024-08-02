$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  let mode = urlParams.get('mode') || 'login';

  const otherButton = $('#other');
  const dogButton = $('#dog');
  const catButton = $('#cat');
  const menuDetail = $('#menu-detail');

  function updateActiveButton() {
    switch (mode) {
      case 'other':
        dogButton.addClass('inactive');
        catButton.addClass('inactive');
        otherButton.removeClass('inactive');
        break;
      case 'dog':
        dogButton.removeClass('inactive');
        catButton.addClass('inactive');
        otherButton.addClass('inactive');
        break;

      default:
        dogButton.addClass('inactive');
        catButton.removeClass('inactive');
        otherButton.addClass('inactive');
        break;
    }
  }

  updateActiveButton();

  $('#dog').click(function (event) {
    event.preventDefault();
    history.replaceState(null, '', '?mode=dog');
    mode = 'dog';
    const dogMenu = ` <div style="width: 100%">
    <p class="" style="text-align: center; font-size: x-large; font-weight: bold">
      Lorem Ipsum
    </p>
  </div>`;
    menuDetail.children().remove();
    updateActiveButton();
    menuDetail.append(dogMenu);
  });

  $('#cat').click(function (event) {
    const catMenu = `<div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group1.svg " width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group3.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group4.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group5.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group6.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>
              <div class="detail-item">
                <div class="item-image">
                  <img src="./assets/Group7.svg" width="60px" />
                </div>
                <p>Sample</p>
              </div>`;
    event.preventDefault();
    history.replaceState(null, '', '?mode=cat');
    mode = 'cat';
    menuDetail.children().remove();
    updateActiveButton();
    menuDetail.append(catMenu);
  });
  $('#other').click(function (event) {
    event.preventDefault();
    history.replaceState(null, '', '?mode=other');
    mode = 'other';
    const otherMenu = ` <div style="width: 100%">
                <p class="" style="text-align: center; font-size: x-large; font-weight: bold">
                  Lorem Ipsum
                </p>
              </div>`;
    menuDetail.children().remove();
    updateActiveButton();
    menuDetail.append(otherMenu);
  });
});
