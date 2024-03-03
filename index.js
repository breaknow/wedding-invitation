var latLng = new kakao.maps.LatLng(37.5032423, 127.0465779);
var map = new kakao.maps.Map(document.getElementById('map'), {
  center: latLng,
  level: 3
});
var marker = new kakao.maps.Marker({
    map: map,
    position: latLng
});

getCount().then(({count}) => {
  if (count <= MAX_RECENT_COMMENTS) {
    document.getElementById('guestbook-button').style.display = 'none';
  }
});
renderGuestbook(getDataRecent);
document.getElementById('submit-form-button').addEventListener('click', () => {
  submitForm();
});

var coll = document.getElementsByName('accounts');
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
