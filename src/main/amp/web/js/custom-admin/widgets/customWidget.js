define(["dojo/_base/declare",
        "dijit/_WidgetBase",
        "alfresco/core/Core",
        "alfresco/core/CoreXhr",
        "dojo/dom-construct",
        "dojo/_base/array",
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/customWidget.html"
    ],
    function(declare, _Widget, Core, AlfCoreXhr, domConstruct, array, _Templated, template) {
        return declare([_Widget, Core, AlfCoreXhr, _Templated], {
            templateString: template,
            cssRequirements: [{cssFile:"./css/customWidget.css"}],
            i18nRequirements: [ {i18nFile: "./i18n/customWidget.properties"} ],

            buildRendering: function audit_widgets_customWidget__buildRendering() {
                this.widgetTitle       = this.message('widgetTitle');
                this.columnName        = this.message('columnName');
                this.columnDescription = this.message('columnDescription');
                this.inherited(arguments);
            },

            postCreate: function audit_widgets_customWidget__postCreate() {
                var url = Alfresco.constants.PROXY_URI + "slingshot/doclib/treenode/node/alfresco/company/home/data dictionary";
                this.serviceXhr({url : url,
                                 method: "GET",
                                 successCallback: this._onSuccessCallback,
                                 callbackScope: this});
            },

            _onSuccessCallback: function audit_widgets_customWidget__onSuccessCallback(response, config) {
                if (response.totalResults != undefined && response.totalResults > 0) {
                    var parentNode = this.containerNode;
                    array.forEach( response.items, function(item) {
                        var row = domConstruct.create( "tr", {}, parentNode );
                        domConstruct.create( "td", { innerHTML: item.name }, row);
                        domConstruct.create( "td", { innerHTML: item.description }, row);
                    });
                }
            }
        });
});