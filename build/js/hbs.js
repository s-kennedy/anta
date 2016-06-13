this["Anta"] = this["Anta"] || {};
this["Anta"]["Templates"] = this["Anta"]["Templates"] || {};

this["Anta"]["Templates"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<!-- navigation -->\n  <div class=\"main_menu\">\n    <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-expanded=false>\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"#\"><img src=\"images/anta-logo.png\" alt=\"ANTA\" height=\"30px\"></a>\n        </div>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#rates\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.quote : stack1), depth0))
    + "</a><span class=\"sr-only\">(current)</span></li>\n            <li><a href=\"#company\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.company : stack1), depth0))
    + "</a></li>\n            <li><a href=\"#services\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.services : stack1), depth0))
    + "</a></li>\n            <li><a href=\"#clients\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.clients : stack1), depth0))
    + "</a></li>\n          </ul>\n\n          <div id=\"menu_languages\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"#\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.language : stack1), depth0))
    + ": \n              <span class=\"lang-select\" id=\"en\">EN</span>\n              <span class=\"lang-select\" id=\"fr\">FR</span>\n              <span class=\"lang-select\" id=\"ru\">PY</span></a>\n              </li>\n            <ul>          \n          </div>\n\n        </div>\n\n      </div>\n    </nav>\n  </div>\n\n<!-- /navigation -->\n\n<!-- Jumbotron -->\n  <div class=\"jumbotron\">\n    <div class=\"container\">\n      <h1>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.header : stack1)) != null ? stack1.header_title : stack1), depth0))
    + "</h1>\n      <h2>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.header : stack1)) != null ? stack1.header_subtitle : stack1), depth0))
    + "</h2>\n    </div>\n  </div>\n\n<!-- /jumbotron -->\n\n  \n  <div class=\"invisible_side_menu_fixed\"></div>\n\n  <div id=\"main\">\n\n<!-- side menu -->\n    <div class=\"row side_menu_container\">    \n      <div class=\"invisible_side_menu_static\"></div>\n      <div class=\"side_menu\">\n        <ul class=\"side_menu_links list-unstyled\">\n          <li id=\"side_menu_company\">\n            <span class=\"glyphicon glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span>\n            <a href=\"#company\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.company : stack1), depth0))
    + "</a></li>\n          <li id=\"side_menu_services\">\n            <span class=\"glyphicon glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span>\n            <a href=\"#services\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.services : stack1), depth0))
    + "</a></li>\n          <li id=\"side_menu_clients\">\n            <span class=\"glyphicon glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span>\n            <a href=\"#clients\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.clients : stack1), depth0))
    + "</a></li>\n          <li id=\"side_menu_rates\">\n            <span class=\"glyphicon glyphicon glyphicon-triangle-right\" aria-hidden=\"true\"></span>\n            <a href=\"#rates\" data-scroll>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.rates : stack1), depth0))
    + "</a></li>\n        </ul>    \n      </div>\n<!-- /side menu -->\n\n<!-- company section -->\n      <div class=\"section\" id=\"company\">\n      <div class=\"row\">\n        <div class=\"company col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n        \n          <div id=\"company_title\"><h1>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.company : stack1), depth0))
    + "</h1></div>\n\n          <div class=\"company\" id=\"company_text\">\n\n              <p class=\"lead\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_lead : stack1), depth0))
    + "</p>\n\n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_p1 : stack1), depth0))
    + "</p>\n            \n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_p2 : stack1), depth0))
    + " </p>\n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_p3 : stack1), depth0))
    + "</p>\n              \n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_p4 : stack1), depth0))
    + "</p>\n              <ul class=\"list-unstyled company-features\">\n                <li class=\"col-sm-4\"><span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span>\n                  <h4>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_header1 : stack1), depth0))
    + "</h4>\n                  <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_text1 : stack1), depth0))
    + "</p>\n                </li>\n                <li class=\"col-sm-4\"><span class=\"glyphicon glyphicon-time\" aria-hidden=\"true\"></span>\n                  <h4>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_header2 : stack1), depth0))
    + "</h4>\n                  <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_text2 : stack1), depth0))
    + "</p>\n                </li>\n                <li class=\"col-sm-4\"><span class=\"glyphicon glyphicon-certificate\" aria-hidden=\"true\"></span>\n                  <h4>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_header3 : stack1), depth0))
    + "</h4>\n                  <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.company : stack1)) != null ? stack1.company_list_text3 : stack1), depth0))
    + "</p>\n                </li>\n              </ul>    \n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!-- </div>  -->\n<!-- /company section -->\n  \n<!-- services section -->\n    <div class=\"section\" id=\"services\">\n        <div class=\"row\">\n          <div class=\"services col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n                        \n            <div class=\"services\" id=\"services_title\"><h1>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.services : stack1), depth0))
    + "</h1></div>\n\n            <div class=\"services\" id=\"services_text\">\n                <p> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_para1 : stack1), depth0))
    + "</p>\n                \n                <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_para2 : stack1), depth0))
    + "</p>\n\n                <ul>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li1 : stack1), depth0))
    + " </li>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li2 : stack1), depth0))
    + " </li>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li3 : stack1), depth0))
    + " </li>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li4 : stack1), depth0))
    + " </li>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li5 : stack1), depth0))
    + " </li>\n                  <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_li6 : stack1), depth0))
    + " </li>\n                </ul>\n                \n                <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.services : stack1)) != null ? stack1.services_para3 : stack1), depth0))
    + "</p>\n            </div>\n          </div>\n        </div>\n    </div>\n<!-- /services section -->\n\n<!-- clients section -->\n    <div class=\"section\" id=\"clients\">\n      <div class=\"row\">\n        <div class=\"clients col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n          \n          <div class=\"clients\" id=\"clients_title\"><h1>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.clients : stack1), depth0))
    + "</h1></div>\n\n          <div class=\"clients\" id=\"clients_text\">\n              <p> "
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_para1 : stack1), depth0))
    + "</p>\n\n              <ul>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li1 : stack1), depth0))
    + "</li>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li2 : stack1), depth0))
    + "</li>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li3 : stack1), depth0))
    + "</li>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li4 : stack1), depth0))
    + "</li>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li5 : stack1), depth0))
    + "</li>\n                <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_li6 : stack1), depth0))
    + "</li>\n              </ul>\n              \n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.clients : stack1)) != null ? stack1.clients_para2 : stack1), depth0))
    + "</p>\n          </div>\n        </div>\n      </div>\n    </div>\n<!-- /clients section -->\n      \n\n<!-- rates section -->\n    <div class=\"section\" id=\"rates\">\n      <div class=\"row\">\n        <div class=\"rates col-md-8 col-md-offset-2 col-sm-12 col-xs-12\">\n          <div class=\"rates\" id=\"rates_title\"><h1>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.navigation : stack1)) != null ? stack1.rates : stack1), depth0))
    + "</h1></div>\n\n          <div class=\"rates\" id=\"rates_text\">\n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.rates : stack1)) != null ? stack1.rates_intro1 : stack1), depth0))
    + "</p>\n              <p>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.rates : stack1)) != null ? stack1.rates_intro2 : stack1), depth0))
    + "</p>\n          </div>\n\n          <form action=\"https://getsimpleform.com/messages?form_api_token=039f4760c1569d542e96cd829d3f3d80\" method=\"POST\" enctype=\"multipart/form-data\">\n\n            <input type='hidden' name='redirect_to' value='http://antatranslations.com/' />\n\n            <div class=\"form-group\">\n              <label for=\"name\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.name : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"name\" class=\"form-control\" id=\"name\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.company_name : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"company\" class=\"form-control\" id=\"company\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"langfrom\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.translate_from : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"langfrom\" class=\"form-control\" id=\"language-from\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"langto\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.translate_to : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"langto\" class=\"form-control\" id=\"language-to\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.email : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"email\" class=\"form-control\" id=\"email\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"phone\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</label>\n              <input type=\"text\" name=\"phone\" class=\"form-control\" id=\"phone\" >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"comments\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.comments : stack1), depth0))
    + "</label>\n              <textarea name=\"comments\" class=\"form-control\" id=\"comments\"></textarea>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"document\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.file_input : stack1), depth0))
    + "</label>\n              <input type=\"file\" name=\"document\" class=\"form-control\" id=\"document\">\n            </div>\n            <div class=\"centered\">\n              <button class=\"btn btn-red submit-btn\">"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.form : stack1)) != null ? stack1.submit : stack1), depth0))
    + "</button>\n            </div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n<!-- /rates section -->\n\n</div> <!-- /main? -->\n      \n\n<!-- </div> container-fluid -->\n\n<!-- footer -->\n  <div class=\"footer text-muted row\">\n    <div class=\"footer-left col-md-6 col-sm-6 col-xs-12\">\n      <ul id=\"contact\" class=\"list-unstyled\"> \n        <li><span class=\"glyphicon glyphicon-envelope\" aria-hidden=\"true\"></span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.email : stack1), depth0))
    + "</li>\n        <li><span class=\"glyphicon glyphicon-earphone\" aria-hidden=\"true\"></span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.phone : stack1), depth0))
    + "</li>\n        <li><span class=\"glyphicon glyphicon-open-file\" aria-hidden=\"true\"></span>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.fax : stack1), depth0))
    + "</li>\n      </ul>\n    </div>\n      \n    <div class=\"footer-right col-md-6 col-sm-6 col-xs-12\">\n      <ul id=\"address\" class=\"list-unstyled\">\n      <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address1 : stack1), depth0))
    + "</li>\n      <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address2 : stack1), depth0))
    + "</li>\n      <li>"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.anta : depth0)) != null ? stack1.index : stack1)) != null ? stack1.contact_info : stack1)) != null ? stack1.address3 : stack1), depth0))
    + "</li> \n    </div>\n\n  </div>\n\n  <div class=\"copyright col-md-12 col-sm-12\">\n    <p class=\"small text-muted\">Copyright 2016  |  Website by <a href=\"https://www.linkedin.com/in/kennedysharon\">Sharon Kennedy</a></p>\n  </div>\n<!-- /footer -->";
},"useData":true});