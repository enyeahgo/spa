// Custom Functions
function showAnimation(json) {
  Swal.fire({
    html: `
      <lottie-player autoplay loop mode="normal" background="transparent"  speed="1" src="${json}" style="width: 100%;"></lottie-player>
    `,
    background: 'transparent',
    showConfirmButton: false,
    allowOutsideClick: false
  });
}

function showGif(gif) {
    Swal.fire({
      html: `
        <img src="${gif}" />
      `,
      showConfirmButton: false,
      allowOutsideClick: false
    });
    $(".swal2-modal").css('background-color', '#000');
    $(".swal2-container").css('background-color', '#000000');
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  customClass: 'toastalert'
});

function showAlert(message, type) {
  Toast.fire({
    icon: type,
    html: message,
    customClass: 'toastalert'
  });
}

function moneyfy(x) {
  return `P${x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}

function shake(id) {
  $(`#${id}`).addClass('shakeBtn');
  setTimeout(function() {
    $(`#${id}`).removeClass('shakeBtn');
  }, 1000);
}