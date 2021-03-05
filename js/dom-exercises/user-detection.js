export default function detectUser(section) {
  const $section = document.getElementById(section);
  const userAgent = navigator.userAgent;
  console.log(navigator);
  const isMobile = {
    android: () => userAgent.match(/android/i),
    ios: () => userAgent.match(/iphone|ipad|ipod/i),
    any() {
      return this.android() || this.ios();
    },
  };
  const isDesktop = {
    linux: () => userAgent.match(/linux/i),
    mac: () => userAgent.match(/mac os/i),
    windows: () => userAgent.match(/windows/i),
    any() {
      return this.linux() || this.mac() || this.windows();
    },
  };
  const isBrowser = {
    edge: () => (userAgent.match(/edg/i) ? "Edge" : null),
    safari: () => userAgent.match(/safari/i),
    opera: () => userAgent.match(/opera|opera mini/i),
    firefox: () => userAgent.match(/firefox/i),
    ie: () => (userAgent.match(/msie|iemobile/i) ? "Internet Explorer" : null),
    chrome: () => userAgent.match(/chrome/i),
    any() {
      return (
        this.edge() ||
        this.firefox() ||
        this.opera() ||
        this.safari() ||
        this.ie() ||
        this.chrome()
      );
    },
  };

  $section.innerHTML = `
    <div id="user-agent-info">
      <h2>Hello user, thanks for visiting us from ${
        isMobile.any() || isDesktop.any()
      }.</h2>
      <h3>It's cool that you're using ${isBrowser.any()}, we also like it!</h3>
    </div>  
  `;
}
