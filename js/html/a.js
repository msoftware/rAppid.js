define(['js/html/HtmlElement'], function (HtmlElement) {

    var externalLink = /^(([^:]+:\/\/)|(javascript:))/i,
        stripHashSlash = /^#?\/?/,
        hashBankUrl = /^#?(.*)$/;

    return HtmlElement.inherit("js.html.a", {
        defaults: {
            tagName: 'a',
            target: null,
            href: null
        },
        _renderHref: function (href) {
            href = href || "javascript:void(0);";

            if (!(this.$.target === "external" || externalLink.test(href) || this.$.target === "_blank")) {

                href = "#/" + href.replace(stripHashSlash, '');

                if (!this.runsInBrowser()) {
                    // node rendering -> hash bang url
                    href = href.replace(hashBankUrl, "#!$1");
                }
            }

            this.$el.setAttribute("href", href);
        },

        _renderTarget: function(target) {
            if (target && target !== "external") {
                this.$el.setAttribute("target", target);
            }
        }
    });
});