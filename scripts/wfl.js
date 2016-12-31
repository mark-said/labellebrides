//
// Web Font Loader
//

  WebFontConfig = {
    google: { 
      families: [ 
      'Josefin+Sans:300,600,300italic,600italic:latin',
      'Damion::latin' 
      ] 
    }
  };

  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
