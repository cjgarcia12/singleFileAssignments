const photoSlideShow = {
    photoList: ['photo 1', 'photo 2', 'photo 3', 'photo 4', 'photo 5'],
    currentPhotoIndex: 0,
    nextPhoto: function() {
        if ((this.currentPhotoIndex < this.photoList.length)) {
            this.currentPhotoIndex++;
            console.log(this.photoList[this.currentPhotoIndex]);
        } 
        else {
            console.log('End of Slideshow');
        }
    },
    prevPhoto: function() {
        if (this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log(this.photoList[this.currentPhotoIndex]);
        } 
        else {
            console.log('Start Slideshow');
        }
    },
    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    }
}

// console.log(photoSlideShow.getCurrentPhoto());
// photoSlideShow.nextPhoto();
// console.log(photoSlideShow.getCurrentPhoto());
// photoSlideShow.prevPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.nextPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();
// photoSlideShow.prevPhoto();