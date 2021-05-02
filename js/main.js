$(function () {
    const $landing = $('.js-landing');
    const $jsToggleNav = $('.js-hambuger-menu');
    const $wrapper = $landing.find('.wrapper');
    const $stepLayouts = $('.js-step-layout a');
    const $imageText = $('.js-box-image-text');
    const $divider = $('.js-divider');

    $jsToggleNav.on('click', function (e) {
        console.log(e.currentTarget);
        e.currentTarget.classList.toggle('on');
        $landing.toggleClass('has-modal');
    });

    $stepLayouts.each((i, item) => {
        $(item).on('click', handleClick);
    });

    function handleClick(e) {
        removeActive();
        $(e.target).addClass('active');
    }

    function removeActive() {
        for (let i = 0; i < $stepLayouts.length - 1; i++) {
            $stepLayouts[i].classList.remove('active');
        }
    }

    $(window).scroll(function () {
        let scrollPage = window.pageYOffset

        $imageText.each((i, item) => {
            let $item = $(item);
            const osTopEl = $item.offset().top;
            const heightEl = $item.outerHeight();
            const id = $item.attr('id');

            if (scrollPage < 600) {
                $($stepLayouts[0]).addClass('active');
            }

            if (scrollPage > osTopEl && scrollPage < (osTopEl + heightEl + 100)) {     
                removeActive();           
                $(`a[data-id='${id}']`).addClass('active');
            } else {
               
                $(`a[data-id='${id}']`).removeClass('active');
            }

            if (scrollPage > osTopEl + 200 && scrollPage < (osTopEl + heightEl + 100)) {
                let w = (scrollPage - osTopEl) / heightEl;
                $($divider[i]).css('width', `${w * 100}%`);
            } else {
                $($divider[i]).removeClass('active');
            }
        });
    });


    const $thumbImg = $imageText.find('.js-thumb-img');

    $thumbImg.find('div').each( (i, item) => {
        const $item = $(item);

        $item.on('click', function () { 
            const urlImg = $item.data('img');
            $item.closest('.js-image').fadeIn();

            $item.closest('.js-image').css({
                backgroundImage: `url(${urlImg})`
            });
         })
    });
});