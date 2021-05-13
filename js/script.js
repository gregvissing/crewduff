// TweenLite.defaultEase = Power2.easeInOut;
// TweenMax.set("#demo", { opacity: 1 });
// // GSDevTools.create();
// var tl = new TimelineMax();

// tl.staggerFrom("#bases path", 0.75, { drawSVG: 0 }, 0.35);

TweenMax.fromTo(
	"path",
	2,
	{ drawSVG: "50% 50%" },
	{
		drawSVG: "0% 100%",
		repeat: -1,
		repeatDelay: 0.25,
		yoyo: true,
		ease: Linear.easeNone
	}
);
