// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});


// submenu active
$('.submenu').on('click', 'li', function() {
    $('.submenu li.active').removeClass('active');
    $(this).addClass('active');
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

// Show Hide Div Using Local Guardian Name
$(function() {
    $("#selectname").change(function() {
        if ($(this).val() == "O") {
            $("#inputname").show();
        } else {
            $("#inputname").hide();
        }
    });
});


// Show hide div using subject or class
$('#showdiv1').click(function() {
    $('#div2').hide();
    $('#div1').show();
});
$('#showdiv2').click(function() {
    $('#div1').hide();
    $('#div2').show();
});






// Only Year Selection start
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
// Only Year Selection end


// auto search in subject-list page start
$(function() {
    $('#search').on('keyup', function() {
        var pattern = $(this).val();
        $('.searchable-container .items').hide();
        $('.searchable-container .items').filter(function() {
            return $(this).text().match(new RegExp(pattern, 'i'));
        }).show();
    });
});
// auto search in subject-list page end



// full screen start
$(function() {
    // check native support
    $('#support').text($.fullscreen.isNativelySupported() ? 'supports' : 'doesn\'t support');

    // open in fullscreen
    $('#fullscreen .requestfullscreen').click(function() {
        $('#fullscreen').fullscreen();
        return false;
    });

    // exit fullscreen
    $('#fullscreen .exitfullscreen').click(function() {
        $.fullscreen.exit();
        return false;
    });

    // document's event
    $(document).bind('fscreenchange', function(e, state, elem) {
        // if we currently in fullscreen mode
        if ($.fullscreen.isFullScreen()) {
            $('#fullscreen .requestfullscreen').hide();
            $('#fullscreen .exitfullscreen').show();
        } else {
            $('#fullscreen .requestfullscreen').show();
            $('#fullscreen .exitfullscreen').hide();
        }

        $('#state').text($.fullscreen.isFullScreen() ? '' : 'not');
    });
});

// full screen end