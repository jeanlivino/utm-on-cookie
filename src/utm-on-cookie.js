class MarcadorCookie {
  constructor(){
    this.first = this.getCookie('jlh_first_session');
    this.last = this.getCookie('jlh_last_session');
    this.gclid = this.getCookie('jlh_gclid_session');
    this.source = {
      gclid: this.getQueryVariable('gclid'),
      utm_source: this.getQueryVariable('utm_source'),
      utm_medium: this.getQueryVariable('utm_medium'),
      utm_campaign: this.getQueryVariable('utm_campaign')
    }
  }
  // get from the cookie your content
  getCookie(name){
    let documentCookie = "; " + document.cookie;
    let content = documentCookie.split("; " + name + "=");
    return (content.length == 2) ? JSON.parse(content.pop().split(";").shift()) : '';
  }
  // get the value of params on url
  getQueryVariable(param) {
    let url = new URL(window.location.href)
    return url.searchParams.get(param) || ''
  }
  // update the constructor after update cookie
  updateSession() {
    this.first = this.getCookie('jlh_first_session');
    this.last = this.getCookie('jlh_last_session');
    this.gclid = this.getCookie('jlh_gclid_session');
  }
  // get the source and add to cookie
  createCookie() {
    if (!this.first_session) {
      document.cookie = "jlh_first_session=" + JSON.stringify(this.source) + "; expires=0; path=/";
    } else {
      document.cookie = "jlh_last_session=" + JSON.stringify(this.source) + "; expires=0; path=/"
    }
    //call update
    this.updateSession()
  }
}

const utmCookie = new MarcadorCookie;
// check if have gclid params to change the source for Google Ads
if (utmCookie.source.gclid) utmCookie.source.utm_source = 'Google Ads';

// only create cookie if have params on url
(()=>{
  let myObject = utmCookie.source;
  for (var key in myObject) {
    if (myObject[key]) {
      utmCookie.createCookie();
      break;
    }
  }
  window.utmCookie = utmCookie
})()