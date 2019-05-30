$('.page-scroll').on('click', function(e)	{

	let section = $(this).attr('href');
	let elemen = $(section)
	// console.log(elemen);

	 $('html, body').animate({
        scrollTop: elemen.offset().top - 50
    }, 800, 'swing');

	e.preventDefault();
});