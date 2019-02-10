/*Enhanced Ecommerce Tracking OC-1.5.x.x v1.3.1 (http://vanstudio.co.ua)*/
var ee_product = {
    'click': function(e, product_id, quantity) {
        var product = $(e).data('product');

        ga('ec:addProduct', {
            'id': product.id.replace(/\\/g, ''),
            'name': product.name.replace(/\\/g, ''),
            'category': product.category.replace(/\\/g, ''),
            'brand': product.manufacturer.replace(/\\/g, ''),
            'price': product.price,
            'quantity': typeof(quantity) != 'undefined' ? quantity : '1',
            'position': product.position
        });

        ga('ec:setAction', 'click', {list: product.list.replace(/\\/g, '')});
        ga('send', 'event', 'UX', 'click', 'Results', {
            hitCallback: function() {
                document.location = $(e).attr('href');
            }
        });
    }
}

var ee_promo = {
    'click': function(e){
        var promo = $(e).data('promo');
        ga('ec:addPromo', {
            'id': promo.id,
            'name': promo.name.replace(/\\/g, ''),
            'creative': promo.creative.replace(/\\/g, '')
        });

        ga('ec:setAction', 'promo_click');
        ga('send', 'event', 'Internal Promotions', 'click', promo.name.replace(/\\/g, ''),{
            hitCallback: function() {
                document.location = $(e).attr('href');
            }
        });
    }
}

var ee_cart = {
    'add': function(e, product_id, quantity) {
        var product = $(e).data('product');

        ga('ec:addProduct', {
            'id': product.id.replace(/\\/g, ''),
            'name': product.name.replace(/\\/g, ''),
            'category': product.category.replace(/\\/g, ''),
            'brand': product.manufacturer.replace(/\\/g, ''),
            'price': product.price,
            'quantity': typeof(quantity) != 'undefined' ? quantity : '1',
            'position': product.position
        });
        $.ajax({
            url: 'index.php?route=module/ee_tracking',
            type: 'post',
            data: 'product_id=' + product_id,
            dataType: 'json',
            success: function(redirect) {
                if(redirect){
                    ga('ec:setAction', 'click', {list: product.list.replace(/\\/g, '')});
                    ga('send', 'event', 'UX', 'click', '',{
                        hitCallback: function() {
                            addToCart(product_id, quantity);
                        }
                    });
                } else {
                    ga('ec:setAction', 'add', {list: product.list.replace(/\\/g, '')});
                    ga('send', 'event', 'UX', 'click', 'add to cart',{
                        hitCallback: function() {
                            addToCart(product_id, quantity);
                        }
                    });
                }
            },
            error: function(){
                addToCart(product_id, quantity);
            }
        });
    },
    'remove': function(key, quantity, link) {
        $.ajax({
            url: 'index.php?route=module/ee_tracking/remove',
            type: 'post',
            data: 'key=' + key + '&qnt=' + quantity,
            dataType: 'json',
            success: function(json_info) {
                ga('ec:addProduct', {
                    'id': json_info.id.replace(/\\/g, ''),
                    'name': json_info.name.replace(/\\/g, ''),
                    'category': json_info.category.replace(/\\/g, ''),
                    'brand': json_info.manufacturer.replace(/\\/g, ''),
                    'variant': json_info.options.replace(/\\/g, ''),
                    'price': json_info.price,
                    'quantity': json_info.quantity
                });
                ga('ec:setAction', 'remove');
                ga('send', 'event', 'UX', 'click', 'remove from cart',{
                    hitCallback: function() {
                        if(link){
                            location = link;
                        }
                    }
                });
            },
            error: function(){
                if(link){
                    location = link;
                }
            }
        });
    }
}

var ee_checkout = {
    'step' : function(step, option, link){
        if(option){
            ga('ec:setAction','checkout', {
                'step': step,
                'option': option
            });
        } else {
            ga('ec:setAction','checkout', {
                'step': step
            });
        }

        ga('send', 'event', 'Checkout', 'Step', {
            'hitCallback': function() {
                if(link){
                    location = link;
                }
            }
        });
    },
    'option' : function(step, option, link){
        ga('ec:setAction', 'checkout_option', {
            'step': step,
            'option': option
        });

        ga('send', 'event', 'Checkout', 'Option', {
            hitCallback: function() {
                if(link){
                    location = link;
                }
            }
        });
    }
}
