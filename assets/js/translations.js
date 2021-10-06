---
layout: empty
---

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

{% for locale in site.data.ui-text %}{% if locale.first != "en" and locale.first != "de" %}{% continue %}{% endif %}
    "{{ locale.first }}": {
        {% for keyvaluepair in locale.last %}"{{ keyvaluepair.first }}": "{{ keyvaluepair.last }}"{% if forloop.last == false %},{% endif %}
        {% endfor %}
    }{% if forloop.last == false %},{% endif %}
{% endfor %}
};

$(document).ready(function() {
    translations.translateAll();
    translations.setDateFormat();
});