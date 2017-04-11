var modal = document.getElementById("openModal0"),
	modalClass = document.getElementsByClassName("modalDialog"),
// Get the image and insert it inside the modal - use its "alt" text as a caption
	img = document.getElementById("myImg0"),
	imgClass = document.getElementsByClassName("myImg0"),
	modalImgClass = document.getElementsByClassName("modalImagen"),
	modalImg = document.getElementById("img0");

var projects = 10;
for(var i=1; i<projects;i++){
	var modal = document.getElementById("openModal"+i),
	img = document.getElementById("myImg"+i);
	img.setAttribute("data-id", i);

	img.addEventListener('click',function(e){
		var id = e.target.getAttribute("data-id");
		var modalImg = document.getElementById("img"+id);
		modal.style.display = "block";
		modalImg.src = this.src;
	})
}

// img.addEventListener('click',function(){
// 	modal.style.display = "block";
// 	modalImg.src = this.src;
// })

// for(var i = 0; i<imgClass.length;i++){
// 	imgClass[i].addEventListener('click',function(){
// 	modalClass[i].style.display = "block";
// 	modalImgClass[i].src = this.src;
// })
// }

// var modal1 = document.getElementById("openModal1"),
// 	img1 = document.getElementById("myImg1"),
// 	modalImg1 = document.getElementById("img1");

// img1.addEventListener('click',function(){
// 	modal1.style.display = "block";
// 	modalImg1.src = this.src;
// })
// var modal2 = document.getElementById("openModal2"),
// 	img2 = document.getElementById("myImg2"),
// 	modalImg2 = document.getElementById("img2");

// img2.addEventListener('click',function(){
// 	modal2.style.display = "block";
// 	modalImg2.src = this.src;
// })
// var modal3 = document.getElementById("openModal3"),
// 	img3 = document.getElementById("myImg3"),
// 	modalImg3 = document.getElementById("img3");

// img3.addEventListener('click',function(){
// 	modal3.style.display = "block";
// 	modalImg3.src = this.src;
// })
// var modal4 = document.getElementById("openModal4"),
// 	img4 = document.getElementById("myImg4"),
// 	modalImg4 = document.getElementById("img4");

// img4.addEventListener('click',function(){
// 	modal4.style.display = "block";
// 	modalImg4.src = this.src;
// })
// var modal5 = document.getElementById("openModal5"),
// 	img5 = document.getElementById("myImg5"),
// 	modalImg5 = document.getElementById("img5");

// img5.addEventListener('click',function(){
// 	modal5.style.display = "block";
// 	modalImg5.src = this.src;
// })
// var modal6 = document.getElementById("openModal6"),
// 	img6 = document.getElementById("myImg6"),
// 	modalImg6 = document.getElementById("img6");

// img6.addEventListener('click',function(){
// 	modal6.style.display = "block";
// 	modalImg6.src = this.src;
// })
// var modal7 = document.getElementById("openModal7"),
// 	img7 = document.getElementById("myImg7"),
// 	modalImg7 = document.getElementById("img7");

// img7.addEventListener('click',function(){
// 	modal7.style.display = "block";
// 	modalImg7.src = this.src;
// })
// var modal8 = document.getElementById("openModal8"),
// 	img8 = document.getElementById("myImg8"),
// 	modalImg8 = document.getElementById("img8");

// img8.addEventListener('click',function(){
// 	modal8.style.display = "block";
// 	modalImg8.src = this.src;
// })