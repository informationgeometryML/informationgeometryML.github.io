var translations = {
    locale: navigator.language,
    language: navigator.language.substr(0, 2),
    getTranslation: function(key)
    {
        if(this[this.language] && this[this.language][key])
            return this[this.language][key];
        if(this["en"] && this["en"][key])
            return this["en"][key];
        return null;
    },
    translateAll: function()
    {
        $("[data-translate]").each(function(){
            var key = $(this).data('translate');
            var t = translations.getTranslation(key);
            if(t !== null)
                $(this).text(t);
        });
    },
    setDateFormat: function()
    {
        var dateFormat = new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: '2-digit', day: '2-digit'});
        var dateTimeFormat = new Intl.DateTimeFormat(this.locale, { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'});
      
        $('time').each(function() {
          var dateStr = $(this).attr('datetime');
          if (dateStr)
          {
            var str;
            var date = new Date(dateStr);
            if(dateStr.indexOf("T") == -1 || dateStr.indexOf("T00:00:00") > -1)
              str = dateFormat.format(date);
            else
              str = dateTimeFormat.format(date);
            $(this).text(str);
          }
        });
    },
    setLocale: function(newLocale)
    {
        var newLang = newLocale.substr(0, 2);
        if(this[newLang])
        {
            this.locale = newLocale;
            this.language = newLang;
            this.translateAll();
            this.setDateFormat();
        }
    },


    "en": {
        "skip_links": "Skip links",
        "skip_primary_nav": "Skip to primary navigation",
        "skip_content": "Skip to content",
        "skip_footer": "Skip to footer",
        "page": "Page",
        "pagination_previous": "Previous",
        "pagination_next": "Next",
        "breadcrumb_home_label": "Home",
        "breadcrumb_separator": "/",
        "menu_label": "Toggle menu",
        "search_label": "Toggle search",
        "toc_label": "On this page",
        "ext_link_label": "Direct link",
        "less_than": "less than",
        "minute_read": "minute read",
        "share_on_label": "Share on",
        "meta_label": "",
        "tags_label": "Tags:",
        "categories_label": "Categories:",
        "date_label": "Updated:",
        "comments_label": "Leave a comment",
        "comments_title": "Comments",
        "more_label": "Learn more",
        "related_label": "You may also enjoy",
        "follow_label": "Follow",
        "feed_label": "Feed",
        "powered_by": "Powered by",
        "website_label": "Website",
        "email_label": "Email",
        "recent_posts": "Recent posts",
        "undefined_wpm": "Undefined parameter words_per_minute at _config.yml",
        "comment_form_info": "Your email address will not be published. Required fields are marked",
        "comment_form_comment_label": "Comment",
        "comment_form_permalink": "Permalink to this comment",
        "comment_form_at": "at",
        "comment_form_md_info": "Markdown is supported.",
        "comment_form_reply_to": "⮩ Reply",
        "comment_form_cancel_reply": "Cancel reply",
        "comment_form_name_label": "Name",
        "comment_form_email_label": "Email address",
        "comment_form_website_label": "Website (optional)",
        "comment_btn_submit": "Submit comment",
        "comment_btn_submitted": "Submitted",
        "comment_success_msg": "Thanks for your comment! It will show on the site once it has been approved.",
        "comment_error_msg": "Sorry, there was an error with your submission. Please make sure all required fields have been completed and try again.",
        "loading_label": "Loading...",
        "search_label_text": "Enter your search term...",
        "search_placeholder_text": "Enter your search term...",
        "search_algolia_no_results": "No results",
        "results_found": "Result(s) found",
        "back_to_top": "Back to top"
        
    },

    "de": {
        "skip_links": "",
        "skip_primary_nav": "",
        "skip_content": "",
        "skip_footer": "",
        "page": "Seite",
        "pagination_previous": "Vorherige",
        "pagination_next": "Nächste",
        "breadcrumb_home_label": "Start",
        "breadcrumb_separator": "/",
        "menu_label": "Menü ein-/ausschalten",
        "search_label": "",
        "toc_label": "Auf dieser Seite",
        "ext_link_label": "Direkter Link",
        "less_than": "weniger als",
        "minute_read": "Minuten zum lesen",
        "share_on_label": "Teilen auf",
        "meta_label": "",
        "tags_label": "Tags:",
        "categories_label": "Kategorien:",
        "date_label": "Aktualisiert:",
        "comments_label": "Hinterlassen Sie einen Kommentar",
        "comments_title": "Kommentare",
        "more_label": "Mehr anzeigen",
        "related_label": "Ihnen gefällt vielleicht auch",
        "follow_label": "Folgen",
        "feed_label": "Feed",
        "powered_by": "Möglich durch",
        "website_label": "Webseite",
        "email_label": "E-Mail",
        "recent_posts": "Aktuelle Beiträge",
        "undefined_wpm": "Undefinierter Parameter words_per_minute in _config.yml",
        "comment_form_info": "Ihre E-Mail Adresse wird nicht veröffentlicht. Benötigte Felder sind markiert",
        "comment_form_comment_label": "Kommentar",
        "comment_form_permalink": "Permalink zu diesem Kommentar",
        "comment_form_at": "von",
        "comment_form_md_info": "Markdown wird unterstützt.",
        "comment_form_reply_to": "⮩ Antworten",
        "comment_form_cancel_reply": "Antworten abbrechen",
        "comment_form_name_label": "Name",
        "comment_form_email_label": "E-Mail-Adresse",
        "comment_form_website_label": "Webseite (optional)",
        "comment_btn_submit": "Kommentar absenden",
        "comment_btn_submitted": "Versendet",
        "comment_success_msg": "Danke für Ihren Kommentar! Er wird auf der Seite angezeigt, nachdem er geprüft wurde.",
        "comment_error_msg": "Entschuldigung, es gab einen Fehler. Bitte füllen Sie alle benötigten Felder aus und versuchen Sie es erneut.",
        "loading_label": "Lade...",
        "search_label_text": "",
        "search_placeholder_text": "Suchbegriff eingeben...",
        "search_algolia_no_results": "",
        "results_found": "Ergebnis(se) gefunden"
        
    },

};

$(document).ready(function() {
    translations.translateAll();
    translations.setDateFormat();
});