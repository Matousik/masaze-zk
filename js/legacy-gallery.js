/* gallery UI */

let galleryImages = document.querySelectorAll('.gallery-img'); // we sellect all images
let getLatestOpenedImg; //track of what latest opened image is
let windowWidth = window.innerWidth; //grap current width of the window we have in the browser - inner Width is width of browser window

if (galleryImages) { //check if there are any images on the website - if no, will return false
    galleryImages.forEach(function(image, index) { //we have var galleryImages that has all images, we need to iterate through this array for each image - the image is keyword, index counts the current index of the array (galleryImages) we are at now
        image.onclick = function() {        //this function will allow us to open the image when we click on it - with forEach method, we just managed to perform everything we want on every image
            
            /* URL breakdown - we need to get image title */

            let getElementCss = window.getComputedStyle(image); //this method creates an object of style of particular element - eg every style like font-size or margin for example exists as property with value (property- font size, value - 26px) in the object
                                                            //we need this to grap style of every image we are at right now, including property background-image - our true image
            let getFullImgUrl = getElementCss.getPropertyValue('background-image'); //we have url for the thumbnail - need to break it down to get url of full img - just one folder up
            let getImgUrlPos = getFullImgUrl.split('/diplomy/thumbs/'); //we just need to grab last part of url - the one beyond thumbs, which is the same name of img...
            let setNewImgUrl = getImgUrlPos[1].replace('")','');//on second position of the array is our pic position, we also need to erase ") - boom, we have image title

            getLatestOpenedImg = index+1; //to make it more sensible for us
            
            /* create pop-up window */

            let container = document.body; // we will create pop-up window in body of our page
            let newImgWindow = document.createElement('div'); //create new element and insert it into our web page - aka node - we create regular div that will have its image inside
            container.appendChild(newImgWindow); //we created the div but need also to connect it to our website - if we click on image, we will have new div inside our body
            newImgWindow.setAttribute('class', 'img-window'); //we just created class img-window for our new div
            newImgWindow.setAttribute('onclick','closeImg()'); //we created onclick event for our div that is going to run method closeImg() in our JS file

            /* we will now push our image into created popup window */
            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg);

            newImg.setAttribute('src', 'pics/diplomy/' + setNewImgUrl);
            newImg.setAttribute('id', 'current-img');

            /* now we will create buttons next to the image through which we can browse the other images in the gallery */

            newImg.onload = function() { //this block of code will be executed after newImg loads - we need to make sure image width matches with the buttons

                let imgWidth = this.width; //create variable with width of newImg (this)
                let calcImgToEdge = ((windowWidth - imgWidth)/2) -100;                            //now we need to know how far are the buttons from the edge of viewport, and we want it on each side so we divide by 2, 80 will move it just a little bit from the image

                let newPrevBtn = document.createElement('a');
                let btnPrevText = document.createTextNode('Předchozí');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
                newPrevBtn.style.cssText = 'left:'+calcImgToEdge+'px;';

                let newNextBtn = document.createElement('a');
                let btnNextText = document.createTextNode('Další');
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.cssText = 'right:'+calcImgToEdge+'px;';

            }
        }                                  
    });
}

function closeImg() {
    document.querySelector('.img-window').remove(); //we will remove element with this class from the website so it will disappear
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();
}

function changeImg(changeDir) { //we need to pass a parameter - we dont know if we need to go forward or backward
    document.querySelector('#current-img').remove(); //we deleted current image

    let getImgWindow = document.querySelector('.img-window');
    let newImg = document.createElement('img');
    getImgWindow.appendChild(newImg);

    let calcNewImg;

    if (changeDir===1) {
        calcNewImg = getLatestOpenedImg + 1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
        }
    }

    else if (changeDir === 0) {
        calcNewImg = getLatestOpenedImg - 1;
        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
        }
    }

    newImg.setAttribute('src','pics/diplomy/cert' + calcNewImg + '.jpg');
    newImg.setAttribute('id','current-img');

    getLatestOpenedImg = calcNewImg;

    newImg.onload = function() {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth)/2) -100;  

        let nextBtn = document.querySelector('.img-btn-next');
        nextBtn.style.cssText = 'right:'+calcImgToEdge+'px;';

        let prevBtn = document.querySelector('.img-btn-prev');
        prevBtn.style.cssText = 'left:'+calcImgToEdge+'px;';
    }
}