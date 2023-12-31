"use strict";

$(document).ready(function () {
  var $examples = $(".doc-example");

  // hilight
  var $codes = $(".code");
  hljs.configure({ useBR: true, tabReplace: "  " });

  $codes.each(function (e) {
    var $code = $(this);
    var code = $code.data("code");
    var language = $code.attr("lang");
    language = language ? [language] : ["xml", "css", "javascript", "json"];

    var highlighted = hljs.highlightAuto(code, language);
    $code.addClass("hljs");
    $code.html(hljs.fixMarkup(highlighted.value));
    $code.wrap("<pre></pre>");
  });

  // copy to clipboard
  var clipboard = new ClipboardJS(".btn-clipboard", {
    target: function target(trigger) {
      return trigger.parentNode.nextElementSibling;
    }
  });

  clipboard.on("success", function (e) {
    $(e.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");

    e.clearSelection();
  });

  clipboard.on("error", function (e) {});

  loadHeader();
  loadSidebar();
});

$(document).ready(function () {
  var globalClasses = [
  // {
  //   name: "Animations",
  //   classes: [".fade-in", ".spin"],
  // },
  {
    name: "Spacings - p for padding, m for margin. directions are t,r,b,l and sizes are 0,1,2,3...25",
    classes: [".p{direction}-{size} (e.g. pt-2, px-4)", ".m{direction}-{size} (e.g. mb-2, mx-4, mx-auto)"]
  }, {
    name: "More Spacings",
    classes: [".m-auto", ".mx-auto", ".my-auto", ".m-sm-30", ".mb-sm-30", ".w-full", ".max-w-full", ".min-w-full", ".min-w-full-screen", ".w-full-screen", ".min-w-600", ".min-w-750", ".min-w-1050", ".max-w-450", ".max-w-550", ".max-h-500", ".max-w-600", ".max-w-770", ".max-w-800", ".max-w-850", ".max-w-900", ".max-w-1340", ".h-full", ".min-h-full", ".h-auto", ".h-full-screen", ".min-h-full-screen", ".h-150px", ".size-36", ".size-24"]
  }, {
    name: "Colors",
    classes: [".bg-primary", ".bg-secondary", ".bg-green", ".bg-error", ".bg-white", ".bg-default", ".bg-paper", ".bg-gray", ".bg-light-gray", ".bg-dark", ".bg-light-dark", ".hover-bg-primary", ".hover-bg-primary", ".hover-bg-secondary", ".hover-bg-secondary", ".hover-bg-error", ".hover-bg-error", ".hover-bg-green", ".hover-bg-green", ".bg-light-primary", ".bg-light-secondary", ".bg-light-error", ".section-bg-light-primary", ".bg-light-green", ".bg-transparent", ".text-white", ".text-black", ".text-body", ".text-white-secondary", ".text-muted-white", ".text-light-white", ".text-muted", ".text-hint", ".text-gray", ".text-brand", ".text-primary", ".text-secondary", ".text-error", ".text-green", ".text-inherit", ".gray-on-hover", ".gray-on-hover", ".border-color-white", ".border-color-primary", ".border-color-default", ".border-color-paper"]
  }, {
    name: "Border",
    classes: [".border-radius-0", ".border-radius-4", ".border-radius-8", ".border-radius-12", ".border-radius-circle", ".border-none", ".border-transparent", ".rounded", ".rounded-l", ".rounded-r"]
  }, {
    name: "Position",
    classes: [".hidden", ".block", ".inline-block", ".flex", ".flex-column", ".flex-wrap", ".justify-start", ".justify-center", ".justify-end", ".justify-between", ".justify-around", ".items-center", ".items-start", ".items-end", ".items-stretch", ".flex-grow", ".overflow-auto", ".overflow-hidden", ".overflow-unset", ".overflow-visible", ".scroll-y", ".relative", ".position-bottom", ".text-center", ".align-middle", ".text-right", ".text-left", ".x-center", ".y-center"]
  }, {
    name: "Shadow",
    classes: function () {
      var arr = [];
      for (var i = 1; i <= 24; i++) {
        arr.push('.elevation-z' + i);
      }
      return arr;
    }()
  }, {
    name: "Typography",
    classes: [".h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6", ".h1, h1", ".h2, h2", ".h3, h3", ".h4, h4", ".h5, h5", ".h6, h6", "a", ".caption", ".subtitle-1", ".subtitle-2", ".heading", ".title", ".display-1", ".display-2", ".display-3", ".display-4", ".capitalize", ".uppercase", ".lowercase", ".font-normal", ".font-light", ".font-medium", ".font-semibold", ".font-bold", ".text-11", ".text-12", ".text-13", ".text-14", ".text-15", ".text-16", ".text-18", ".text-20", ".text-22", ".text-24", ".text-28", ".text-30", ".text-32", ".text-36", ".text-40", ".text-44", ".text-48", ".text-54", ".text-58", ".text-62", ".text-72", ".text-small", ".whitespace-pre-wrap", ".whitespace-pre", ".whitespace-no-wrap", ".line-height-1", ".ellipsis"]
  }, {
    name: "Common",
    classes: [".circular-image-small", ".card", ".card", ".card-title", ".card-subtitle", ".theme-dark .card-subtitle", ".hide-on-mobile", "@media screen and (max-width: 767px)", "@media screen and (min-width: 1200px)", "@media screen and (max-width: 1200px)", ".VictoryContainer svg", ".box-shadow-none", ".circle-44", ".circle-32", ".circle-32 .MuiFab-root", ".circle-32 .MuiIcon-root", ".show-on-mobile", ".invisible-on-pc", ".highlight-js pre", ".cursor-pointer", ".cursor-move", ".avatar", ".face-group .avatar:not(:first-child)", ".opacity-1"]
  }];

  var classesDiv = $("#utility-classes");

  globalClasses.forEach(function (item) {
    classesDiv.append("<p><strong>" + item.name + "</strong></p>");

    var list = "<ul>";
    item.classes.forEach(function (className) {
      list += "<li>" + className + "</li>";
    });
    list += "</ul>";

    classesDiv.append(list);
  });
});