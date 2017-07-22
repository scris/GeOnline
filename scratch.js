var Scratch = Scratch || {};
Scratch.INIT_DATA = Scratch.INIT_DATA || {};
Scratch.INIT_DATA.ADMIN = false;
Scratch.INIT_DATA.LOGGED_IN_USER = {
  
  model: {
    username: 'a85813843',
    username_truncated: 'a85813843',
    has_outstanding_email_confirmation: 'true',
    
    id: 23923045,
    profile_url: '/users/a85813843/',
    thumbnail_url: '//uploads.scratch.mit.edu/users/avatars/default.png'
  },
  
  options: { 
      authenticated: true
,
permissions: [ 
]
  }
};
Scratch.INIT_DATA.comment_posting = true;

Scratch.INIT_DATA.BROWSERS_SUPPORTED = {
  chrome: 35,
  firefox: 31,
  msie: 8,
  safari: 7
};

Scratch.INIT_DATA.TEMPLATE_CUES = {

  unsupported_browser: true,
  welcome: true,
  confirmed_email: false
};
  

Scratch.INIT_DATA.PROJECT = {
  
  model: {
    id: null,
    creator: null,
    title: 'Untitled',
    isPrivate: true
  },
  is_new: true

}

Scratch.INIT_DATA.HAS_NEVER_REMIXED = false;

Scratch.INIT_DATA.ADMIN_PANEL = {
  'adminURL': null,
};

Scratch.INIT_DATA.TIPS = {
  HELP_URLS : { 
      'zh-cn': "//cdn.scratch.mit.edu/scratchr2/static/__e71d264c6d10cd3e8bf248a7f0ccfbd4__/help/zh-cn/",
  },
  CURRENT_LANGUAGE: "zh-cn",
};

Scratch.INIT_DATA.COI = {
  TARGET_DOMAIN: "http://s.213.name"
};
Scratch.INIT_DATA.IS_IP_BANNED = false;

Scratch.INIT_DATA.GLOBAL_URLS = {
  'media_url': '//uploads.scratch.mit.edu/',
  'static_url': '//cdn.scratch.mit.edu/scratchr2/static/__e71d264c6d10cd3e8bf248a7f0ccfbd4__/',
  'static_path': '/scratchr2/static/__e71d264c6d10cd3e8bf248a7f0ccfbd4__/'
}

