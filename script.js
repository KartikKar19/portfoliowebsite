function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h2").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h2").innerHTML = clutter;
})


gsap.to("#page2>h2>span",{
    scrollTrigger:{
        trigger:`#page2>h2>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})


// Scrambled Text Greeting
// https://thatafro.netlify.app/
class ScrambleTheText {
	constructor(getTheGreeting) {
		this.getTheGreeting = getTheGreeting;
		this.chars = "M!E<H*I!KQW__Q+A?";
		this.update = this.update.bind(this);
	}

	setText(newText) {
		var oldText = this.getTheGreeting.innerText;
		var length = Math.max(oldText.length, newText.length);
		var promise = new Promise((resolve) => (this.resolve = resolve));

		this.queue = [];
		for (let i = 0; i < length; i++) {
			var from = oldText[i] || "";
			var to = newText[i] || "";
			var start = Math.floor(Math.random() * 40);
			var end = start + Math.floor(Math.random() * 40);
			this.queue.push({
				from,
				to,
				start,
				end
			});
		}
		cancelAnimationFrame(this.frameRequest);
		this.frame = 0;
		this.update();
		return promise;
	}

	update() {
		let output = "";
		let complete = 0;
		for (let i = 0, n = this.queue.length; i < n; i++) {
			let { from, to, start, end, char } = this.queue[i];
			if (this.frame >= end) {
				complete++;
				output += to;
			} else if (this.frame >= start) {
				if (!char || Math.random() < 0.28) {
					char = this.randomCharacter();
					this.queue[i].char = char;
				}
				output += `<span class="dummy">${char}</span>`;
			} else {
				output += from;
			}
		}
		this.getTheGreeting.innerHTML = output;
		if (complete === this.queue.length) {
			this.resolve();
		} else {
			this.frameRequest = requestAnimationFrame(this.update);
			this.frame++;
		}
	}

	randomCharacter() {
		return this.chars[Math.floor(Math.random() * this.chars.length)];
	}
}
// The Greeting
let AfroGreetings = ["Hello!", "FullStack Developer","UI/UX Designer","Badminton Player","True Foodie","Globetrotter"];
let getTheGreeting = document.querySelector(".thatAfroGreetings");
let TheGreetingEffect = new ScrambleTheText(getTheGreeting);
let counter = 0;
let nextGreeting = () => {
	TheGreetingEffect.setText(AfroGreetings[counter]).then(() => {
		setTimeout(nextGreeting, 1500);
	});
	counter = (counter + 1) % AfroGreetings.length;
};
nextGreeting();

function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
 ./0001.jpg 
 ./0002.jpg
 ./0003.jpg
 ./0004.jpg  
 ./0005.jpg
 ./0006.jpg
 ./0007.jpg
 ./0008.jpg
 ./0009.jpg
 ./0010.jpg
 ./0011.jpg
 ./0012.jpg
 ./0013.jpg
 ./0014.jpg
 ./0015.jpg
 ./0016.jpg
 ./0017.jpg
 ./0018.jpg
 ./0019.jpg
 ./0020.jpg
 ./0021.jpg
 ./0022.jpg
 ./0023.jpg
 ./0024.jpg
 ./0025.jpg
 ./0026.jpg
 ./0027.jpg
 ./0028.jpg
 ./0029.jpg
 ./0030.jpg
 ./0031.jpg
 ./0032.jpg
 ./0033.jpg
 ./0034.jpg
 ./0035.jpg
 ./0036.jpg
 ./0037.jpg
 ./0038.jpg
 ./0039.jpg
 ./0040.jpg
 ./0041.jpg
 ./0042.jpg
 ./0043.jpg
 ./0044.jpg
 ./0045.jpg
 ./0046.jpg
 ./0047.jpg
 ./0048.jpg
 ./0049.jpg
 ./0050.jpg
 ./0051.jpg
 ./0052.jpg
 ./0053.jpg
 ./0054.jpg
 ./0055.jpg
 ./0056.jpg
 ./0057.jpg
 ./0058.jpg
 ./0059.jpg
 ./0060.jpg
 ./0061.jpg
 ./0062.jpg
 ./0063.jpg
 ./0064.jpg
 ./0065.jpg
 ./0066.jpg
 ./0067.jpg
 ./0068.jpg
 ./0069.jpg
 ./0070.jpg
 ./0071.jpg 
 ./0072.jpg
 ./0073.jpg
 ./0074.jpg  
 ./0075.jpg
 ./0076.jpg
 ./0077.jpg
 ./0078.jpg
 ./0079.jpg
 ./0080.jpg
 ./0081.jpg
 ./0082.jpg
 ./0083.jpg
 ./0084.jpg
 ./0085.jpg
 ./0086.jpg
 ./0087.jpg
 ./0088.jpg
 ./0089.jpg
 ./0090.jpg
 ./0091.jpg
 ./0092.jpg
 ./0093.jpg
 ./0094.jpg
 ./0095.jpg
 ./0096.jpg
 ./0097.jpg
 ./0098.jpg
 ./0099.jpg
 ./0100.jpg
 ./0101.jpg
 ./0102.jpg
 ./0103.jpg
 ./0104.jpg
 ./0105.jpg
 ./0106.jpg
 ./0107.jpg
 ./0108.jpg
 ./0109.jpg
 ./0110.jpg
 ./0111.jpg 
 ./0112.jpg
 ./0113.jpg
 ./0114.jpg  
 ./0115.jpg
 ./0116.jpg
 ./0117.jpg
 ./0118.jpg
 ./0119.jpg
 ./0120.jpg
 ./0121.jpg
 ./0122.jpg
 ./0123.jpg
 ./0124.jpg
 ./0125.jpg
 ./0126.jpg
 ./0127.jpg
 ./0128.jpg
 ./0129.jpg
 ./0130.jpg
 ./0131.jpg
 ./0132.jpg
 ./0133.jpg
 ./0134.jpg
 ./0135.jpg
 ./0136.jpg
 ./0137.jpg
 ./0138.jpg
 ./0139.jpg
 ./0140.jpg
 ./0141.jpg
 ./0142.jpg
 ./0143.jpg
 ./0144.jpg
 ./0145.jpg
 ./0146.jpg
 ./0147.jpg
 ./0148.jpg
 ./0149.jpg
 ./0150.jpg

 `;
  return data.split("\n")[index];
}

const frameCount = 150;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()




