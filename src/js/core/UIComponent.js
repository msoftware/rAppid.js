rAppid.defineClass("js.core.UIComponent",
    ["underscore", "js.core.Component"], function (_, Composite) {
        return Composite.inherit({
            $tagName: 'div',

            render: function() {
                if(!this.$initialized){
                    this._initialize(this.$creationPolicy);
                }
                // check if it is already rendered
                if(this.isRendered()){
                    return this.$el;
                }

                if(this.$options.tagName){
                    this.$tagName = this.$options.tagName;
                }
                this.$el = document.createElement(this.$tagName);

                this._renderWidth(this.$options.width);
                this._renderClassName(this.$options.className);
                // bind events -> on ...
                // this._registerEvents(['click','mouseover','mouseout','keydown']);

                // for all children
                var child;
                for(var i = 0; i < this.$children.length; i++){
                    child = this.$children[i];
                    if (_.isFunction(child.render)) {
                        var el =  child.render();
                        if(el){
                            this.$el.appendChild(el);
                        }
                    }
                }

                return this.$el;
            },
            isRendered: function(){
                return typeof (this.$el) != "undefined";
            },
            _renderWidth: function(width){
                if(width){
                    this.$el.setAttribute('width',width);
                }else{
                    this.$el.removeAttribute('width');
                }
            },
            _renderClassName: function(className){
                if(className){
                    this.$el.setAttribute('className',className);
                }else{
                    this.$el.removeAttribute('className');
                }
            }
        });
    }
);