Scratch.INIT_DATA.IS_SOCIAL = false;




  window.SWFready=$.Deferred(); // Deferred makes sure we don't call ASSetEditMode before SWF is ready.
  function JSeditorReady() {
    try {
      SWFready.resolve();
      return true;
    } catch (error) {
      console.error(error.message, "\n", error.stack);
      throw error;
    }
  }

  // The flashvars tell flash about the project data (and autostart=true)
  var flashvars = {
  /*  extensionDevMode:'true',
    autostart: 'false',
    cloudToken: '00000000-0000-0000-0000-000000000000',
    challengeMode: 'false',
    showOnly:'false',
    user_id:window.user_id,
    user_token:window.user_token,
    project:window.project,
    cdnToken: 'e71d264c6d10cd3e8bf248a7f0ccfbd4',
      // project_title: 'Untitled',
      // project_isPrivate: 'true',
      // project_isNew: 'true',
    urlOverrides: {
      sitePrefix: window.location.protocol + '//' + window.location.host + '/',
      siteCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
      assetPrefix: window.location.protocol + '//' + window.location.host + '/',
      assetCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
      projectPrefix: window.location.protocol + '//' + window.location.host + '/',
      projectCdnPrefix: window.location.protocol + '//' + window.location.host + '/',
      internalAPI: "internalapi/",
      siteAPI: window.location.protocol + '//' + window.location.host + '/frontend/web/index.php',
      staticFiles: "scratchr2/static/"
    },
    inIE: (navigator.userAgent.indexOf('MSIE') > -1)*/
    autostart: 'false',
    extensionDevMode: 'true',
    server: encodeURIComponent(location.host),
    cloudToken: '4af4863d-a921-4004-b2cb-e0ad00ee1927',
    cdnToken: '34f16bc63e8ada7dfd7ec12c715d0c94',
    urlOverrides: {
        sitePrefix: "http://scratch.mit.edu/",
        siteCdnPrefix: "http://cdn.scratch.mit.edu/",
        assetPrefix: "http://assets.scratch.mit.edu/",
        assetCdnPrefix: "http://cdn.assets.scratch.mit.edu/",
        projectPrefix: "http://projects.scratch.mit.edu/",
        projectCdnPrefix: "http://cdn.projects.scratch.mit.edu/",
        internalAPI: "internalapi/",
        siteAPI: "site-api/",
        staticFiles: "scratchr2/static/"
    },
  };

  $.each(flashvars, function(prop, val) {
    if($.isPlainObject(val))
      flashvars[prop] = encodeURIComponent(JSON.stringify(val));
  });

  // $.each(Scratch.INIT_DATA.PROJECT.model, function(i, val) {
  //  if(val != null)
  //    flashvars['project_'+i] = encodeURIComponent(val);
  // });

  // if(Scratch.INIT_DATA.PROJECT.is_new)
  //  flashvars.project_isNew = true;

  var params = {
    allowscriptaccess: 'always',
    allowfullscreen: 'true',
    wmode: 'direct',
    menu: 'false',
  };

  // url format flashvars for createSWF call (see
  // https://github.com/LLK/scratchr2/blob/f42c289a5fa890d9c5562cc1fa54b0aea3dfa45e/static/js/swfobject.js#L673-L682)
  for (var i in flashvars) {
    if (typeof params.flashvars !== 'undefined') {
      params.flashvars += '&' + i + '=' +flashvars[i];
    } else {
      params.flashvars = i + '=' + flashvars[i];
    }
  }
  var swfFile = (swfobject.hasFlashPlayerVersion('11.6.0') ? 'Scratch.swf' : 'ScratchFor10.2.swf');
  var swfAtt = {
    data: swfFile,
    width: window.innerWidth,
    height: window.innerHeight,
    // style:"visibility: visible;"
  };

swfobject.addDomLoadEvent(function() {
        var swf = swfobject.createSWF(swfAtt, params, "scratch");


        // handleEmbedStatus({success: true, ref: swf}); 
    // }
    // document.getElementById('scratch').style.visibility = 'visible';
});
//Dynamically add iframe for registration window
// $.when(window.SWFready).done(function() {$('<iframe id="registration-iframe" class="iframeshim" style="background:#fff;z-index:-1;" frameborder="0" scrolling="no">').insertBefore('#registration')});

  // $.when(window.SWFready).done(function() {
  //     conlose.log(winodw.scratch);
  //     window.scratch.loadProject("http://localhost/frontend/web/project/1/哈哈.sb2");
  // });
  // scratch = document.getElementById('scratch');
  // scratch.onload = function(){
  //   console.log("scratch onload");
  //   window.scratch.loadProject("http://localhost/frontend/web/project/1/哈哈.sb2");
  // }

  function projectList(){
    $('.project-list').fadeIn();
    console.log("open project list");
    loadProjectList();
  }

  function loadProjectList(){
    $('.list ul').empty();
    $.ajax({
      url: window.location.protocol + '//' + window.location.host + '/frontend/web/index.php?r=api/get-project&user_id='+user_id+"&user_token="+user_token,
      type: 'get',
      dataType: 'json',
      success: function(data){
        console.log(data);
        if (data.error_msg=="") {          
          if (data.projects.length==0) {
            $('.list ul').append("<span>没有项目~</span><br>");
          }
          for(item in data.projects){
              var url = data.projects[item].filename;
              var re = /\w+\/\w+\/(.*?)\.sb2/;
              var name = url.match(re)[1];
             $('.list ul').append("<li><a href=\"javascript:loadProject(\'http://s.213.name/frontend/web/"+url+"\')\">"+name+"</a></li>");
            console.log();
          }
        }else{
          alert(data.error_msg);
        }
       
      }
    });
  }

  function loadProject(url){
    if (url) {
      console.log("load project:"+url);
      window.scratch.loadProject(url);
    }
  }

  // enables the SWF to log errors
  function JSthrowError(e) {
    if (window.onerror) window.onerror(e, 'swf', 0);
    else console.error(e);
  }

  window.onbeforeunload = function(event){    
    return '真的要关闭嘛？'; 
};
