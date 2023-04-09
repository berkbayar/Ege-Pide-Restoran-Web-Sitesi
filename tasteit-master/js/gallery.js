//Gallery Array
var galleryImages = ["2.jpg", "a3.jpg", "6322.jpg", "6425.jpg", "c1.jpg", "c2.jpg", "c3.jpg", "c4.jpg", "c5.jpg", "c6.jpg", "c7.jpg", "c8.jpg"];

//#region 
const gallery = document.getElementById("gallery");

var imageViewer = document.createElement("div");
var imageViewerEnabled = false;

var currentImageId = 0;

function createGallery(){
    if(galleryImages.length < 1){
        console.log("Gallery couldn't created: Array empty.");
        return;
    }

    //GALLERY
    for(var i = 0;i<galleryImages.length;i++){
        gallery.innerHTML += '<div onclick="showImage('+i+')" class="gallery-item"><div style="background-image:url(\'images/'+galleryImages[i]+'\')" class="gallery-image"></div></div>';
    }

    //IMAGE VIEWER
    document.body.appendChild(imageViewer);
    imageViewer.className = "image-viewer";

    var closeImageViewerButton = document.createElement("div");
    imageViewer.appendChild(closeImageViewerButton);
    closeImageViewerButton.className = "close-button";
    closeImageViewerButton.onclick = function(){closeImageViewer()};
    
    var imageList = document.createElement("div");
    imageViewer.appendChild(imageList);
    imageList.className = "image-list";

    for(var i = 0;i<galleryImages.length;i++){
        imageList.innerHTML += '<div onclick="showImage('+i+')" class="image-list-item"><div style="background-image:url(\'images/'+galleryImages[i]+'\')" class="image-list-image"></div></div>';
    }

    var imageCarrier = document.createElement("div");
    imageViewer.appendChild(imageCarrier);
    imageCarrier.className = "image-carrier";
    imageCarrier.id = "imageCarrier";
    
    var nextImageButton = document.createElement("div");
    imageViewer.appendChild(nextImageButton);
    nextImageButton.className = "image-button next";
    nextImageButton.onclick = function(){viewNextImage()};

    var prevImageButton = document.createElement("div");
    imageViewer.appendChild(prevImageButton);
    prevImageButton.className = "image-button prev";
    prevImageButton.onclick = function(){viewNextImage()};
}

function openImageViewer(){
    imageViewerEnabled = true;
    toggleImageViewer();
}

function closeImageViewer(){
    imageViewerEnabled = false;
    toggleImageViewer();
}

function toggleImageViewer(){
    if(imageViewerEnabled){
        imageViewer.style.display = "block";
    }else{
        imageViewer.style.display = "none";
    }
}

function viewNextImage(){
    var next = currentImageId + 1;

    if(next > galleryImages.length-1){
        next = 0;
    }

    showImage(next);
}

function viewPrevImage(){
    var prev = currentImageId - 1;
    if(prev < 0){
        prev = galleryImages.length-1;
    }

    showImage(prev);
}

function showImage(id){
    openImageViewer();
    currentImageId = id;
    var imageCarrier = document.getElementById("imageCarrier");
    imageCarrier.innerHTML = "";
    var imageCarrierContent = document.createElement("img");
    imageCarrier.appendChild(imageCarrierContent);
    imageCarrierContent.className = "image-carrier-content";
    imageCarrierContent.src = "images/"+galleryImages[id]+"";

}

createGallery();

//#endregion