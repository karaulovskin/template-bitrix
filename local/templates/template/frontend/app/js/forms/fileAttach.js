export default class FileAttach {
    initer = '.js-attach';
    attacher = '.form-attach__label';
    removeBtn = '.form-attach__remove';

    constructor() {
        this.events();
    }

    events () {
        let self = this;

        $(document).on('change', '.js-attach', function() {
            self.attach($(this));
        });

        $(document).on('click', this.removeBtn, function() {
            self.remove($(this));
        });
    }

    attach ($elem) {
        let val = $elem.val();
        let value = val || $elem.attr('placeholder');
        let $parent = $elem.parent();

        if (val) {
            $parent.addClass('is-attached');
        } else {
            $parent.removeClass('is-attached');
        }

        $parent.find(this.attacher).text(this.basename(value));
    }

    remove($elem) {
        let $parent = $elem.parent();
        let $input = $parent.find(this.initer);

        $input
            .val('')
            .trigger('change')
        ;
    }

    basename (path) {
        return path.replace(/\\/g,'/').replace( /.*\//, '' );
    }
}
