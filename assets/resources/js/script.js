// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});


//Sidebar Dropdown Menu
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});



//Toggle Button
$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $('#page-content').toggleClass('active');
        $('#nav-section').toggleClass('active');
    });
});

// Animated Header
$(document).on('scroll', function() {
    if ($(this).scrollTop() > 1) {
        $('.nav-section').addClass('sticky');
    } else {
        $('.nav-section').removeClass('sticky');
    }
});

// Show Hide Div Using Guardian NID field
$(function() {
    $("#selectnid").change(function() {
        if ($(this).val() == "F" || $(this).val() == "M" || $(this).val() == "G") {
            $("#inputnid").show();
        }
    });
});


// Only Year Selection

$(document).ready(function(e) {
    $('.yearselect').yearselect();

    $('.yrselectdesc').yearselect({
        step: 5,
        order: 'desc'
    });
    $('.yrselectasc').yearselect({
        order: 'asc'
    });
});