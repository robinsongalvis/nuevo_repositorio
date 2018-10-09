	
	// Sidenav
	const sidenav = document.querySelector('.sidenav');
	M.Sidenav.init(sidenav,{});
	//SLIDER
	const slider = document.querySelector('.slider');
	M.Slider.init(slider,{
		indicators: false,
		height: 500,
		transition:6000,
	})
	//AUTOCOMPLETE
	const ac = document.querySelector
	('.autocomplete');
	M.Autocomplete.init(ac,{
		data:{
			Aruba: null,
			Florida: null,
			Hawaii: null,
			Venezuela: null,
			Ecuador: null,
			España: null,
			Francia: null,
		}
	});
	//selector

	const mb = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(mb, {});
	// scroll
	const ss = document.querySelectorAll('.scrollspy');
	M.ScrollSpy.init(ss, {})