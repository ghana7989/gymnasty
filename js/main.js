(function ($) {
	'use strict';

	// Dropdown on mouse hover
	$(document).ready(function () {
		function toggleNavbarMethod() {
			if ($(window).width() > 992) {
				$('.navbar .dropdown')
					.on('mouseover', function () {
						$('.dropdown-toggle', this).trigger('click');
					})
					.on('mouseout', function () {
						$('.dropdown-toggle', this).trigger('click').blur();
					});
			} else {
				$('.navbar .dropdown').off('mouseover').off('mouseout');
			}
		}
		toggleNavbarMethod();
		$(window).resize(toggleNavbarMethod);
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
		return false;
	});
})(jQuery);

const siteConfig = {
	PHONE_NUMBER: '+919849239239',
	EMAIL: 'test@test.com',
	WHATSAPP_LINK: 'https://api.whatsapp.com/send?phone=919849239239&text=<TEXT>',
};

// Copy to clipboard
const elemPhoneNumber = document.getElementById('phoneNumber');
elemPhoneNumber.addEventListener('click', () => {
	navigator.clipboard.writeText(siteConfig.PHONE_NUMBER).then(function () {
		setTimeout(function () {
			elemPhoneNumber.classList.remove('copied');
		}, 1000);
	});
});

// form submit button
const elemFormSubmitButton = document.getElementById('sendMessageButton');

elemFormSubmitButton.addEventListener('click', e => {
	e.preventDefault();
	const name = document.getElementById('form-name');
	const message = document.getElementById('form-message');
	const whatsappLink = siteConfig.WHATSAPP_LINK.replace(
		'<TEXT>',
		`Hello 👋,
    name: ${name.value},
    message: ${message.value}
    Thanks 🙏`,
	);
	const url = encodeURI(whatsappLink);
	window.open(url, '_blank');
});
