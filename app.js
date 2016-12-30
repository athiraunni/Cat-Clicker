var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    // this.imgAttribution = ko.observable('https://fliker.com/photos/bigcat');
    this.nicknames = ko.observableArray(['Tabtab', 'T-Bone', 'Mr.T', 'Tabi']);

    this.title = ko.computed(function(){
        var title;
        var clicks = this.clickCount();
        if(clicks < 10){
            title = 'Newborn';
        } else if(clicks < 50){
            title = 'Infant';
        } else if(clicks < 100){
            title = 'Child';
        } else if(clicks < 200){
            title = 'Teen';
        } else if(clicks < 500){
            title = 'Adult';
        } else {
            title = 'Ninja';
        }
        return title;
   })

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
        //var count = 0;
        //count++;
    };
}

ko.applyBindings(new ViewModel());
