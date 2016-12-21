//Cat Array Declaration
var catArray = {
    currentCat: null,
    cats:[
        {
            clickCount : 0,
            name : 'One',
            imgSrc : "img/cat-1.jpg",
        },
        {
            clickCount : 0,
            name : 'Two',
            imgSrc : "img/cat-2.jpg",
        },
        {
            clickCount : 0,
            name : 'Three',
            imgSrc : "img/cat-3.jpg",
        },
        {
            clickCount : 0,
            name : 'Four',
            imgSrc : "img/cat-4.jpg",
        },
        {
            clickCount : 0,
            name : 'Five',
            imgSrc : "img/cat-5.jpg",
        }
    ]
};

//Box function
var box = {
    init: function(){
        //current cat is 1st cat in list
        catArray.currentCat = catArray.cats[0];
        //initialize views
        catListView.init();
        catView.init();
    },

    getCats: function(){
        return catArray.cats;
    },

    getCurrentCat: function(){
        return catArray.currentCat;
    },

    setCurrentCat: function(cat){
        catArray.currentCat = cat;
    },

    incrementCounter: function(){
        catArray.currentCat.clickCount++;
        catView.render();
    }
};

//Cat View
var catView = {
    init: function() {
        //pointers stored to DOM
        this.catElem = document.getElementById('cat');
        this.catNameElem = document.getElementById('cat-name');
        this.catImageElem = document.getElementById('cat-img');
        this.countElem = document.getElementById('cat-count');

        //increment cat count on click
        this.catImageElem.addEventListener('click',function(){
            box.incrementCounter();
        });
        //update DOM with exact values
        this.render();
    },

    render: function(){
        var currentCat = box.getCurrentCat();
        this.countElem.textContent = currentCat.clickCount;
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.imgSrc;
    }
};

//Cat List View
var catListView = {
    init: function(){
        //DOM element for easy access
        this.catListElem = document.getElementById('cat-list');
        //update DOM with exact values
        this.render();
    },

    render: function(){
        var cat, elem, i;

        //get cat
        var cats = box.getCats();
        //cat list emptying
        this.catListElem.innerHTML = '';

        //for each cat
        for(i=0; i<cats.length; i++){
            //set current cat
            cat = cats[i];
            //new cat list & set text
            elem = document.createElement('li');
            elem.textContent = cat.name;

            //cat value linked to click event : closure-in-a-loop method
            elem.addEventListener('click', (function(catCopy){
                return function(){
                    box.setCurrentCat(catCopy);
                    catView.render();
                };
            })(cat));
            //append elem to list
            this.catListElem.appendChild(elem);
        }
    }
};

//run box
box.init();